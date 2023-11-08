import React from 'react'
import styles from "./titleBlock.module.scss"

interface TitleBlockProps {
  title: string;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ title }) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  )
}

export default TitleBlock