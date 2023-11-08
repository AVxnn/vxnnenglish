import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/widgets/header";
import Welcome from "@/widgets/welcome";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.layout}>
          <Welcome />
        </div>
      </div>
    </>
  );
}
