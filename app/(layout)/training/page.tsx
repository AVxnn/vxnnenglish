import React from 'react'
import styles from "./training.module.scss"
import Tabs from '@/widgets/tabs'
import RuleCard from '@/widgets/ruleCard'

const Training = () => {
  return (
    <div className={styles.training}>
      <div className={styles.left}>
        <Tabs />
        <div className={styles.list}>
          {
            ['2', '3', '5'].map((item, index) => {
              return (
                <RuleCard key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Training