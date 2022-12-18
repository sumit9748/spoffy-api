import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, CardActions } from '@mui/material'
import Add from '@mui/icons-material/Add'
import AddShoppingCartOutlined from '@mui/icons-material/AddShoppingCartOutlined'
import Remove from '@mui/icons-material/Remove'
import { useDispatch, useSelector } from 'react-redux'
import { addFood } from '../../redux/foodRedux'
import { updateProduct } from '../../redux/cartRedux'

const ContainerItem = ({ item }) => {
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    // console.log(resturent)
    const food = useSelector(state => state.food.foods);

    const handleQuantity = (type) => {
        if (type === "desc") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleAdd = (ide) => {
        // var slice = resturent.products.find((p) => p._id === ide);
        const data = { ...item };
        data["quantity"] = quantity;
        data["total"] = quantity * item.price;

        const isFound = food.some(element => {
            if (element.cat === item.cat) {
                return true;
            }
        });
        !isFound && dispatch(addFood({ ...data }));
        dispatch(updateProduct(food))
        if (isFound === true) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 3000);
        };
    }
    return (
        <div style={{ margin: "10px 20px", width: "calc(100% / 4)" }}>
            <Card sx={{ maxWidth: 330, maxHeight: 500, backgroundColor: "transparent" }}>
                <CardActionArea sx={{ color: "#D3D3D3" }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image={item?.img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ color: "white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {item?.cat}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {item?.details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => handleAdd(item?._id)} sx={{ backgroundColor: "#B87333", color: "black" }} variant="contained" endIcon={<AddShoppingCartOutlined style={{ color: "white" }} />}>
                        Add Item
                    </Button>
                    <div style={{ color: "white", display: "flex", alignItems: "center" }}>
                        <Add onClick={() => handleQuantity("add")} />
                        {quantity}
                        <Remove onClick={() => handleQuantity("desc")} />
                    </div>
                </CardActions>
            </Card>
        </div>
    )
}

export default ContainerItem