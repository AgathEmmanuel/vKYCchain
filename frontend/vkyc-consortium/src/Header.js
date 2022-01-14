import React from 'react'
import './Header.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import { render } from "react-dom"
import { Button } from "semantic-ui-react"


function Header() {
  return (
    <div className='header'>
        <div className="header_name">vKYC Consortium</div>
        <div className="header_options">
            <div className="header_option1">
 <Link to='/'>
    <Button className="btn_options">
          Home
    </Button>
</Link>
            </div>
            <div className="header_option2">
<Link to='/login'>
    <Button className="btn_options">
          Login
    </Button>
</Link>

            </div>
            <div className="header_option3">
<Link to='/signup'>
    <Button className="btn_options">
          SignUp
    </Button>
</Link>
            </div>
        </div>
    </div>
  )
}

export default Header
