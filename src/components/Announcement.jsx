import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:30px;
background-color:teal;
color:white;
display:flex;
justify-content:center;
font-size:14px;
font-weight:500;`



export const Announcement = () => {
    return (
        <div>
            <Container>
            𝐎𝐧𝐞 𝐏𝐋𝐔𝐒 𝐎𝐧𝐞 𝐠𝐫𝐞𝐚𝐭 𝐝𝐢𝐬𝐜𝐨𝐮𝐧𝐭
            </Container>
        </div>
    )
}
export default Announcement;
