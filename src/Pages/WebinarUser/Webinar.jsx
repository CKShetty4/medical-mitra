import React, { useEffect, useState, useRef } from 'react'
import styles from "./Webinar.module.css"
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import BackGroundArt from '../../components/BackGroundArt/BackGroundArt';
import { Doctor, schedule } from '../../images';
import Footer from '../Footer/Footer'
import Button from '../../components/Button/Button';
import { BACKEND_HOST } from '../../Constants.js';
import secureLocalStorage from "react-secure-storage";

const Webinar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (secureLocalStorage.getItem('type') === "admin") {
      navigate('/WebinarAdmin');
    }
  }, [])
  const [webData, setwebData] = useState();

  useEffect(() => {
    const getWebData = async () => {
      try {
        const response = await fetch(`${BACKEND_HOST}/Webinar/User`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          // If the response is not ok, handle the error here
          const errorMessage = `An error occurred while fetching products: ${response.statusText}`;
          // console.error(errorMessage);
          return;
        }

        const json = await response.json();
        setwebData(json);
      } catch (error) {
        // If an error occurs during the fetch request, handle it here
        // console.error('An error occurred while fetching products:', error);
      }
    };
    getWebData();
  }, []);

  return (
    <>
      <div className="wrapper"><NavBar /></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div><div className={styles.content}>
        <h2>
          NEET UG 2024: Preparation & Admission Masterclass <br />
          <b>Unlock your dream medical career with our comprehensive webinar!</b>
        </h2>

        <h5>
          This session equips NEET UG aspirants with the knowledge and strategies to excel in the entrance exam and navigate the admissions process with confidence.</h5>
        <br /><br />
        <div className={styles.Webinar}>
          <div >
            <img src={Doctor} className={styles.DOC} alt="" />
          </div>
          <div>
            {
              secureLocalStorage.getItem('type') === 'free' ?
                <>
                  {webData ? (
                    webData.statusFree === "active" ? (
                      <>
                        <div className={styles.Webinar2}>
                          <div>
                            <img src={schedule} width={60} alt="" />
                          </div>
                          <div>
                            {webData && webData.free && webData.free.length > 0 && (
                              <div className={styles.clss}>
                                <h3>Don't miss out! Register for our upcoming webinar:</h3>
                                <h3>{webData.free[0].title}</h3>
                                <h4>Description: {webData.free[0].description}</h4>

                                <h6>Join us on {webData.free[0].date} at {webData.free[0].time} IST for an insightful webinar on {webData.free[0].title}. <br />
                                  Reserve your spot today! Click the button below to register for this free webinar.</h6>
                                Register Now! <br /> Space is limited, so don't delay!
                                <a href={webData.free[0].link}> <Button text={"Register"} /></a>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Inative condition */}
                        <div className={styles.Webinar2}>
                          <div>
                            <img src={schedule} width={60} alt="" />
                          </div>
                          <div>
                            <div className={styles.clss}>
                              <h3>Stay Informed About Upcoming Webinars!</h3>
                              <h4>We don't currently have any webinars scheduled, but we host informative sessions regularly.
                              </h4><h4>
                                To stay up-to-date on future webinars:</h4>
                              <ul>
                                <li>Visit our website regularly.</li>
                                <li>Sign up for our email notifications.</li>
                                <li>Follow us on social media.</li></ul>
                              We'll also reach out directly via email, contact, or WhatsApp if a new webinar is planned.
                              <br />
                              This way, you won't miss out on the valuable insights we share in our webinars!
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  ) : (
                    <div>Loading...</div>
                  )}
                </>
                :
                <>
                </>
            }

            {/* Active Conditon PREMIUM */}
            {
              secureLocalStorage.getItem('type') === 'premium' ?
                <>

                  {webData ? (
                    webData.statusPremium === "active" ? (
                      <>
                        <div className={styles.Webinar2}>
                          <div>
                            <img src={schedule} width={60} alt="" />
                          </div>
                          <div>
                            {webData && webData.premium && webData.premium.length > 0 && (
                              <div className={styles.clss}>
                                <h3>Don't miss out! Register for our upcoming webinar:</h3>
                                <h3>{webData.premium[0].title}</h3>
                                <h4>Description: {webData.premium[0].description}</h4>

                                <h6>Join us on {webData.premium[0].date} at {webData.premium[0].time} IST for an insightful webinar on {webData.premium[0].title}. <br />
                                  Reserve your spot today! Click the button below to register for this free webinar.</h6>
                                Register Now! <br /> Space is limited, so don't delay!
                                <a href={webData.premium[0].link}> <Button text={"Register"} /></a>
                              </div>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Inative condition */}
                        <div className={styles.Webinar2}>
                          <div>
                            <img src={schedule} width={60} alt="" />
                          </div>
                          <div>
                            <div className={styles.clss}>
                              <h3>Stay Informed About Upcoming Webinars!</h3>
                              <h4>We don't currently have any webinars scheduled, but we host informative sessions regularly.
                              </h4><h4>
                                To stay up-to-date on future webinars:</h4>
                              <ul>
                                <li>Visit our website regularly.</li>
                                <li>Sign up for our email notifications.</li>
                                <li>Follow us on social media.</li></ul>
                              We'll also reach out directly via email, contact, or WhatsApp if a new webinar is planned.
                              <br />
                              This way, you won't miss out on the valuable insights we share in our webinars!
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  ) : (
                    <div>Loading...</div>
                  )}
                </>
                :
                <></>
            }



          </div>
        </div>
        <br /><br /><br />
        <h3>Key Takeaways:</h3>
        <ul>
          <li><strong>Proven Techniques to Score 600+:</strong> Learn effective strategies and approaches to maximize your score in NEET 2024.</li>
          <li><strong>Pre-Exam Essentials:</strong> Gain clarity on crucial steps to take before the NEET exam, ensuring a smooth and prepared approach.</li>
          <li><strong>Expert Marks vs. Rank Analysis:</strong> Understand the correlation between marks and ranks, allowing for informed decision-making.</li>
          <li><strong>Streamlined Admissions Guidance:</strong> Get insights into documentation requirements, tentative counseling schedules, and eligibility norms.</li>
          <li><strong>Demystifying Reservations & Counseling:</strong> We'll break down reservation policies and counseling procedures for a clear understanding.</li>
          <li><strong>Understanding Diverse Medical Paths:</strong> Explore options beyond NEET, including AIIMS, JIPMER, AFMC, Deemed universities, All India Quota (AIQ), and state counseling.</li>
          <li><strong>Stay Informed:</strong> Stay updated with the latest fee structures, seat matrix, and expected cut-offs for various medical colleges.</li></ul>
        <h3>Don't miss this opportunity to gain a competitive edge!</h3>

        <h1>Register now and empower yourself for a successful medical future!</h1>
        <h5>Medical Mitra - Your Guide to Medical Admissions Success</h5>
      </div></div>
      <br /><br /><br />
      <BackGroundArt />
      <Footer />
    </>
  );
}

export default Webinar;