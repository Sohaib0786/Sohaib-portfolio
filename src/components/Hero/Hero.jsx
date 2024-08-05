import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import {useTypewriter,Cursor} from "react-simple-typewriter";

export const Hero = () => {

  const [text]=useTypewriter({
    words: ['Mohd.Sohaib'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40,
  });


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} >Hello, I'm 
        
        <div>
        
       
        <span>
          {text}
        </span>

          <span>
            <Cursor cursorStyle='<'/>
          </span>
          </div>
          
        
        </h1>
        <p className={styles.description}>
          I'm a Software and web developer with using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/sohaibimage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg} 
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  );
};