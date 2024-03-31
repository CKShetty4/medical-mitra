import { Link } from "react-router-dom";
import Button from "../Button/Button"
import React, { useState, useEffect } from 'react'
import PopUp from "./PopUp";
import styles from "./Defaultpop.module.css";

const Defaultpop = () => {

    const [timedPopUp, setTimedPopUp] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTimedPopUp(true);
        }, 3000);
    }, []);

    return (
        <PopUp trigger={timedPopUp} setTrigger={setTimedPopUp}>
            <br />
            <h5 className={styles.SubHeader}>Unlock Your Medical Journey with Medical Mitra!</h5>
            <h3 className={styles.Header}>Welcome, future doctor!</h3>
            <p className={styles.Body}>To access exclusive benefits like Pre-Exam & Post-Exam support, personalized Mentoring, and subject-specific webinars to help you crack NEET,  sign in or create a free account! <br />
                Medical Mitra empowers medical aspirants with expert guidance, stress management tips, toppers' insights, and a glimpse into medical college life.  Shape your future with us!</p>
            <div style={{
                display: 'flex', justifyContent: 'left', padding: '0 20%'
            }}>
                <Link to="/SignUp"> <Button text="Sign In | Create Free Account" /></Link></div>
                <br />
            <p className={styles.PS}>By signing up, you'll also gain access to exclusive webinars on how to crack NEET and succeed in medical school.</p>
        </PopUp>
    )
}

export default Defaultpop