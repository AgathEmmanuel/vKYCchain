import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='div_login'>
        <h1>Login in to your Vkyc-Consortium Account</h1>
        <div className='div_form_login'>
            <form>
                <h5>Bank-mail-id</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password' />
                <button className="div_form_login_btn">Sign Up</button>
            </form>
        </div>
    </div>
  )
}
export default Login
