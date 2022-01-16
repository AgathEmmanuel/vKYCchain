import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

const Login = () => {
  const [bankEmail,setBankEmail]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const apiurl='http://localhost:1330/api/login'

  const loginUser=async(event)=>{
    event.preventDefault()
    const response=await axios({
      method: "post",
      url: apiurl,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        bankEmail,
        newPassword
      }),
    });
    const data=await response.json()

    console.log(data)
    return(data)
  }
  return (
    <div className='div_login'>
        <h1>Login in to your Vkyc-Consortium Account</h1>
        <div className='div_form_login'>
            <form onSubmit={loginUser}>
                <h5>Bank-mail-id</h5>
                <input 
                value={bankEmail}
                onChange={(e)=>setBankEmail(e.target.value)}
                placeholder='Bank Email ID'
                type='email' />

                <h5>Password</h5>
                <input 
                value={newPassword}
                onChange={(e)=>setNewPassword(e.target.value)}
                placeholder='Password'
                type='password' />

                <input type="submit" className="div_form_sign_up_btn" value="Login" />

            </form>

        </div>
    </div>
  )
}
export default Login
