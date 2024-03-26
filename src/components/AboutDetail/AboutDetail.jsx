import React, { useState } from 'react'
import "./AboutDetail.css"
import Card from "../Card/Card"

const AboutDetail = () => {

  return (
    <>
      <div className="about">
      <div>
            <h2 className="about-title">Hello! Let's get to know each other better!</h2>
            <p className="about-text">Medical mitra empowers students like you to navigate the complexities of higher education. Our dedicated team of young professionals serves as your trusted advisor, guiding you through every step of your journey, from choosing the right career path and institution to navigating admissions and settling into your new environment. We cater specifically to students pursuing engineering and medical fields, offering innovative resources and expert guidance on specializations, entrance exams, and admission procedures across India and internationally.</p>
          </div>
          <br />
        <div>
          <h2 className="about-title">Why Choose Medical Mitra?</h2>
          <p className="about-text">Unsure about your future in medicine or engineering? Medical mitra empowers you to make informed decisions with personalized counseling based on your marks and ranking. Our expert guidance helps you navigate the complex process of entrance exams and career choices, all in one place. Stop the doubts and shape your future with Medical mitra</p>
        </div>
        <br />
        <div className="wrapper">
          
          <br />
          <Card />
          <br /><br /><br />
          <div>
            <h2 className="about-title">What we Do?</h2>
            <p className="about-text">We streamline your medical school journey by guiding you through NEET UG and PG registration, application filling, document verification, and choice filling.</p>
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  )
}

export default AboutDetail