import React,{useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AboutDetail from "../../components/AboutDetail/AboutDetail"
import { WhatsappLogo } from '../../images'
import Footer from '../Footer/Footer'

const About = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <>
      <div className="wrapper">
        <NavBar />
      </div>
      <br /><br /><br /><br />
      <div className="Sizing"><AboutDetail /></div>
      <div class="fixed-bottom right-100 p-3" style={{ zindex: "6", left: "initial" }}>
        <a href="https://wa.me/918861619973?text=Hello, I have a question about Medical Mitra" target="_blank">
          <img src={WhatsappLogo} width="60" />
        </a>
      </div>
      <Footer/>
    </>
  )
}

export default About