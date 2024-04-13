import React from 'react'
import styles from './app3.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import App3_1 from './app3_1.png'
import App3_2 from './app3_2.png'
import Contact from '../../../components/contact/contact'


function app1() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app3_1} src={App3_1} alt="" />
        <img className={styles.app3_2} src={App3_2} alt="" />
        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default app1