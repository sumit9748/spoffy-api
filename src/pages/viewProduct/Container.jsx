import React, { useEffect, useState } from 'react'
import { addFood } from '../../redux/foodRedux';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import "./viewProduct.css"
import { addProduct, updateProduct } from '../../redux/cartRedux';


const Container = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false)
    const resturent = useSelector(state => state.resturent)
    const dispatch = useDispatch();
    // console.log(resturent)
    const food = useSelector(state => state.food.foods)
    const handleQuantity = (type) => {
        if (type === "desc") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleAdd = (ide) => {
        var slice = resturent.products.find((p) => p._id === ide);
        const data = { ...slice };
        data["quantity"] = quantity;
        data["total"] = quantity * slice.price;

        const isFound = food.some(element => {
            if (element.cat === slice.cat) {
                return true;
            }
        });
        !isFound && dispatch(addFood({ ...data }));
        dispatch(updateProduct(food.foods))

        if (isFound === true) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 3000);
        };
    }




    return (
        <div>
            <div className="centerContainerpro">
                <div className="containerLeft">

                    <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "10px" }}>
                        <BookmarkAddedIcon className="bookmarkicon" />
                        <p className="foodTitle">{item?.cat}</p>

                    </div>
                    <div className="foodPrice">{item?.price + " Rs"}</div>

                    <p style={{ fontSize: "16px", color: "#555" }}>{item?.details}</p>
                    <div className="quantityclass">
                        <Add onClick={() => handleQuantity("add")} />
                        {quantity}
                        <Remove onClick={() => handleQuantity("desc")} />
                    </div>

                </div>
                <div className="containerRight">
                    <img src={item?.img} alt="" className="foodImg" />
                    <button className="saveFood" onClick={() => handleAdd(item._id)}>Add Item</button>
                    <Snackbar
                        open={open}
                        autoHideDuration={1000}
                        // onClose={handleClose}
                        message="Item already added"
                    />
                </div>
            </div>
        </div>
    )
}

export default Container