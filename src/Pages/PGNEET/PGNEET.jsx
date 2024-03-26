import React,{useEffect} from 'react'
import "./PGNEET.css"
import NavBar from '../../components/NavBar/NavBar'
import { Logo, TextBG,Chat } from "../../images"
import Footer from '../Footer/Footer'

const PGNEET = () => {
    useEffect(()=>{
        window.scroll(0,0);
      },[])
    return (
        <><div className="wrapper"><NavBar />
            <br /><br /><br /><br />
            <div className="pgneet">
                <div>
                    <h2 className="about-title">Facing challenges with NEET?</h2>
                    <p className="about-text">Feeling overwhelmed by the NEET application process? Don't worry, we're here to help! Our experts can guide you through every step of NEET Counselling, ensuring you understand your eligibility and cut-off requirements. We can also clarify your options for pursuing medical education outside your home state. Let us help you navigate the complexities of NEET and take the first step towards your medical dream.</p>
                </div>
                <div className="wrapper">
                    <br /><br /><br />
                    <div>
                        <div className="content1">
                    <img src={Logo} alt="Logo" width={100} />
                    </div><br/>
                        <h2 className="about-title">We guide you every step of the way towards achieving your desired outcome.</h2>
                    </div>
                    <br />
                    <div className="content">
                        <div className="content-details1">
                            
                            <img src={TextBG} alt="Logo" width={1080} />
                        </div></div>
                    <br/>
                    <div>
                        <p className="about-text">Exciting news! We're upgrading our services in the coming days. To ensure you get the best results.</p>
                    </div>
                </div>
                <br /><br />
            </div>                
            <div></div>
        </div><Footer/></>
    )
}

export default PGNEET