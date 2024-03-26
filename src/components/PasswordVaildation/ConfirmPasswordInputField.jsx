import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
import styles from "./ConfirmPasswordInputField.module.css";

library.add(faEye, faEyeSlash);

const ConfirmPasswordInputField = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    }
  }));

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  return (
    <>
      <div className={styles.form_control}>
        <label htmlFor="ConirmPass">Confirm Password</label>
        <div className={styles.input_container}>
          <input
            type={confirmPasswordShown ? "text" : "password"}
            ref={inputRef}
            onChange={props.handlePasswordChange}
            value={props.confirmPasswordValue}
            onKeyUp={props.handleValidation}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <div className={styles.Icon} onClick={toggleConfirmPassword}>
            <FontAwesomeIcon icon={confirmPasswordShown ? "eye-slash" : "eye"} />
          </div>
        </div>
        <p className="text-danger">{props.confirmPasswordError}</p>
      </div>
    </>
  );
});

export default ConfirmPasswordInputField;