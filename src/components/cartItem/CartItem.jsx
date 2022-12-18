import React, { useState, useEffect } from 'react'

import "./cartItem.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import { ListItemAvatar } from '@mui/material'

const CartItem = ({ item, addtocart }) => {
    const dispatch = useDispatch();
    const foodItem = useSelector(state => state.food);
    console.log(ListItemAvatar)

    useEffect(() => {
        addtocart && (
            dispatch(addProduct({ ...foodItem }))
        )
    }, [addtocart])


    return (

        <div className='CartItem1'>

            <div className="cartItemComponent1">
                <div className="cartItemDesc1">
                    <p className="cartItemProduct1">{item?.cat}</p>
                    <img src={item?.img} alt="" />
                </div>
                <div className="cartItemDetails1">
                    <p className="price1">₹ {item?.total}</p>

                </div>
            </div>
        </div>

    )
}

export default CartItem