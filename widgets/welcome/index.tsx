"use client";

import React from "react";
import styles from "./welcome.module.scss";
import CustomButton from "@/shared/UI/customButton";
import { rotateOpenAuth } from "@/store/features/authPopup-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/store/store";

const Welcome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useAppSelector((state) => state.authPopupReducer.value.isOpen);

  const openPopup = () => {
    dispatch(rotateOpenAuth(!isOpen));
  };

  return (
    <div className={styles.welcome}>
      <div className={styles.mainInfo}>
        <div className={styles.rightInfo}>
          <h1 className={styles.title}>С нами английский дается легко!</h1>
          <section className={styles.buttons}>
            <CustomButton
              link={"/training"}
              size={"medium"}
              width
              type={"green"}
            >
              Начать
            </CustomButton>
            <CustomButton callback={openPopup} size={"medium"} width>
              Уже есть аккаунт
            </CustomButton>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
