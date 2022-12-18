import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


const Container=styled.div`display:flex;`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
width:50%;
`


const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0;`
const SocialContainer=styled.div`
display:flex;`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`


const Center=styled.div`
flex:1;
padding:20px;
`
const Title=styled.h3`
margin-bottom:30px;`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;`



const Right=styled.div`
flex:1;
padding:20px;`



export const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>𝓢𝓟𝓞𝓕𝓕𝓨</Logo>
            <Desc>𝔚𝔢 𝔟𝔢𝔩𝔦𝔢𝔳𝔢 𝔦𝔫 𝔱𝔥𝔢 𝔠𝔬𝔪𝔪𝔦𝔱𝔪𝔢𝔫𝔱 𝔱𝔬 𝔬𝔲𝔯 𝔠𝔬𝔪𝔪𝔲𝔫𝔦𝔱𝔶 𝔞𝔫𝔡 𝔦𝔫 𝔣𝔬𝔰𝔱𝔢𝔯𝔦𝔫𝔤 𝔩𝔬𝔫𝔤 𝔱𝔢𝔯𝔪 𝔯𝔢𝔩𝔞𝔱𝔦𝔬𝔫𝔰𝔥𝔦𝔭𝔰 𝔴𝔦𝔱𝔥 𝔩𝔬𝔠𝔞𝔩 𝔣𝔞𝔯𝔪𝔢𝔯𝔰 𝔞𝔫𝔡 𝔣𝔦𝔰𝔥𝔢𝔯𝔪𝔢𝔫. 
                𝔒𝔲𝔯 𝔪𝔢𝔫𝔲𝔰 𝔯𝔢𝔣𝔩𝔢𝔠𝔱 𝔱𝔥𝔢𝔰𝔢 𝔠𝔬𝔫𝔫𝔢𝔠𝔱𝔦𝔬𝔫𝔰, 𝔣𝔢𝔞𝔱𝔲𝔯𝔦𝔫𝔤 𝔩𝔬𝔠𝔞𝔩, 𝔰𝔢𝔞𝔰𝔬𝔫𝔞𝔩 𝔭𝔯𝔬𝔡𝔲𝔠𝔢 𝔞𝔫𝔡 𝔰𝔲𝔰𝔱𝔞𝔦𝔫𝔞𝔟𝔩𝔶 𝔰𝔬𝔲𝔯𝔠𝔢𝔡 𝔰𝔢𝔞𝔣𝔬𝔬𝔡 𝔞𝔫𝔡 𝔪𝔢𝔞𝔱𝔰.</Desc>
                <SocialContainer>
                    <SocialIcon color="33B599">
                    <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                    <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Food-Order</ListItem>
                    <ListItem>Lunch</ListItem>
                    <ListItem>Dinner</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order-Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem><HomeIcon style={{marginRight:"10px"}}/>𝔅𝔞𝔫𝔨𝔯𝔞 𝔇𝔞𝔨𝔰𝔥𝔦𝔫𝔓𝔞𝔩𝔩𝔶 ℌ𝔬𝔴𝔯𝔞𝔥</ContactItem>
                <ContactItem>< PhoneAndroidIcon style={{marginRight:"10px"}}/>+91 9748698484</ContactItem>
                <ContactItem><EmailIcon style={{marginRight:"10px"}}/>sumitmondal9448@gmail.com</ContactItem>
                <Payment src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"/>
            </Right>
        </Container>
    )
}
export default Footer;