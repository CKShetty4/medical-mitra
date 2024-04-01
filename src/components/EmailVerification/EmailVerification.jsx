import React, { useState, useEffect } from "react";
import OTPInput from "./OTPInput";
import styles from "./EmailVerification.module.css";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BACKEND_HOST } from '../../Constants.js';
import  secureLocalStorage  from  "react-secure-storage";
const EmailVerification = () => {
  const [OTPinput, setOTPinput] = useState(["", "", "", ""]);
  const [timerCount, setTimer] = useState(60);
  const [timerInterval, setTimerInterval] = useState(null);
  const navigate = useNavigate();

  // Generate and store a new OTP
  const generateOTP = () => {
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    secureLocalStorage.setItem("SecureCode", OTP);
  };

  // Prevent Refresh
  const handlePageReload = (event) => {
    if (window.secureLocalStorage.length > 0 || window.secureLocalStorage.length > 0) {
      const isConfirmed = confirm('You have unsaved data. Are you sure you want to leave?');
      if (isConfirmed) {
        // clearStorage();
        console.log('Data cleared');
      } else {
        event.preventDefault();
        event.returnValue = '';
      }
    }
  };

  window.addEventListener('beforeunload', handlePageReload);

  const clearStorage = () => {
    // secureLocalStorage.clear();
    // secureLocalStorage.clear();
    secureLocalStorage.setItem('email', secureLocalStorage.getItem('email'));
    // secureLocalStorage.removeItem('OTP')
    // Redirect to the login page
    window.location.href = '/Login';
  };

  // Check if the page was reloaded using the performance.navigation API
  const isPageReload = performance.navigation.type === performance.navigation.TYPE_RELOAD;

  useEffect(() => {
    if (isPageReload) {
      clearStorage();
    }
  }, [isPageReload]);


  // Connecting Backend
  function nagigateToOtp() {
    if (secureLocalStorage.getItem('email')) {
      axios
        .post(`${BACKEND_HOST}/recovery`, {
          OTP: secureLocalStorage.getItem('SecureCode'),
          recipient_email: secureLocalStorage.getItem('email'),
        })
        .then((res) => {
          console.log(res.data.message);
          toast.success(`${res.data.message}`, {
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
        })
        .catch(data => {
          console.log(data.message);
          data.message
        });
      return;
    }
    return;
  }

  // Handle the OTP input change
  const handleChange = (e, index, setOTPinput, OTPinput) => {
    const value = e.target.value.trim();
    const newOTPinput = [...OTPinput];
    newOTPinput[index] = value;

    if (value.length === 1) {
      if (index < newOTPinput.length - 1) {
        newOTPinput[index + 1] = "";
      }
      setOTPinput(newOTPinput);
      if (index < 3) {
        e.target.nextElementSibling.focus();
      }
    }

    if (index === 3) {
      const enteredOTP = parseInt(newOTPinput.join(""), 10);
      const storedOTP = parseInt(secureLocalStorage.getItem("SecureCode"));
      if (enteredOTP === storedOTP) {
        // Redirect to the password reset page if the OTP matches
        secureLocalStorage.clear();
        secureLocalStorage.setItem('reset', 1);
        navigate("/password-reset");
      } else {
        toast.error("OTP did not match", {
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
        secureLocalStorage.setItem('reset', 0);
      }
    }
  };

  // Handle the "Resend OTP" button click
  const handleResendOTP = () => {
    setOTPinput(["", "", "", ""]);
    generateOTP();
    nagigateToOtp();
    setTimer(60);
    const timerInterval = setTimeout(() => {
      setTimer((prevCount) => prevCount - 1);
    }, 1000);
    setTimerInterval(timerInterval);
  };

  // Clear the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (timerInterval) {
        clearTimeout(timerInterval);
      }
    };
  }, [timerInterval]);

  // Start the timer when the component mounts
  useEffect(() => {
    if (timerCount > 0) {
      const timerInterval = setTimeout(() => {
        setTimer((prevCount) => prevCount - 1);
      }, 1000);
      setTimerInterval(timerInterval);
    }
  }, [timerCount]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formControl}>
        <div className={styles.OTPField}>
          {[0, 1, 2, 3].map((index) => (
            <OTPInput
              value={OTPinput[index]}
              handleChange={(e) =>
                handleChange(e, index, setOTPinput, OTPinput)
              }
              className={`form-element ${index === 3 ? "rounded-r-xl" : ""} ${styles.formInput}`}
              maxLength="1"
              isLastElement={index === 3}
              key={index}
            />
          ))}
        </div>


        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
          <p>
            Didn't receive code?{" "}
            {timerCount > 0 ? (
              <>
                Resending in {timerCount}s
              </>
            ) : (
              <a
                onClick={handleResendOTP}
                className="flex flex-row items-center cursor-pointer"
              >
                Resend OTP
              </a>
            )}
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EmailVerification;