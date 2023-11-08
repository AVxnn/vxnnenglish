'use client';

import React from "react";
import CardBlock from "../components/cardBlock";
import styles from "./page.module.scss";
import CustomButton from "@/shared/UI/customButton";
import LeftArrow from "@/public/icons/leftArrow";
import CustomInput from "@/shared/UI/customInput";

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const PageUI = () => {

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Введите действительный адрес электронной почты")
      .required("Требуется электронная почта")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        'Email должен быть в правильном формате'
      ),
    password: yup
      .string()
      .min(8, "Длина пароля должна быть минимум 8 символов.")
      .required("Необходим пароль"),
  });

  return (
    <>
      <CardBlock title={"Buttons"}>
        <div className={styles.grid}>
          <div></div>
          <h3>Main</h3>
          <h3>Second</h3>
          <h3>Icon</h3>
          <h3>Medium</h3>
          <CustomButton full typeButton="default" size="m">Проверить</CustomButton>
          <CustomButton full typeButton="secondary" size="m">Проверить</CustomButton>
          <CustomButton full typeButton="secondary" size="m"><LeftArrow />Назад</CustomButton>
          
          <h3>Small</h3>
          <CustomButton full typeButton="default" size="s">Проверить</CustomButton>
          <CustomButton full typeButton="secondary" size="s">Проверить</CustomButton>
          <CustomButton full typeButton="secondary" size="s"><LeftArrow />Назад</CustomButton>
        </div>
      </CardBlock>
      <CardBlock title={"Inputs"}>
        <div className={styles.gridInputs}>
          <div></div>
          <h3>Input</h3>
          <h3>Select</h3>
          <h3>Default</h3>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={() => console.log('w')}
          >
            {({ errors, touched }) => (
              <Form>
                <div>
                  <label htmlFor="email">Email:</label>
                  <Field type="email" id="email" name="email" />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <CustomInput errors={errors} placeholder="text" type='text' typeInput="default" sizeInput="m" />
                <div>
                  <label htmlFor="password">Пароль:</label>
                  <Field type="password" id="password" name="password" />
                  {errors.password && <div className="error">{errors.password}</div>}
                </div>

                <button type="submit">Отправить</button>
              </Form>
            )}
          </Formik>
        </div>
      </CardBlock>
      <input type="text" />
    </>
  );
};

export default PageUI;
