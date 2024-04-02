import React from 'react'
import "./Card.css"
import { mission, vision, Values } from "../../images"
const Card = () => {
  return (
    <><div className="cards">
      <div className="card">
        <img src={mission} alt="Mision Icon made by Freepik" className="card-image" />
        <h2 className="card-title">Our Mission</h2>
        <p className="card-text">We empower students to find their ideal medical or engineering course and college in India through comprehensive admission support and expert career guidance.</p>
      </div>
      <div className="card">
        <img src={vision} alt="Mision Icon made by Freepik" className="card-image" />
        <h2 className="card-title">Our Vission</h2>
        <p className="card-text">Matching student potential with educational opportunities, Career Shapers offers career guidance and college admission solutions to empower students, parents, schools, and communities.</p>
      </div>
      <div className="card">
        <img src={Values} alt="Values Icon made by Freepik" className="card-image" />
        <h2 className="card-title">Our Values</h2>
        <p className="card-text">Ethical foundation: We uphold the highest ethical standards in our interactions.
          Open communication: We believe in clear and transparent communication with all stakeholders.
          Dedicated expertise: We deliver professional services with competence and integrity.
        </p>
      </div></div>
    </>
  )
}

export default Card