import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='div_signup'>
        <h1>Signup with Vkyc-Consortium</h1>
        <div className='div_form_signup'>
            <form>
                <h5>Bank-mail-id</h5>
                <input type='text' />

                <h5>Employee-name</h5>
                <input type='text' />

                <h5>Employee-id</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password' />
                <button className="div_form_sign_up_btn">Sign Up</button>

            </form>
            <p>
                By Signing up you and your Banking Firm agrees to Vkyc-Consortiums Terms and conditions
            </p>
        </div>
      
    </div>
  )
}

export default SignUp