import React, {useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import "./Contact.css"
import { Logo } from "../../images"
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../Footer/Footer'

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])


  return <>
  <div className="wrapper">
      <NavBar /></div>
    <br />
  <div className="Spacing">
    <div className="wrapper"></div>
    <div className="content2">
      <img src={Logo} alt="Logo" width={100} />
    </div>
    <h2>Feel Free to Contact Us </h2>
    
    <div className="content1">
            <p>Hey there! <br />Feeling stressed about college applications or that medical/engineering entrance exam? We get it!  That's why Medical Mitra is here for you (and your kiddo!).
              Think of us as your college and career BFFs.  We'll guide you through the whole process with a smile, making it feel way less overwhelming.  We're experts, but also super approachable, so you can ask us anything!? <br /> Ready to ditch the stress and join our supportive fam?  Let's chat!</p>
          </div>
    <h2>We're here for you, Please drop us a message and our team will get in touch with you within 24 hours.</h2>

    <br />
    <ContactForm />
      
  </div>
  <Footer/></>
  
}

export default Contact