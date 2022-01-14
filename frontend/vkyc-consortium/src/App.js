import './App.css';
import Header from './Header';
import { render } from "react-dom"
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from "./Home"
import SignUp from './SignUp'
import Login from './Login'
import VerifyOrRegister from './VerifyOrRegister'
import VkycRegister from './VkycRegister'
import VkycVerify from './VkycVerify'
import PageNotFound from './PageNotFound'

function App() {
  return (
  <div className="App">
      {/* Header */}
      {/* Home */}
      {/* Login */}
      {/* Signup */}
      {/* Contact */}
      {/* VerifyOrRegisterOrTakeKyc */}
      {/* vkyc-register */}
      {/* vkyc-verify */}
      {/* vkyc-take */}
      {/* vkyc-conference */}
      <BrowserRouter >
      <Header />
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/vkyc-register' element={<VkycRegister />} />
      <Route path='/vkyc-verify' element={<VkycVerify />} />
      <Route path='/verify-or-register-or-takekyc' element={<VerifyOrRegister />} /> 
      <Route path='/p' element={<PageNotFound />} />
    </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
