import React from 'react'
import styles from "./itemTab.module.scss"
import Link from 'next/link'

const ItemTab = ({ title, link } : any) => {
  return (
    <Link className={styles.link} href={link}>
      {title}
    </Link>
  )
}

export default ItemTab