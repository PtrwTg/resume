import React from 'react'
import styles from './skills.module.css'
import skillsimg from './skillsimg.svg'
import { BiLogoPython,BiLogoAws,BiLogoDocker,BiLogoJava,BiSolidFileHtml,BiLogoCss3,BiLogoJavascript,BiLogoGoLang,BiLogoReact,BiLogoVuejs,BiLogoTailwindCss,BiLogoFlutter } from "react-icons/bi";
import { SiDart,SiFastapi,SiGrafana,SiPrometheus } from "react-icons/si";
import { FaNode,FaGithub,FaLinux } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

function skills() {
  return (
    <div className={styles.container}>
        <div className={styles.Language}>
        <div className={styles.divp}>
            <p className={styles.pskill}>Programing Language Skills</p>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.Languageicon}>
        <BiLogoPython /><BiLogoJava /><BiSolidFileHtml /><BiLogoCss3 /><BiLogoJavascript /><BiLogoGoLang /><SiDart />
        </div>
        </div>
        <div className={styles.Language}>
        <div className={styles.divp}>
            <p className={styles.pskill}>Framework skills</p>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.Languageicon}>
        <BiLogoReact /><FaNode /><BiLogoVuejs /><BiLogoTailwindCss /><SiFastapi /><DiDjango /><BiLogoFlutter />
        </div>
        </div>
        <div className={styles.Language}>
        <div className={styles.divp}>
            <p className={styles.pskill}>Tools Skills</p>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.Languageicon}>
        <TbBrandVscode /><FaGithub /><BiLogoDocker /><BiLogoAws /><SiGrafana /><SiPrometheus /><FaLinux />
        </div>
        </div>
    </div>
  )
}

export default skills