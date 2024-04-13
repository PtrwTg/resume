import React from 'react'
import styles from './web2.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import Web2_1 from './web2_1.png'
import Web2_2 from './web2_2.png'
import Contact from '../../../components/contact/contact'


function web2() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app1_1} src={Web2_1} alt="" />
        <img className={styles.app1_2} src={Web2_2} alt="" />
        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default web2