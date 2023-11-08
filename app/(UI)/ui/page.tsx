"use client";

import React from "react";
import CardBlock from "../components/cardBlock";
import styles from "./page.module.scss";
import CustomButton from "@/shared/UI/customButton";
import LeftArrow from "@/public/icons/leftArrow";
import CustomInput from "@/shared/UI/customInput";

import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const PageUI = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Введите адрес электронной почты")
      .required("Требуется электронная почта"),
    password: yup
      .string()
      .min(6, "Длина пароля минимум 6 символов.")
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
          <CustomButton full typeButton="default" size="m">
            Проверить
          </CustomButton>
          <CustomButton full typeButton="secondary" size="m">
            Проверить
          </CustomButton>
          <CustomButton full typeButton="secondary" size="m">
            <LeftArrow />
            Назад
          </CustomButton>

          <h3>Small</h3>
          <CustomButton full typeButton="default" size="s">
            Проверить
          </CustomButton>
          <CustomButton full typeButton="secondary" size="s">
            Проверить
          </CustomButton>
          <CustomButton full typeButton="secondary" size="s">
            <LeftArrow />
            Назад
          </CustomButton>
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
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(item) => console.log(item, item.email)}
          >
            {({ errors, touched }) => (
              <Form style={{display: 'flex', flexDirection: "column", gap: '32px'}}>
                <Field name="email">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }: any) => (
                      <CustomInput
                        touched={touched.email}
                        errors={errors.email}
                        full
                        placeholder="text"
                        type="new-password"
                        id="email"
                        Name="email"
                        name="email"
                        typeInput="default"
                        sizeInput="m"
                        {...field}
                      />
                  )}
                </Field>
                <Field name="password">
                  {({
                    field, // { name, value, onChange, onBlur }
                    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                    meta,
                  }: any) => (
                      <CustomInput
                        touched={touched.password}
                        errors={errors.password}
                        full
                        placeholder="text"
                        type="new-password"
                        id="password"
                        Name="password"
                        name="password"
                        typeInput="default"
                        sizeInput="m"
                        {...field}
                      />
                  )}
                </Field>
                <CustomButton type="submit" full typeButton="default" size="m">
                  Отправить
                </CustomButton>
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
