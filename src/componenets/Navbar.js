import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import {FaBars} from "react-icons/fa"
import {IoMdClose} from "react-icons/io"

const Navbar = () => {  
  function toggleBarsClick(){
    document.getElementById('drop-down-menu').style = 'display: block'
  }
  function toggleCloseClick(){
    document.getElementById('drop-down-menu').style = 'display: none'
  }
  
  return (
    <>
    <div id="drop-down-menu" className='drop-down-menu slide-bottom' > 
      <IoMdClose onClick={toggleCloseClick} className='close-icon' />
      <div className="drop-down-menu-links">
        <Link to="/business">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/general">General</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
      </div>
    </div> 
    <nav>
      <div className="hamburger-menu-icon">
        <FaBars onClick={toggleBarsClick} />
      </div> 
    
      <div className="full-size-navbar-links">
        <Link to="/business">Business</Link>
        <Link to="/entertainment">Entertainment</Link>
        <Link to="/general">General</Link>
        <Link to="/health">Health</Link>
        <Link to="/science">Science</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/technology">Technology</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
