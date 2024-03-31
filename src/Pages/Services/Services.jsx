import React from 'react'
import styles from "./Services.module.css"

const InfoContent = () => {
    return (
        <section id="service">
            <div className={styles.Wrapper}>
                <div>
                    <br />
                    <h1 className={styles.Title}>MedicalMitra - Streamlined Medical Counselling Support for NEET Aspirants</h1>
                    <br /><br />
                    <p className={styles.Body}>
      Medical Mitra empowers you to navigate the complexities of NEET counselling and secure your dream medical college seat. We provide real-time updates on your NEET score, rank implications, and counselling processes. Our dedicated medical advisors offer personalized mentorship throughout your application journey.
      <br /><br />
      Leveraging your expected NEET score, we generate a customized college shortlist (SYC) with the best-fit options. We also provide access to college rankings, reviews, facilities, and scholarship details (KYC). Our experts guide you through document verification and submission for effortless application management.
      <br /><br />
      We navigate the complexities of MCC & state quota applications and offer choice filling expertise to optimize your college selection. Relax our team tracks your application journey till admission.
      <br /><br />
      Beyond counselling, we empower you with resources:
      <br />
    </p>
    <div>
      <ul>
        <li> Pre-NEET subject-specific webinars for Physics, Chemistry, and Biology.</li>
        <li> Webinars on cracking the NEET exam, managing stress, and topper experiences.</li>
        <li> Insights into life in medical college.</li>
      </ul>
    </div>
                    <br />
                    <h1 className={styles.Title}>MedicalMitra - Your one-stop solution for all your NEET counselling needs!</h1>

                </div>
            </div>
            <br /><br /><br /></section>
    )
}

export default InfoContent