"use client";
import React, { JSXElementConstructor } from "react";
import styles from "./customMenuItem.module.scss";
import Link from "next/link";
import Image from "next/image";

interface CustomButton {
  link?: string;
  type?: "green" | "blue" | "red" | "white";
  width?: boolean;
  image: any;
  callback?: Function;
  children: React.ReactNode;
}

const CustomMenuItem = ({
  link = "",
  type = "white",
  width = false,
  image,
  callback = () => {},
  children,
}: CustomButton) => {
  if (link) {
    return (
      <Link href={link} className={styles.link}>
        <button onClick={() => callback()} className={`${styles.customButton}`}>
          {image}
          <Image
            priority
            height={32}
            width={32}
            src="/public/icons/Main.svg"
            alt={""}
          />
          <div className={styles.container}>{children}</div>
        </button>
      </Link>
    );
  }

  return (
    <button onClick={() => callback()} className={`${styles.customButton}`}>
      <div className={styles.container}>{children}</div>
    </button>
  );
};

export default CustomMenuItem;
