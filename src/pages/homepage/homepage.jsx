// src/pages/Home/Home.jsx
import React from 'react'
import Navbar from '../../components/navbar/navbar'
import styles from './homepage.module.css'
import Hello from '../../components/hello/hello'
import Aboutme from '../../components/aboutme/aboutme'
import Workex from '../../components/workex/workex'
import Decoration from '../../components/decoration/decoration'
import Skills from '../../components/skills/skills'
import Contact from '../../components/contact/contact'

function Homepage() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Decoration className={styles.buble1} />
      <Hello />
      <Decoration className={styles.buble2} />
      <Aboutme />
      <Decoration className={styles.buble3} />
      <Workex />
      <Skills />
      <Contact />
    </div>
  )
}

export default Homepage