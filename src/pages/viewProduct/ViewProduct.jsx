import "./viewProduct.css";

import { useEffect, useState, React } from "react";
import { userRequest, publicRequest } from "../../requestMethod";
import { useLocation } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";
import { useDispatch } from "react-redux";
import { addFood, clearFood } from "../../redux/foodRedux";
import { resturent } from "../../redux/resturentRedux";
import Container from "./Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { Price, Type } from "../filterStates/FilterStateViewProduct";
import { clearCart } from "../../redux/cartRedux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "200px",
    color: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",
    width: "200px",
    height: "50px",
  },
  inputLabel: {
    color: "white",
    fontSize: "25px",
    fontWeight: "500",
  },
}));

export const ViewProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [resturentdata, setResturentdata] = useState([]);
  const [fooddata, setFooddata] = useState([]);
  const [addtocart, setAddtocart] = useState(false);
  const food = useSelector((state) => state.food.foods);
  const classes = useStyles();
  const [price, setPrice] = useState("low-to-high");

  useEffect(() => {
    const getResturents = async () => {
      const res = await publicRequest.get(`/resturents/find/${id}`);
      // console.log(res.data)
      setResturentdata(res.data);
      setFooddata(res.data.products);

      dispatch(resturent(res.data));
    };
    getResturents();
  }, []);

  const getProductType = (type) => {
    return fooddata.filter((item) => item.type === type);
  };

  function getProduct() {
    return resturentdata.available?.map((t) => (
      <div className="viewProduct-center-component">
        <div className="centerContainerTop">
          <h1 className="centerTitle">{`${t}`}</h1>
          <span className="valueTitle">{getProductType(t).length} items</span>
        </div>

        {getProductType(t).map((item, index) => (
          <Container item={item} />
        ))}
      </div>
    ));
  }

  const handleClear = () => {
    dispatch(clearFood());
    dispatch(clearCart());
  };

  const handleChangeprice = (event) => {
    setPrice(event.target.value);
    const product = resturentdata.products;
    const productsNew =
      price === "low-to-high"
        ? product?.slice().sort(function (a, b) {
            return b.price - a.price;
          })
        : product?.slice().sort(function (a, b) {
            return a.price - b.price;
          });
    setFooddata(productsNew);
    getProduct();
  };

  return (
    <div className="app__bg viewProduct">
      <div className="navbarFilter">
        <h1 className="menuList">Menu items</h1>
        <FormControl className={classes.formControl}>
          <InputLabel
            id="demo-simple-select-label"
            className={classes.inputLabel}
          >
            Price
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            onChange={handleChangeprice}
            className={classes.selectEmpty}
          >
            {Price.map((p) => (
              <MenuItem
                className={classes.menuitm}
                value={p}
              >{`${p}`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="viewProduct_main">
        <div className="viewProduct-left">
          <h3 style={{ color: "gold" }}>Recomended Items</h3>
          <h3 style={{ color: "white" }}>Momos</h3>
          <h3 style={{ color: "white" }}>Biriyani</h3>
          <h3 style={{ color: "white" }}>Roll</h3>
          <h3 style={{ color: "white" }}>Moghlai</h3>
          <h3 style={{ color: "white" }}>Chiken Items</h3>
          <h3 style={{ color: "white" }}>Mutton Items</h3>
        </div>

        <div className="viewProduct-center">{getProduct()}</div>
        <div className="viewProduct-right">
          <h2 className="cartItemTitle">Your Orders</h2>
          {food.length > 0 && (
            <button className="custom__button" onClick={handleClear}>
              Clear Cart
            </button>
          )}
          {food?.map((cart, index) => (
            <CartItem item={cart} addtocart={addtocart} />
          ))}
          <Link to="/cart">
            {" "}
            <button
              className="custom__button"
              onClick={() => setAddtocart(true)}
            >
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
