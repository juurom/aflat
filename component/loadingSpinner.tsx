import React from 'react'
import styles from '@/styles/LoadingSpinner.module.css'

function loadingSpinner() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.circle}></div>
    </div>
  )
}

export default loadingSpinner