import React, { useState } from "react";
import CustomInput from "@/shared/UI/customInput";
import CustomButton from "@/shared/UI/customButton";
import Google from "@/public/icons/google";
import styles from "./registration.module.scss";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type ChangeState = {
    element: any;
    type: string;
  };

  const changeState = ({ element, type }: ChangeState) => {
    setEmail;
  };

  return (
    <>
      <h3 className={styles.title}>Регистрация</h3>
      <div className={styles.form}>
        <CustomInput
          width
          size={"medium"}
          typeInput={"text"}
          value={name}
          callback={setName}
          placeholder="Ваш Возраст"
        />
        <CustomInput
          width
          size={"medium"}
          typeInput={"text"}
          value={name}
          callback={setName}
          placeholder="Ваше Имя"
        />
        <CustomInput
          width
          size={"medium"}
          typeInput={"email"}
          value={email}
          callback={setEmail}
          placeholder="Email"
        />
        <CustomInput
          width
          size={"medium"}
          typeInput={"password"}
          value={password}
          callback={setPassword}
          placeholder="Пароль"
        />
        <CustomButton size={"small"} width type={"green"}>
          Войти
        </CustomButton>
      </div>
      <span className={styles.or}>
        <span>ИЛИ</span>
      </span>
      <CustomButton size={"small"} width type={"white"}>
        <Google /> <p>Google</p>
      </CustomButton>
    </>
  );
};

export default Registration;
