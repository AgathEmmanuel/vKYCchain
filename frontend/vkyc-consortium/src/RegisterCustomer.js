import React, { useState } from 'react'
import './RegisterCustomer.css'
import axios from 'axios'

const RegisterCustomer = () => {
  const [customerEmail,setCustomerEmail]=useState('')
  const [customerFullName,setCustomerFullName]=useState('')
  const [aadharId,setAadharId]=useState('')
  const [panNumber,setPanNumber]=useState('')
  const [homeAddress,setHomeAddress]=useState('')
  const apiurl='http://localhost:1330/api/vkyc-register'

  const registerCustomerForm=async(event)=>{
    event.preventDefault()
    const response=await axios({
      method: "post",
      url: apiurl,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        customerEmail,
        customerFullName,
        aadharId,
        panNumber,
        homeAddress
      }),
    });
    const data=await response.json()
    console.log(data)
    return(data)
  }
  return (
    <div className='div_customerregister'>
        <h1>Signup with Vkyc-Consortium</h1>
        <div className='div_form_customerregister'>
            <form onSubmit={registerCustomerForm}>
                <h5>Customer-mail-id</h5>
                <input 
                value={customerEmail}
                onChange={(e)=>setCustomerEmail(e.target.value)}
                placeholder='Email ID'
                type='email' />

                <h5>Full-Name</h5>
                <input 
                value={customerFullName}
                onChange={(e)=>setCustomerFullName(e.target.value)}
                placeholder='Full Name'
                type='text' />

                <h5>Home Address</h5>
                <input 
                value={homeAddress}
                onChange={(e)=>setHomeAddress(e.target.value)}
                placeholder='homeAddress'
                type='text' />

                <h5>AadharId</h5>
                <input 
                value={aadharId}
                onChange={(e)=>setAadharId(e.target.value)}
                placeholder='aadharId'
                type='text' />

                <h5>PanNumber</h5>
                <input 
                value={panNumber}
                onChange={(e)=>setPanNumber(e.target.value)}
                placeholder='panNumber'
                type='text' />


                <input type="submit" className="div_form_customer_register_btn" value="Submit" />

            </form>
            <p>
                By submitting the details of your customer,the Banking Firm agrees to Vkyc-Consortiums Terms and conditions
            </p>
        </div>
      
    </div>
  )
}

export default RegisterCustomer