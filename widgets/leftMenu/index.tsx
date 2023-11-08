"use client"
import React from "react";
import styles from "./leftMenu.module.scss";
import Logotype from "@/public/icons/logotype";
import CustomMenuItem from "@/shared/customMenuItem";
import { data, dataLow } from "./data";

const LeftMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.logo}>
        <Logotype />
      </div>
      <div className={styles.container}>
        <div className={styles.topButtons}>
          {data.map((item, index: number) => {
            return (
              <CustomMenuItem
                key={index}
                link={"/training"}
                width
                image={item.icon}
                type={"white"}
              >
                Главная
              </CustomMenuItem>
            );
          })}
        </div>
        <div className={styles.bottomButtons}>
          {dataLow.map((item, index: number) => {
            return (
              <CustomMenuItem
                key={index}
                link={"/training"}
                width
                image={item.icon}
                type={"white"}
              >
                Главная
              </CustomMenuItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
