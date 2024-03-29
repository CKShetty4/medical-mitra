import React, { useState, useRef, useEffect } from 'react';
import styles from './Login.module.css'
import Button from "../../components/Button/Button"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { logo, SignUP, Close } from '../../images/index';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
library.add(faEye, faEyeSlash);
const Login = () => {

  const [login_cred, setlogin_cred] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login_credRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    if (localStorage.getItem('status')===1) {
      navigate('/');
    }
  }, [])
  const [showPassword, setShowPassword] = useState(false);
 
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  function nagigateToOtp() {
    if (login_cred) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);

      axios
        .post("https://backend.medicalmitra.co.in/recovery", {
          OTP:OTP,
          recipient_email: login_cred,
        })
        .then((res) => {console.log(res.data);})
        .catch(console.log);
      return;
    }
    return alert("Please enter your email");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //dca
    // fetch('http://192.168.97.188:5000/Login', {
      fetch('https://backend.medicalmitra.co.in/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login_cred: login_credRef.current.value,
        password: password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(localStorage.getItem(data.message));
        }
        return response.json();
      })
      .then(data => {
        // Handle the response from the backend
        localStorage.setItem('status', data.status);
        localStorage.setItem('user', data.user);
        localStorage.setItem('message', data.message);
        localStorage.setItem('type', data.type);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);

      });
    setTimeout(() => {
      if (Number(localStorage.getItem('status')) === 1) {
        toast.success('Login Success', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
      else {
        
        toast.error(localStorage.getItem("message"), {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
        localStorage.removeItem('user')
      }
    }, 200);
    
  };


  return (
    <>
      <div style={{ backgroundColor: 'var(--Aqua)', height: '100vh', width: '100%', }}>
        <div className={styles.contact_form}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3} lg={4}>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} className={styles.center_paper}>
              <Paper elevation={8} className={styles.grid_content} p={80}>
                <div className={styles.Close}><a href="/">
                  <img src={Close} width={25} /></a></div>
                <div className={styles.Arranging}>
                  <div className={styles.Image}><h1 className={styles.Head}>Login</h1><br /> <br /> <br /> <br />
                    <img src={SignUP} width={250} />
                  </div>
                  <div className="Form">
                    <img src={logo} width={50} /><br /><br />
                    <form action="" onSubmit={handleSubmit}>
                      <div className={styles.form_control}>
                        <label htmlFor="Name">Username</label>
                        <input required ref={login_credRef} onChange={(e) => setlogin_cred(e.target.value)} placeholder='UserName/Email/Phone Number' type="text" name="Name" />
                      </div>
                      <div className={styles.form_control}>
                        <label htmlFor="Password">Password</label>
                        <div className="input_password_container">
                          <input
                            required
                            ref={passwordRef}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            name="Password"
                          />
                          <div className={styles.Icon} onClick={togglePassword}>
                            <FontAwesomeIcon icon={showPassword ? "eye-slash" : "eye"} />
                          </div>
                        </div>
                      </div>
                      <p className={styles.Register} >Don't remember your password?<Link to="/Login" onClick={() => nagigateToOtp()} >Reset Password</Link></p>
                      <div style={{
                        display: 'flex', justifyContent: 'left', padding: '0 12%'
                      }}>
                        <Button text="SUBMIT" /></div>
                      <div className="loginlink">
                        <p className={styles.Register}>Don't have an account?<Link to="/SignUp">Register</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={3} lg={4}>
            </Grid>
          </Grid>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div></div>
    </>
  )
}
export default Login