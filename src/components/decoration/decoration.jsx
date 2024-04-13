import React from 'react'
import styles from './decoration.module.css'

function decoration({ className }) {
  return (
    <div className={`${styles.container} ${className}`}>
    <div className={styles.bubble}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={styles.bubble}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={styles.bubble}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={styles.bubble}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className={styles.bubble}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
 </div>
  )
}

export default decoration