import React from 'react'
import styles from './app1.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import App1_1 from './app1_1.png'
import App1_2 from './app1_2.png'
import Contact from '../../../components/contact/contact'


function app1() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app1_1} src={App1_1} alt="" />
        <img className={styles.app1_2} src={App1_2} alt="" />
        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default app1