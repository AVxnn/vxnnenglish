import React from "react";
import styles from "./cardBlock.module.scss";
import TitleBlock from "../titleBlock";

interface CardBlock {
  children: React.ReactNode;
  title: string;
}

const CardBlock: React.FC<CardBlock> = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <TitleBlock title={title} />
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default CardBlock;
