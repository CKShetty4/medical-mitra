import React from 'react'
import { Doctor, Logo, TextBG, Picture1, Chat } from "../../images"
import styles from "./InfoContent.module.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button"


const InfoContent = () => {
    return (
        <section id="info" className="White">
            <div className={styles.Wrapper}>
                <div className={styles.content_container}>
                    <div className={styles.info_content}>
                        <img src={Doctor} alt="Doctor clipart image from ufe foccupation pinterest boy cards" className={styles.doc} />
                    </div>
                    <div className={styles.info_content}>
                        <img src={Logo} alt="Logo" className={styles.logo_img} />
                        <img src={TextBG} alt="Logo" className={styles.Chatbx} />
                        <div className={styles.content_container2}>
                                <div className={styles.info_content2}>
                                    <p className="Amount"><strong>13594+</strong> MBBS & BDS Seats!</p>
                                    <p className="Amount"><strong>20,87,462</strong> Aspirants!</p>
                                    <p className={styles.Text2}>Get expert NEET guidance. Schedule a consultation with your Medical Mitra today!</p>
                                    <Link to="UGNEET" className="Contact-btn">
                                        <Button text="UG NEET" />
                                    </Link>
                                </div>
                                <div className={styles.info_content2}>
                                    <p className="Amount"><strong>45110+</strong> MD/MS & MDS Seats!</p>
                                    <p className="Amount"><strong>2,08,898+</strong> Aspirants!</p>
                                    <p className={styles.Text}>Get expert NEET guidance. Schedule a consultation with your Medical Mitra today!</p>
                                    <Link to="PGNEET" className="Contact-btn">
                                        <Button text="PG NEET" />
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
                <img src={Picture1} className={styles.Corner_image} width={100} />
            </div>
            <br /><br /><br /></section>
    )
}

export default InfoContent