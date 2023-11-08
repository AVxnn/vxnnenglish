import React, { useState } from "react";
import CustomInput from "@/shared/UI/customInput";
import CustomButton from "@/shared/UI/customButton";
import styles from "./login.module.scss";
import Google from "@/public/icons/google";

const Login = () => {
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
      <h3 className={styles.title}>Вход</h3>
      <div className={styles.form}>
        <CustomInput
          width
          size={"medium"}
          typeInput={"email"}
          value={email}
          callback={setEmail}
          placeholder="Email или имя пользователя"
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

export default Login;
