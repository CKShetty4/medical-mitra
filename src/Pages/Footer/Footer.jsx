import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
import { logo, Insta, Youtube, Linkdin, Facebook } from "../../images"

const Footer = () => {

  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <Link to="/" className="logo">
              <img src={logo} height={50} width={50} />

            </Link>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <img src={Facebook} className='IMG' />
              </a>
              <a href="https://www.linkedin.com/">
                <img src={Linkdin} className='IMG' />
              </a>
              <a href="https://www.instagram.com/medical.mitra">
                <img src={Insta} className='IMG' />
              </a>
              <a href="https://www.youtube.com/">
                <img src={Youtube} className='IMG' />
              </a>
            </div>
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><Link preventScrollReset={true} to="/LegalTerms">Privacy Policy</Link></li>
              <li><Link preventScrollReset={true} to="/TermsAndConditions">Terms and Condtions</Link></li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:info@medicalmitra.co.in?Subject=About%20Medical%20Mitra&body=Hello,%20I%20have%20a%20question%20about%20Medical%20Mitra" target="_blank">info@medicalmitra.co.in</a></li>
              <li><a href="tel:8861619973">+91 8861619973</a></li>
            </ul>
          </div>
          <div className="links">
            <h3>Or Visit Us at</h3>
            <p>
              66/2 1st Floor, 5th Cross Rd,<br /> Srimatha Layout, Sharadhamba Nagar,<br /> Jalahalli Village, Bengaluru,<br /> Karnataka 560013
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">This website is designed by TeamNeo©2024</div>
    </footer>
  )
}

export default Footer