import React from 'react'
import styles from './web3.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import Web3_1 from './web3_1.png'
import Web3_2 from './web3_2.png'
import Contact from '../../../components/contact/contact'


function web2() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app1_1} src={Web3_1} alt="" />
        <img className={styles.app1_2} src={Web3_2} alt="" />
        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default web2