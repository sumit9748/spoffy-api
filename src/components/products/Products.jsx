import "./products.css";
import React from "react";
import Product from "../product/Product";
import DiningIcon from "@mui/icons-material/Dining";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethod";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import _ from "lodash";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Button } from "@mui/material";

export const Products = () => {
  const [filterData, setFilterData] = useState([]);
  const [state, setState] = React.useState({
    right: false,
  });

  useEffect(() => {
    const getResturents = async () => {
      try {
        const res = await userRequest.get("/resturents");
        setFilterData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getResturents();
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleChange = async (params) => {
    try {
      const res = await userRequest.get(`/resturents?category=${params}`);
      setFilterData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          padding: "10px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      ></List>
    </Box>
  );

  return (
    <div className="app__darkbg app__wrapper section__padding">
      <div className="app__products-wrapper">
        <div className="app__products-wrapper-top">
          <div className="app__products-wrapper_text">
            <h1 className="headtext_cormorent">Our Services</h1>
          </div>
          <div className="app__products-wrapper_options">
            <a onClick={() => handleChange("revelance")}>Revelance</a>
            <a onClick={() => handleChange("delivery")}>Delivery</a>
            <a onClick={() => handleChange("rating")}>Rating</a>
            <div className="sortSection" onClick={toggleDrawer("right", true)}>
              <button className="sort">Our Momento</button>
              <DiningIcon />
            </div>
          </div>

          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>

        <div className="app__products-wrapper-bottom">
          {filterData.map((res) => (
            <Product item={res} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
