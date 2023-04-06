import React from 'react'
import styled from "styled-components";
import signpic from '../assets/signup.png';
import Auth from '../Components/Auth/Auth';

function Login(){
return(
    <Dialougediv>
    <Dialougediv>
            <Auth/>
            <Right>
              <ModalHeading>Join 100,000+ businesses using Notifi to grow</ModalHeading>
              <Imagediv>
              <Image src={signpic} alt='signuppic'/>
              </Imagediv>
              <ReviewSection>
               <div >
                <img className="imagediv" src={'https://checkout.podium.com/static/media/footer.394043fbf39da5e44665.png'} alt='img'/>
               </div>
               <div>
                <p className="reviewtext">"Our response rate is under a minute right now. We’re able to drive a sale without having to speak on the phone."</p>
                <p className="reviewsubtext">Zahadia Ortiz-Ceballos | Adam's Pest Control</p>
               </div>
              </ReviewSection>
              </Right>
           </Dialougediv>
   </Dialougediv>
)
}
export default Login

const Dialougediv=styled.div`
display:flex;
justify-content:center;
overflow:hidden;
`
const Right = styled.div`
background:#12151a;
width:750px;
color:white;
overflow:hidden;
`
const Image=styled.img`
width:50%;
height:70%;
`
const Imagediv=styled.div`
display:flex;
justify-content:center;
`
const ModalHeading=styled.p`
font-weight:600;
font-size:30px;
color:white;
text-align:center;
margin-left:190px;
margin-right:190px;
margin-top:100px;
`
const ReviewSection=styled.div`
display:flex;
justify-content:center;
margin-left:180px;
margin-right:190px;
width:400px;
margin-bottom:130px;
.imagediv{
height:44px;
width:44px;
border-radius:50%;
margin-top:20px;
margin-right:20px;
}
.reviewtext{
font-weight:500;
font-size:18px;
}
.reviewsubtext{
font-size:16px;
color:gray;
}
`