import React from "react";
import styled from "styled-components";
function PriceBanner(){
return(
<Main>
    <Head>
    <MainHead>Simple plans built for local<br/>businesses like yours.</MainHead>
    <Subhead>Try Notifi free for 14 days, no strings attached</Subhead>
    <Buttons>
        <Free>Start a free trial*</Free>
        <Learn>{`Get a demo 🡢`}</Learn>
    </Buttons>
    </Head>
</Main>
)
}
export default PriceBanner


const Main = styled.div`
display:flex;
justify-content:center;
padding-top:65px;
background-color:#eeecea;
padding-bottom:70px;
`
const Head=styled.div`
width:1312px;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const MainHead=styled.div`
font-size:65px;
font-weight:1000;
text-align:center;
margin-top:20px;
`
const Subhead=styled.p`
font-size:24px;
font-weight:300;
text-align:start;
text-align:center;
margin-top:50px;
`
const Learn=styled.p`
font-weight:700;
font-size:16px;
color:blue;
text-align:start;
cursor:pointer;
`
const Free=styled.button`
background-color:blue;
background:blue;
color:white;
font-weight:600;
border-radius:8px;
border:1px solid blue;
margin-right:10px;
height:58px;
width:12%;
font-size:15px;
margin-right:20px;
@media (min-width: 260px) and (max-width: 820px){
    width:50%;
}
`
const Buttons=styled.div`
display:flex;
justify-content:center;
margin-top:50px;
`
