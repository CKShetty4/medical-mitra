import React, { useState, useRef, useEffect } from 'react';
import styles from './ResetPassword.module.css'
import Button from "../../components/Button/Button"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordAndConfirmPasswordValidation from '../../components/PasswordVaildation/PasswordAndConfirmPasswordValidation';
import { Link, useNavigate } from "react-router-dom";
import { Logo, Close } from '../../images/index';
import { BACKEND_HOST } from '../../Constants.js';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${BACKEND_HOST}/Register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: phoneNumberRef.current.value,
        password: password
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('message', data.message);
        localStorage.setItem('status', data.status);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    setTimeout(() => {
      if (Number(localStorage.getItem('password')) === 1 && Number(localStorage.getItem('status')) === 1) {
        toast.success("Reset Successfully", {
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
      else if (Number(localStorage.getItem('password')) === 0) {
        toast.error("Password does not match", {
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
        localStorage.clear()
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
        localStorage.clear()
      }
    }, 200);

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
                  <div className={styles.Image}><h1 className={styles.Head}>Reset Password</h1><br /> 
                    <img src={Logo} width={250} />
                    
                  </div>
                  <div className="Form">
                   <br /> 
                    <form action="" onSubmit={handleSubmit}>
                      
                      <div><PasswordAndConfirmPasswordValidation ref={passwordRef} onChange={(e) => setPassword(e.target.value)} onPasswordChange={handlePasswordChange} /> </div>
                        <br />  
                      <div style={{
                        display: 'flex', justifyContent: 'left', padding: '0 12%'
                      }}>
                        <Button text="SUBMIT" /></div>
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

export default ResetPassword