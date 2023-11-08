"use client";
import React from "react";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomButton from "@/shared/UI/customButton";
import Logotype from "@/public/icons/logotype";

const Header = () => {
  const pathname = usePathname() as string;

  return (
    <div className={styles.header}>
      <section className={styles.leftContainer}>
        <Link href={"/"}>
          <Logotype />
        </Link>
      </section>
      <section className={styles.rightContainer}>
        <CustomButton>Войти</CustomButton>
      </section>
    </div>
  );
};

export default Header;
