import React from "react";
import styles from "./ruleCard.module.scss";
import CustomButton from "@/shared/UI/customButton";

const RuleCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h4 className={styles.title}>Present Simple</h4>
        <p className={styles.description}>Простое настоящее</p>
      </div>
      <div className={styles.buttons}>
        <CustomButton link={"/"} size={"small"} width type={"green"}>
          Учить
        </CustomButton>
        <CustomButton link={"/"} size={"small"} width type={"green"}>
          Практиковать
        </CustomButton>
      </div>
    </div>
  );
};

export default RuleCard;
