import React, { useEffect } from 'react'
import "./UGNEET.css"
import NavBar from '../../components/NavBar/NavBar'
import { Logo, degree, medicalschool, worldwide, counseling, deadline, contract, lecture, contactlist, tracking, MM4999, MM4999mob, MMPro } from "../../images"
import Footer from '../Footer/Footer'
import Grid from '@mui/material/Grid';
import Button from "../../components/Button/Button"
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";

const UGNEET = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  return (
    <>
      <div className="wrapper"><NavBar />
        <br /><br /><br /><br />
        <div className="pgneet">
          <div>
            <h2 className="about-title">A safe space to talk and supportive direction to navigate your path.</h2>
            <p className="about-text">Designed specifically for aspiring medical students, our Mentorship Program offers you a dedicated coach. This experienced mentor will empower you with the knowledge and resources you need to navigate the application process, from initial guidance to achieving your dream of medical school.
              Work hand-in-hand with your mentor every step of the way. Gain personalized support and ensure you're on the right track to a successful medical career.</p>
          </div>
          <div className="wrapper">
            <br />
            <div>
              <div className="content1">
                <img src={Logo} alt="Logo" width={100} />
              </div>
              <h2 className="about-title">We guide you every step of the way towards achieving your desired outcome.</h2>
            </div>
            <br />
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={contract} width={50} />
                    <p><strong>Streamline your journey.</strong> Avoid application and document hassles with our expert guidance. We ensure a smooth transition into the medical school application process.</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={contactlist} width={50} />
                    <p><strong>Optimize Your Match:</strong> Navigate complex cut-off scores across institutions to ensure the best fit for your aspirations.</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={deadline} width={50} />
                    <p><strong>Stay informed.</strong> Get timely alerts and updates relevant to your academic journey. Never miss important deadlines or announcements.</p>
                  </div>  </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={tracking} width={50} />
                    <p><strong>Streamline your medical admissions.</strong>  We track seat availability across 150+ institutes and guide you through mock, spot, and institutional rounds for a stress-free merit-based admission process.</p>
                  </div>  </Paper>
              </Grid>
            </Grid>
            <br />
            {secureLocalStorage.getItem('type') === 'premium' || secureLocalStorage.getItem('type') === 'admin' ?
              <>

              </>
              :
              <>
                <div className="MM499">
                  <img src={MM4999} alt="" /></div>
                <div className="MM499mob">
                  <img src={MM4999mob} alt="" /></div>
                <div className="MM499">
                  <img src={MMPro} alt="" /></div>
                <div className="MM499mob">
                  <img src={MMPro} alt="" /></div>
                <br /><br />
                <div style={{
                  display: 'flex', justifyContent: 'center', padding: '0'
                }}>
                  <Link to="/PremiumDetail"><Button text="Buy Now" /></Link></div>
                <br /><br />
              </>}

            <br />
            <div className="content1">
              <h2 className="about-title">While mastering NEET requires dedication, securing a seat is even more competitive. </h2>
              <div className="content"><h3 className="about-title2">And How  <a href="/" className="logo"><h3 className="LogoName">
                Medical<span className="yellow">Mitra</span></h3></a> makes it easier</h3>
              </div></div>
            <div>
              <p className="about-text">Exciting news! We're upgrading our services in the coming days. To ensure you get the best results.</p>
            </div>
            <Grid container spacing={6} p={4}>
              <Grid item xs={12} sm={2} lg={3}>
                <Paper p={2} elevation={0}>
                  <div className="content1"><img src={lecture} /></div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={10} lg={9}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <p>We offer targeted workshops and seminars designed for medical entrance exam hopefuls. These efficient sessions address student and parent concerns, clarify doubts, and equip you with the knowledge you need to succeed on the NEET exams. Focus on what matters and achieve your medical dreams.</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={counseling} width={50} />
                    <p><strong>Demystifying NEET Counselling:</strong> Feeling lost about AIQ and Karnataka NEET Counselling?  Our expert panel is here to answer all your questions. Gain clarity and navigate the process with confidence.</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={degree} width={50} />
                    <p><strong>Expand your medical horizons.</strong> Look beyond MBBS with Medical Mitra's seminars. Explore diverse healthcare fields like Dentistry (BDS), Ayurveda (BAMS), Homeopathy (BHMS), and more. Discover your perfect path to a fulfilling medical career.</p>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={worldwide} width={50} />
                    <p><strong>High NEET Competition? </strong>Explore Global Medical Schools.
                      With limited domestic seats, consider studying medicine overseas. Our seminars guide you through the process for a successful international medical education.</p>
                  </div>  </Paper>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <Paper p={2} elevation={0}>
                  <div className="content">
                    <img src={medicalschool} width={50} />
                    <p><strong>Medical school is a transformative experience.</strong> We'll guide you through the transition from high school to the demanding yet rewarding world of medical education.</p>
                  </div>  </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </div><Footer /></>
  )
}

export default UGNEET