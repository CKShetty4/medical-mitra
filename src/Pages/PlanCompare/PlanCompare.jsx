import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import BackGroundArt from '../../components/BackGroundArt/BackGroundArt';
import { FreePro1, FreePro2 } from '../../images/index';
import styles from './PlanCompare.module.css'
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom";


const PlanCompare = () => {
  return (
    <><div className="wrapper"><NavBar />
      <br /><br /><br /><br />
      <div className={styles.Images}>
        <div className={styles.Free}><img src={FreePro2} /></div>
        <div className={styles.Premium}><img src={FreePro1} />
          <div className={styles.Btn}><Link to="/payment-gateway"> <Button text="Upgrade" /></Link></div>
        </div>
      </div></div>
      <BackGroundArt /></>
  )
}

export default PlanCompare