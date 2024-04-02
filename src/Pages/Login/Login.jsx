import React, { useState, useRef, useEffect } from 'react';
import styles from './Login.module.css'
import Button from "../../components/Button/Button"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { logo, Close, Logo, LogoCropped } from '../../images/index';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BACKEND_HOST } from '../../Constants.js';
import secureLocalStorage from "react-secure-storage";
import axios from 'axios';
import { data } from 'jquery';

library.add(faEye, faEyeSlash);
const Login = () => {

  const [login_cred, setlogin_cred] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login_credRef = useRef();
  const passwordRef = useRef();
  const toastId = useRef(null)
  useEffect(() => {
    if (secureLocalStorage.getItem('status') === 1) {
      navigate('/');
    }
  }, [])
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const createToast = (type, message, duration = 1000) => {
    toast[type](message, {
      type,
      isLoading: false,
      position: "top-center",
      duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  const clearToast = () => {
    toast.dismiss();
    toast.clearWaitingQueue();
  };
  function nagigateToOtp() {
    toastId.current = toast.loading("Please Wait...")
    if (login_credRef.current.value) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      secureLocalStorage.setItem('SecureCode', OTP);
      secureLocalStorage.setItem('email', login_credRef.current.value);

      fetch(`${BACKEND_HOST}/ForgotPassword/Email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          OTP: OTP,
          email: login_cred,
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 1) {
            toast.update(toastId.current, {
              render: data.message,
              type: "success",
              isLoading: false,
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
              navigate('/OTP');
            }, 1500);
          }
          else {
            clearToast();
            createToast('error', data.message);
          }
        })
        .catch(error => {
          clearToast();
          createToast('error', error.message);
        });
    }
    else {
      return alert("Please enter your email");
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BACKEND_HOST}/Login`, {
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
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 1) {
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
          secureLocalStorage.setItem('user', data.user);
          secureLocalStorage.setItem('type', data.type);
          setTimeout(() => {
            navigate('/');
          }, 1500);
        }
        else {
          toast.error(data.message, {
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
        }
      })
      .catch(error => {
        toast.error(error.message, {
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
      });
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
                <div className={styles.Close}><Link to="/">
                  <img src={Close} width={25} /></Link></div>
                <div className={styles.Arranging}>
                  <div className={styles.Image}><h1 className={styles.Head}>Login</h1><br />
                    <img src={Logo} width={250} />
                  </div>
                  <div className="Form">
                    <br />
                    <form action="" onSubmit={handleSubmit}>
                      <div className={styles.form_control}>
                        <label htmlFor="Name">Username</label>
                        <input required ref={login_credRef} onChange={(e) => setlogin_cred(e.target.value)} placeholder='Email/Phone Number' type="text" name="Name" />
                      </div>
                      <div className={styles.form_control}>
                        <label htmlFor="Password">Password</label>
                        <div className={styles.input_password_container}>
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
                      <p className={styles.Register} >Don't remember your password?<Link onClick={() => nagigateToOtp()} >Reset Password</Link></p>
                      <div style={{
                        display: 'flex', justifyContent: 'left', padding: '0 12%'
                      }}>
                        <Button text="SUBMIT" /></div>
                      <div className="loginlink">
                        <p className={styles.Register}>Don't have an account?<Link to="/SignUp"><span>Register</span></Link></p>
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
            limit={1}
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
            limit={1}
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