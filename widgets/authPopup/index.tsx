import React, { useState } from "react";
import styles from "./authPopup.module.scss";
import Close from "@/public/icons/close";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { rotateOpenAuth } from "@/store/features/authPopup-slice";
import CustomButton from "@/shared/UI/customButton";
import Registration from "../registration";
import Login from "../login";

const AuthPopup = () => {
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.popup}>
      <div className={styles.header}>
        <div
          onClick={() => dispatch(rotateOpenAuth(false))}
          className={styles.close}
        >
          <Close />
        </div>
        {status ? (
          <CustomButton callback={() => setStatus(false)}>Войти</CustomButton>
        ) : (
          <CustomButton callback={() => setStatus(true)}>
            Регистрация
          </CustomButton>
        )}
      </div>
      <div className={styles.mainContainer}>
        {status ? <Registration /> : <Login />}
      </div>
    </div>
  );
};

export default AuthPopup;
