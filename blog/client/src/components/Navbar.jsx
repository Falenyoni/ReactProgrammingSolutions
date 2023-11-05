import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="links">
                <Link className='link' to='/?cart=coding'>
                   <h6>CODING</h6> 
                </Link>
                <Link className='link' to='/?cart=interviews'>
                   <h6>INTERVIEWS</h6> 
                </Link>
                <Link className='link' to='/?cart=cloud'>
                   <h6>CLOUD</h6> 
                </Link>
                <Link className='link' to='/?cart=religion'>
                   <h6>RELIGION</h6> 
                </Link>
                <Link className='link' to='/?cart=art'>
                   <h6>ART</h6> 
                </Link>
                <span>Bongani</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className='link' to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar