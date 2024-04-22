import React, { useState, useRef } from 'react';
import styles from './aboutme.module.css';
import profile from './114908.jpg';
import resume from './resumeimg.png';
import { IoArrowDown, IoCheckmarkOutline } from "react-icons/io5";
import resumepng from './resume.pdf';

function Aboutme() {
  const [isPressed, setIsPressed] = useState(false);
  const resumeLinkRef = useRef(null);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    resumeLinkRef.current.click();
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.pabout}>About Me</p>
        <div className={styles.underline}></div>
        <div className={styles.profile}>
          <img className={styles.profileimg} src={profile} alt="profile" />
          <div className={styles.pprofile}>
            <p>Hello, my name is Pattarawit Duangmak. I am a fourth-year student majoring in Computer Science. During my studies, I have gained experience in various programming projects while balancing my education and work commitments. Most of the projects I have worked on came through referrals from acquaintances, often involving the development of websites or mobile applications. This has provided me with a solid foundation in building websites, including both front-end design implementation and back-end CRUD operations.</p>
            <p>Furthermore, I have experience working on a project related to the development of a Machine Learning system capable of classifying music genres. I have also studied the fundamentals of DevOps, giving me a good understanding of the workflow process.</p>
            <p>I am confident that with my foundational skills and strong determination, I can continue to learn and enhance my abilities. I am ready to apply my knowledge and skills to contribute and create value for your organization.</p>
            <div>
              <p className={styles.presume}>My Resume</p>
              <div className={styles.divresume}>
                <div className={styles.Imgresume}>
                  <img className={styles.resume} src={resume} alt="resume" />
                  <div className={styles.divbutton}>
                    <button
                      className={styles.circle_button}
                      onMouseDown={handleMouseDown}
                      onMouseUp={handleMouseUp}
                    >
                      {isPressed ? <IoCheckmarkOutline size={40} /> : <IoArrowDown size={40} />}
                    </button>
                    <a
                      href={resumepng}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'none' }}
                      ref={resumeLinkRef}
                    >
                      Open Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;