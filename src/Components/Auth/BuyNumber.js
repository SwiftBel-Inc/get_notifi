import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { displaynumber,buynumber } from '../../store/Actions/Auth.action';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BuyNumber(){
let dispatch=useDispatch()
const [values, setValues] = useState({
"country":"CA",
"region":"ON",
});
const [mobnumber, setMobnumber] = useState('')

const [valids,setValids]=useState({
'country':false,
'region':false
})
const [errormsg,setErrormsg]=useState(null)
const [data,setData]=useState(null)
console.log(data,'data')
const handleChange=(name)=>(event)=>{
    let value=event.target.value
    console.log(event.target.value,name,'jb')
    setValues({...values,[name]:value})
    }
    const isValid=()=>{
        if(!(values.country&&values.country.length>0)){
              setValids({...valids,country:true})
              return false
          }
          else if(!(values.region&&values.region.length>0)){
            setValids({...valids,region:true})
            return false
        }
          else
          return true
          }
const handlesubmit=async()=>{
    setErrormsg(null)
if(isValid()){
const res = await dispatch(displaynumber(values))
    if(res?.status===false){
        setErrormsg(res?.meesage)
        }
        if(res?.status===true){
        setData(res?.data)
        }
return res
}
}

const handleNumber=(e)=>{
setMobnumber(e.target.value)
}
let navigate=useNavigate()
const handlesubmit2=async()=>{
    setErrormsg(null)
    let email=localStorage.getItem('email')
    if(isValid()){
        const res = await dispatch(buynumber({
        "email":email,
        "number": "+1"+mobnumber.replace(/[-() ]/g, '')
        }))
    if(res?.status===false){
        setErrormsg(res?.meesage)
        }
        if(res?.status===true){
        setData(res?.data)
         navigate('/dashboard')
        }
     return res
    }
}

return(
<Left>
<Heading>Give Notifi a try. It’s free.</Heading>
<Desc>Grow with tools for texting customers, getting reviews, and making sales. No credit card required.</Desc>
<br/>

{
!isValid()? <p className='errormsg'>
Please fill all mandatory fields !
</p> :
errormsg?
<p className='errormsg'>
{errormsg}
</p>
:null}

<InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
        <Inputbox
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Country"
          onChange={handleChange('country')}
          required
          value={values?.country}
          error={valids.country}
        >
          <MenuItem value={'CA'}>Canada</MenuItem>
        </Inputbox>
        <br/>
        <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
        <Inputbox
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Region"
          onChange={handleChange('region')}
          required
          value={values?.region}
          error={valids.region}
        >
          <MenuItem value={'ON'}>Ontario</MenuItem>
        </Inputbox><br/>
        {data?.length>0?<>
        <InputLabel id="demo-simple-select-helper-label">Select number</InputLabel>
        <Inputbox
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Region"
          onChange={(e)=>handleNumber(e)}
          required
          value={mobnumber}
          placeholder='Select number'
        >
            <MenuItem value={'Select number'}>Select number</MenuItem>
            {data?.map((x,index)=>{
            return(
                <MenuItem value={x} key={index}>{x}</MenuItem>
            )
            })}
        </Inputbox><br/>
        </>
        :''}
<CustomButton variant="contained" onClick={data?.length>0?()=>handlesubmit2():()=>handlesubmit()}>{data?.length>0?'Buy a number':'Continue'}</CustomButton>
</Left>
)
}

export default BuyNumber

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

const Inputbox=styled(Select)`
width:66%;
border-radius:12px;
`
const CustomButton=styled(Button)`
width:66%;
height:44px;
`
