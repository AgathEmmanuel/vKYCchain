import React, { useState } from 'react'
import './SignUp.css'
import axios from 'axios'

const SignUp = () => {
  const [bankEmail,setBankEmail]=useState('')
  const [employeeId,setEmployeeId]=useState('')
  const [fullName,setFullName]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const apiurl='http://localhost:1330/api/signup'

  const signupUser=async(event)=>{
    event.preventDefault()
    const response=await axios({
      method: "post",
      url: apiurl,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        bankEmail,
        employeeId,
        fullName,
        newPassword
      }),
    });
    const data=await response.json()
    console.log(data)
    return(data)
  }
  return (
    <div className='div_signup'>
        <h1>Signup with Vkyc-Consortium</h1>
        <div className='div_form_signup'>
            <form onSubmit={signupUser}>
                <h5>Bank-mail-id</h5>
                <input 
                value={bankEmail}
                onChange={(e)=>setBankEmail(e.target.value)}
                placeholder='Bank Email ID'
                type='email' />

                <h5>Employee-id</h5>
                <input 
                value={employeeId}
                onChange={(e)=>setEmployeeId(e.target.value)}
                placeholder='Bank Employee ID'
                type='text' />

                <h5>Employee-name</h5>
                <input 
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                placeholder='Full Name'
                type='text' />

                <h5>Password</h5>
                <input 
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
                placeholder='Password'
                type='password' />

                <input type="submit" className="div_form_sign_up_btn" value="Sign Up" />

            </form>
            <p>
                By Signing up you and your Banking Firm agrees to Vkyc-Consortiums Terms and conditions
            </p>
        </div>
      
    </div>
  )
}

export default SignUp