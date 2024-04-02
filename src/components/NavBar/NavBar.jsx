import React, { useState } from 'react'
import "./NavBar.css"
import { menuIcon, Close, LogoCropped } from "../../images"
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    secureLocalStorage.clear();
    sessionStorage.clear();
    navigate('/');
  }
  const [isActive, setIsActive] = useState(false);

  return <><nav>
    <Link to="/" className="logo">
      <img src={LogoCropped} height={30} width={30} />
      <span className="LogoName"><span className="Aqua">Medical</span>
        <span className="DarkBlue">Mitra</span></span>
    </Link>
    {
      secureLocalStorage.getItem('user') ?
        <><ul>
          <li><NavLink to="/About" >About</NavLink></li>
          {secureLocalStorage.getItem('type') === 'free' || secureLocalStorage.getItem('type') === 'premium' ?
            <>
              <li><NavLink to="/Webinar" >Webinar</NavLink></li>
            </>
            :
            <>
              <li><NavLink to="/WebinarAdmin" >Webinar</NavLink></li>
            </>}
          <li><NavLink to="/Contact" >Contact</NavLink></li>
          {secureLocalStorage.getItem('type') === 'free' ?
            <>
              <li><NavLink to="/PremiumDetail">Buy Now</NavLink></li>
            </>
            :
            <>
            </>}
          <li><a href="" onClick={logout} >LogOut</a></li>
        </ul></>
        :
        <>
          <ul>
            <li><NavLink to="/About" >About</NavLink></li>
            <li><NavLink to="/Contact" >Contact</NavLink></li>
            <li><NavLink to="/Login" >Webinar</NavLink></li>
            <li><NavLink to="/Login" >SignUp/Login</NavLink></li>
          </ul>
        </>
    }
    <div onClick={() => setIsActive(true)} className="menu_icon">
      <img src={menuIcon} height={30} width={30} />
    </div>

  </nav>
    <div className={`mobile_menu_container ${isActive ? "active" : ""}`}>
      <div onClick={() => setIsActive(false)} className="close_icon">
        <img src={Close} width={30} alt="" /></div>
      {
        secureLocalStorage.getItem('user') ?
          <><ul className="menu_items">

            <li><a href="/About" onClick={() => setIsActive(false)}>About</a></li>
            {secureLocalStorage.getItem('type') === 'free' ?
              <>
                <li><a href="/Webinar" onClick={() => setIsActive(false)}>Webinar</a></li>
              </>
              :
              <>
                <li><a href="/WebinarAdmin" onClick={() => setIsActive(false)}>Webinar</a></li>
              </>}
            <li><a href="/Contact" onClick={() => setIsActive(false)}>Contact</a></li>
            {secureLocalStorage.getItem('type') === 'free' ?
              <>
                <li><a href="/PremiumDetail" onClick={() => setIsActive(false)}>Become a Premium User</a></li>
              </>
              :
              <>
              </>}
            <li><a href="" onClick={logout} >LogOut</a></li>
          </ul></>
          :
          <>
            <ul className="menu_items">
              <li><a href="/About" onClick={() => setIsActive(false)}>About</a></li>
              <li><a href="/Contact" onClick={() => setIsActive(false)}>Contact</a></li>
              <li><a href="/Login" onClick={() => setIsActive(false)}>Webinar</a></li>
              <li><a href="/Login" onClick={() => setIsActive(false)}>SignUp/Login</a></li>
            </ul>
          </>
      }

    </div></>
}

export default NavBar