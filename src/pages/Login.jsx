import React from 'react'
import styled from 'styled-components';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FaceBook from '@mui/icons-material/FacebookOutlined';
import Insta from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';

import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useRef } from "react";
import axios from "axios"
import { useContext } from 'react';
import { login } from '../redux/apiCalls';
import { useDispatch } from "react-redux"
import { useState } from 'react';
import { useSelector } from "react-redux"

const Container = styled.div`
width:100vw;
height:97vh;
background:url(https://thumbs.dreamstime.com/b/chocolate-ice-cream-nuts-dark-food-background-top-view-food-still-lifen-chocolate-ice-cream-nuts-dark-food-background-122213159.jpg);
display:flex;
align-items:center;
justify-content:center;
background-size:cover;
background-position:center;`


const Wrapper = styled.div`
padding:20px;
width:30%;
background-color:white;
border-radius:10px;
border:2px solid teal;`

const Title = styled.h1`font-size:24px;
font-weight:300;`
const Form = styled.form`
display:flex;
flex-direction:column;`

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 5px;
padding:10px;`

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
border-radus:5px;
margin-left:43px;
&:disabled{
    color:green;
    cursor:not-allowed;
}
`

const Link = styled.a`
margin:10px 0;
font-size:12px;
text-decoration:underline;
cursor:pointer;`

const LoginInfo = styled.div`
display:flex;
align-items:center;
justify-content:center;`
const LoginPass = styled.div`
display:flex;
align-items:center;
justify-content:center;`
const Error = styled.span`
color:red;`

const LoginWith = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;`
export const Login = () => {

    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        console.log(username, password)
        login(dispatch, { username, password });
    }



    return (
        <Container>
            <Wrapper>
                <Title>Sign-In</Title>
                <Form ><LoginInfo>
                    <AccountBoxIcon style={{ fontSize: "40px" }} />
                    <Input required minLength="6" onChange={(e) => setUsername(e.target.value)} placeholder="email" />
                </LoginInfo>
                    <LoginPass>
                        <VpnKeyIcon style={{ fontSize: "40px" }} />
                        <Input required minLength="6" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                    </LoginPass>

                    <Button onClick={handleClick} disbled={isFetching}>LOGIN</Button>
                    <LoginWith><FaceBook /><Insta /><Google /></LoginWith>
                    {error && <Error>Something went wrong..</Error>}
                    <Link>Forget Password..</Link>
                    <Link>Create a New</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
