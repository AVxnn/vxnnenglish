import React from "react";
import styles from "./tabs.module.scss";
import CustomButton from "@/shared/UI/customButton";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      {["A1", "A2", "B1", "B2", "C1", "C2"].map((item, index) => {
        return (
          <CustomButton key={index} size={"small"} link={"/"} type={"green"}>
            {item}
          </CustomButton>
        );
      })}
    </div>
  );
};

export default Tabs;
