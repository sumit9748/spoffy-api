import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Footer } from '../components/Footer'
import { Newsletter } from '../components/Newsletter'
// import { AllProduct } from '../components/AllProduct'
import { useLocation } from 'react-router'
import { useState } from 'react'
import "./App.css"
import { publicRequest } from '../requestMethod'
import ContainerItem from '../components/containerItem/ContainerItem'
import Navbar from '../components/Navbar'


const Title = styled.h1`
margin:20px;
color:white;`



export const ProductList = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[2]);
    const [foodItem, setFoodItem] = useState([])

    useEffect(() => {
        const getAllItems = async () => {
            const res = await publicRequest.get("/resturents/allProducts");

            setFoodItem(res.data.filter((f) => f.type === cat ? cat : ""));
        }; getAllItems();
    }, [])

    console.log(foodItem)

    return (
        <>
            <Navbar />
            <div className="app__bg">

                {/* <AllProduct cat={cat} filters={filters} sort={sort}/> */}
                <div className="containeritempro">
                    {foodItem?.map((item, index) => (

                        <ContainerItem item={item} index={index} />
                    ))}
                </div>

            </div>
            <Footer />
        </>

    )
}


