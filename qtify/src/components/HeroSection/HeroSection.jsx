import React from "react";
import HeroImg from "../../assets/hero_headphones.png";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <img src={HeroImg} alt="HeroImg" className={styles.heroImage} />
    </div>
  );
}
