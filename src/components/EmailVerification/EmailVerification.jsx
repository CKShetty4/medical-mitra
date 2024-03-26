import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "../App";
import styles from "./EmailVerification.module.css";
import OTPInput from "./OTPInput";

const handleChange = (e, index, setOTPinput, OTPinput, func) => {
  const value = e.target.value;
  const newOTPinput = [...OTPinput];
  newOTPinput[index] = value;

  if (value.length === 1) {
    if (index < newOTPinput.length - 1) {
      newOTPinput[index + 1] = "";
    }
    setOTPinput(newOTPinput);
  }

  if (parseInt(newOTPinput.join(""), 10) === otp) {
    func();
  }
};

const inputProps = {
  className:
    "form-element w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700",
  maxLength: "1",
  isLastElement: OTPinput[3] ? true : false,
};

export default function EmailVerification() {
  const {
    email,
    otp,
    setPage,
    sendRecoveryOTP,
    loading,
    recoveryOTPInterval,
    setRecoveryOTPInterval,
    resetSendOTPStatus,
  } = useContext(RecoveryContext);

  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState(["", "", "", ""]);

  React.useEffect(() => {
    if (loading) return;
    resetSendOTPStatus();
    setDisable(true);
    setTimer(60);
    // Clear previous interval if it exists
    if (recoveryOTPInterval) clearInterval(recoveryOTPInterval);
    const newInterval = setInterval(() => {
      setTimer((lastTimerCount) => {
        if (lastTimerCount <= 1) clearInterval(newInterval);
        return lastTimerCount - 1;
      });
    }, 1000);

    setRecoveryOTPInterval(newInterval);
    return () => clearInterval(newInterval);
  }, [loading, resetSendOTPStatus, setDisable, recoveryOTPInterval, setRecoveryOTPInterval]);

  const handleVerifyOTP = () => {
    if (parseInt(OTPinput.join(""), 10) === otp) {
      setPage("reset");
    } else {
      alert(
        "The code you have entered is not correct, try again or re-send the link"
      );
    }
  };

  const handleResendOTP = () => {
    sendRecoveryOTP(email);
    setDisable(false);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formControl}>
        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
          {[0, 1, 2, 3].map((index) => (
            <OTPInput
              value={OTPinput[index]}
              handleChange={(e) =>
                handleChange(e, index, setOTPinput, OTPinput, handleVerifyOTP)
              }
              {...inputProps}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={styles.formControl}>
        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
          <p>
            Didn't recieve code?{" "}
           <a
              onClick={() => handleResendOTP()}
              className="flex flex-row items-center cursor-pointer"
            >
              {loading ? (
                <span className="">
                  Resending in {timerCount}s
                </span>
              ) : (
                "Resend OTP"
              )}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}