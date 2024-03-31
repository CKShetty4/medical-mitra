import React, { useState, useRef, useEffect } from 'react';
import styles from './SignUp.module.css'
import Button from "../../components/Button/Button"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordAndConfirmPasswordValidation from '../../components/PasswordVaildation/PasswordAndConfirmPasswordValidation';
import { Link, useNavigate } from "react-router-dom";
import { Logo, Close } from '../../images/index';
import { BACKEND_HOST } from '../../Constants.js';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();

  const handlePasswordChange = (password) => {
    setPassword(password);
  };
  useEffect(() => {
    if (localStorage.getItem('status') === 1) {
      navigate('/');
    }
  }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(`${BACKEND_HOST}/Register/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: nameRef.current.value,
  //       email: emailRef.current.value,
  //       phoneNumber: phoneNumberRef.current.value,
  //       password: password
  //     })
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('HTTP error ' + response.status);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Handle the response from the backend
  //       localStorage.setItem('message', data.message);
  //       localStorage.setItem('status', data.status);
  //       // localStorage.setItem('user', data.user);
  //       // localStorage.setItem('type', data.type);
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //       console.error(error);

  //     });
  //   setTimeout(() => {
  //     if (Number(localStorage.getItem('password')) === 1 && Number(localStorage.getItem('status')) === 1) {
  //       toast.success("Registered Successfully", {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //       setTimeout(() => {
  //         navigate('/');
  //       }, 1500);
  //     }
  //     else if (Number(localStorage.getItem('password')) === 0) {
  //       toast.error("Please check the Password", {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //       localStorage.clear()
  //     }
  //     else {
  //       toast.error(localStorage.getItem("message"), {
  //         position: "top-center",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       })
  //       localStorage.clear()
  //     }
  //   }, 200);

  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BACKEND_HOST}/Register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        password: password
      })
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 409) {
          console.log('Response status is 409');
          throw new Error('User already exists');
        } else {
          throw new Error('HTTP error ' + response.status);
        }
      }
      return response.json();
    })
    .then(data => {
      // Handle the response from the backend
      if (data.status === 0) {
        // Handle user already exists
        console.log('Response status is 0');
        localStorage.setItem('message', data.message);
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
        });
        localStorage.clear();
      } else {
        // Handle successful registration
        localStorage.setItem('message', data.message);
        localStorage.setItem('status', data.status);
        localStorage.setItem('user', data.user);
        localStorage.setItem('type', data.type);
        toast.success("Registered Successfully", {
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
    })
    .catch(error => {
      // Handle any errors
      if (error.message === 'User already exists') {
        // Handle user already exists
        localStorage.setItem('message', error.message);
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
        });
        localStorage.clear();
      } else {
        // Handle any other errors
        console.error(error);
      }
    });
  };
  return (
    <>
      <div style={{ backgroundColor: 'var(--Aqua)', height: '100vh', width: '100%', }}>
        <div className={styles.contact_form}>
          <Grid container spacing={0}>
            <Grid item xs={4} sm={3} lg={4}>
            </Grid>
            <Grid item xs={4} sm={6} lg={4} className={styles.center_paper}>
              <Paper elevation={8} className={styles.grid_content} p={100}>
                <div className={styles.Close}>
                  <Link to="/"><img src={Close} width={25} /></Link></div>
                <br />
                <div className={styles.Arranging}>
                  <div className={styles.Image}><h1 className={styles.Head}>Register</h1><br /> 
                    <img src={Logo} width={250} />
                    
                  </div>
                  <div className="Form">
                   <br /> 
                    <form action="" onSubmit={handleSubmit}>
                      <div className={styles.form_control}>
                        <label htmlFor="Name">Username</label>
                        <input required ref={nameRef} onChange={(e) => setName(e.target.value)} placeholder='UserName' type="text" name="Name" />
                      </div>
                      <div className={styles.form_control}>
                        <label htmlFor="number">Contact Number</label>
                        <input placeholder='Enter your number' ref={phoneNumberRef} onChange={(e) => setPhoneNumber(e.target.value)} type="text" onKeyDown={(e) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} name="number" />
                      </div>
                      <div className={styles.form_control}>
                        <label required htmlFor="email">Email</label>
                        <input type='email' ref={emailRef} onChange={(e) => setEmail(e.target.value)} placeholder='Email' name="email" />
                      </div>
                      <div><PasswordAndConfirmPasswordValidation ref={passwordRef} onChange={(e) => setPassword(e.target.value)} onPasswordChange={handlePasswordChange} /> </div>
                      <div className={styles.form_control_check}>
                        <input required type="checkbox" name="check" />
                        <label htmlFor="chec"> I authorize Medical Mitra to contact me via email, SMS & voice call.</label>
                      </div>
                      <div style={{
                        display: 'flex', justifyContent: 'left', padding: '0 12%'
                      }}>
                        <Button text="SUBMIT" /></div>
                      <div className={styles.loginlink}>
                        <p>Already have a account? <Link to="/Login">Login</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={4} sm={3} lg={4}>
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
            theme="colored"
            transition={Bounce} />
        </div></div>
    </>
  );
}

export default SignUp