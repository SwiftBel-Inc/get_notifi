import React from 'react'
import styled from 'styled-components'
import reviewsicon from '../../assets/reviewicon.png'
import reviews from '../../assets/review.png'
import webchaticon from '../../assets/webchaticon.png'
import webchat from '../../assets/webchat.png'
import campaignicon from '../../assets/campaignicon.png'
import campaign from '../../assets/campaign.png'
import messagingicon from '../../assets/messagingicon.png'
import messaging from '../../assets/messaging.png'
import paymenticon from '../../assets/paymentsicon.png'
import payment from '../../assets/payments.png'
function LocalMarketing(){
return(
    <Main>
    <Head>
        <div>
        <Headtext>The marketing and communication platform <br/>for local businesses</Headtext>
        <Tiles>
          <First>
          <Icon src={reviewsicon}/>
          <Heading>Automate reviews</Heading>
          <Desc>It’s simpler than you think. More reviews = More Business.  </Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={reviews}/>
          </div>
        </Tiles>
        <Tiles2>
          <div>
          <Image src={webchat}/>
          </div>
          <Second>
          <Icon src={webchaticon}/>
          <Heading>Close more facebook and website leads</Heading>
          <Desc>The first one to reach customers get the business. Integrate webforms and Facebook leads to Notifi and connect with customers instantly.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </Second>
        </Tiles2>
        <Tiles>
          <First>
          <Icon src={campaignicon}/>
          <Heading>Area specific text campaigns</Heading>
          <Desc>Allows you to reach out to existing customers if they need your services in the area you’re already working.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={campaign}/>
          </div>
        </Tiles>
        <Tiles2>
          <div>
          <Image src={messaging}/>
          </div>
          <Second>
          <Icon src={messagingicon}/>
          <Heading>Text messages, WhatsApp, Facebook Messenger and Instagram</Heading>
          <Desc>Bring all of your communications into one place and never forget about a customer.  </Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </Second>
        </Tiles2>
        <Tiles>
          <First>
          <Icon src={paymenticon}/>
          <Heading>One tool to manage your entire business </Heading>
          <Desc>Send booking confirmations, reminders, deposit requests with payment links, quotes, Invoices with payment links, everything with a “single click” without wasting anytime. </Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </First>
          <div>
          <Image src={payment}/>
          </div>
        </Tiles>
        <Tiles2>
          <div>
          <Image src={messaging}/>
          </div>
          <Second>
          <Icon src={messagingicon}/>
          <Heading>Organize your business better</Heading>
          <Desc>Assign employees to jobs and share information about the booking, simply by clicking their name.</Desc>
          <Learn>{`Learn more 🡢`}</Learn>
          </Second>
        </Tiles2>
        </div>

    </Head>
    </Main>
)
}
export default LocalMarketing

const Main = styled.div`
display:flex;
justify-content:center;
background-color:white;
padding-top:50px;
padding-bottom:70px;
@media (min-width: 260px) and (max-width: 820px){
  display:none;
  }
`
const Head=styled.div`
width:1312px;
display:flex;
justify-content:space-between;
@media (min-width: 260px) and (max-width: 1311px){
width:100%;
padding-left:30px;
padding-right:30px;
}
`
const Headtext=styled.h1`
text-align:center;
font-size:50px;
font-weight:900;
margin-bottom:30px;
width:100%;
@media (min-width: 260px) and (max-width: 820px){
  font-size:26px;
   }
`
const Tiles=styled.div`
display:flex;
justify-content:space-between;
padding-left:180px;
@media (min-width: 260px) and (max-width: 820px){
  display:inline;
  padding-left:0px;
}
`
const Tiles2=styled.div`
display:flex;
justify-content:space-between;
padding-left:70px;
@media (min-width: 260px) and (max-width: 820px){
  display:inline;
  padding-left:0px;
}
`
const First=styled.div`
width:100%;
margin-top:200px;
display:flex;
flex-direction:column;
justify-content:start;
@media (min-width: 260px) and (max-width: 820px){
  display:flex;
  flex-direction:column;
  justify-content:center;
}
`
const Second=styled.div`
width:100%;
display:flex;
flex-direction:column;
float:right;
margin-top:140px;
margin-left:200px;
@media (min-width: 260px) and (max-width: 820px){
  justify-content:center;
}
`
const Image=styled.img`
width:100%;
`
const Icon=styled.img`
height:50px;
width:50px;
`
const Heading=styled.h1`
font-weight: 700;
font-size: 38px;
color:#333;
text-align:start;
margin-top:-1px;
@media (min-width: 260px) and (max-width: 820px){
  text-align:center;
}
`
const Desc=styled.p`
font-weight:200;
font-size:22px;
text-align:start;
margin-top:-3px;
width:470px;
@media (min-width: 260px) and (max-width: 820px){
width:100%;
text-align:center;
}
`
const Learn=styled.p`
font-weight:700;
font-size:20px;
color:blue;
text-align:start;
margin-top:-5px;
cursor:pointer;
@media (min-width: 260px) and (max-width: 820px){
  text-align:center;
}
`