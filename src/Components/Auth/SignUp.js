import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/Actions/Auth.action';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { parsePhoneNumberFromString } from 'libphonenumber-js';

function SignUp(props){
let dispatch=useDispatch()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isValid, setisvalid] = useState();
const [ispassValid, setispassvalid] = useState();
const [errormsg,setErrormsg]=useState(null)

const [isnamevalid,setIsnamevalid]=useState({
'firstName':null,
'lastName':null
})
const [values,setValues]=useState({
    'firstName':null,
    'lastName':null
    })
const [phoneNumber, setPhoneNumber] = useState('');

    function onChangePhone(value) {
      setPhoneNumber(value);
    }
const handlesubmit=async()=>{
    setErrormsg(null)
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    reg.test(email) ? setisvalid(true) : setisvalid(false)
password?.length>7 ? setispassvalid(true):setispassvalid(false)
if(funisValid()&&isValid&&ispassValid&&isValidNumber===true){
const res = await dispatch(registerUser({
    "email":email,
    "password":password,
    "firstName":values.firstName,
    "lastName":values.lastName,
    "phone":phoneNumber
    }))
    if(res?.status===false){
        setErrormsg(res?.meesage)
        }
        else if(res.status===true){
            props?.setBuy(true)
            localStorage.setItem('email',email)
        }
return res
}
}

const funisValid=()=>{
    if(!(values?.firstName&&values?.firstName?.length>0)){
          setIsnamevalid({...isnamevalid,firstName:false})
          return false
      }
    //   else if(!(values.lastName&&values.lastName.length>0)){
    //     setIsnamevalid({...isnamevalid,lastName:false})
    //     return false
    // }
      else
      return true
      }

const onChangeEmail = (e) => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if(reg.test(e.target.value)){setisvalid(true)}
    setEmail(e.target.value)
}

const onChangeName=(name)=>(event)=>{
    let value=event.target.value
    console.log(event.target.value,name,'jb')
    if(name==='firstName'){
        if(event?.target?.value?.length>0){
            setIsnamevalid({...isnamevalid,firstName:true})
        }
    }
    // if(name==='lastName'){
    //     if(event.target.value.length>0){
    //         setIsnamevalid({...isnamevalid,lastName:true})
    //     }
    // }
    setValues({...values,[name]:value})
    }
    const parsedNumber = phoneNumber?.length>0? parsePhoneNumberFromString(phoneNumber):null
    const isValidNumber = parsedNumber ? parsedNumber?.isValid() : false;
const onChangePassword = (e) => {
    if(e?.target?.value?.length>7){
        setispassvalid(true)
        }
    setPassword(e.target.value)
}
return(
<Left>
<Heading>Give Notifi a try. It’s free.</Heading>
<Desc>Grow with tools for texting customers, getting reviews, and making sales. No credit card required.</Desc>
{
isnamevalid.firstName === false||isnamevalid.lastName ===false ? <p className='errormsg'>
Please fill all mandatory fields !
</p> :
isValid === false||ispassValid===false ? <p className='errormsg'>
Invalid email or password. Please try again!
</p> :
phoneNumber&&!isValidNumber ?
<p className='errormsg'>
Please enter a valid phone number
</p>
:
errormsg?
<p className='errormsg'>
{errormsg}
</p>
:null}
<Inputbox id="outlined-basic" label="First name" variant="outlined" onChange={onChangeName('firstName')} required error={isnamevalid.firstName!==false?false:true} />
<br/>
<Inputbox id="outlined-basic" label="Last name" variant="outlined" onChange={onChangeName('lastName')} error={isnamevalid.lastName!==false?false:true}/>
<br/>
<div className='phoneInput'>
<PhoneInput
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={onChangePhone}
      error={!isValidNumber}
      defaultCountry="CA"
      international
      focusInputOnCountrySelection='true'
      />
      </div>
<br/>
<Inputbox id="outlined-basic" label="Email" variant="outlined" onChange={(e) => onChangeEmail(e)} required error={isValid!==false?false:true} />
<br/>
<Inputbox id="outlined-basic" label="Create a password" variant="outlined" type={'password'} required onChange={(e) => onChangePassword(e)} error={ispassValid!==false?false:true}/>
<Desc2>By continuing, you agree that you have read and accept the Podium <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a>.</Desc2>
<br/>
<CustomButton variant="contained" onClick={()=>handlesubmit()}>Start 14-day free trial</CustomButton>
<Haveaccount>Already have an account? <a href='/login'>Log in</a></Haveaccount>
</Left>
)
}

export default SignUp

const Left =styled.div`
width:600px;
padding-left:200px;
display:flex;
flex-direction:column;
justify-content:center;
`
const Heading=styled.p`
text-align:start;
font-weight:600;
font-size:24px;
`
const Desc=styled.p`
text-align:start;
font-weight:400;
font-size:16px;
width:64%;
margin-top:-9px;
`
const Desc2=styled.p`
text-align:start;
font-weight:400;
font-size:14px;
width:67%;
color:gray;
margin-top:30px;
`
const Inputbox=styled(TextField)`
width:66%;
border-radius:12px;
`
const CustomButton=styled(Button)`
width:66%;
height:44px;
`
const Haveaccount=styled.p`
margin-left:70px;
margin-top:20px;
`