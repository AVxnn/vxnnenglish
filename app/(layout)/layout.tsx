import HeaderPractice from "@/widgets/headerPractice";
import LeftMenu from "@/widgets/leftMenu";
import type { Metadata } from "next";
import styles from "./layout.module.scss"

export const metadata: Metadata = {
  title: "English App Training",
  description: "Сайт для изучения английского бесплатно",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <LeftMenu />
      <div className={styles.rightCont}>
        <HeaderPractice />
        <div className={styles.containerInfo}>
          <div className={styles.info}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
