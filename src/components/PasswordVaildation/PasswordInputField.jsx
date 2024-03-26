import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useImperativeHandle, forwardRef, useRef } from "react";
import styles from "./PasswordInputField.module.css";

library.add(faEye, faEyeSlash);
const PasswordInputField = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [passwordShown, setPasswordShown] = useState(false);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
   console.log(inputRef.current.value);
    },
    showPassword() {
      setPasswordShown(!passwordShown);
    }
  }));

  return (
    <>
      <div className={styles.form_control}>
        <label htmlFor="Pass">Password</label>
        <div className={styles.input_container}>
          <input
            type={passwordShown ? "text" : "password"}
            ref={inputRef}
            onChange={props.handlePasswordChange}
            value={props.passwordValue}
            onKeyUp={props.handleValidation}
            name="password"
            placeholder="Password"
          />
          <div className={styles.Icon} onClick={() => setPasswordShown(!passwordShown)}>
            <FontAwesomeIcon icon={passwordShown ? "eye-slash" : "eye"} />
          </div>
        </div>
        <p className="text-danger">{props.passwordError}</p>
      </div>
    </>
  );
});

export default PasswordInputField;