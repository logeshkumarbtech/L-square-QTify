import React from "react";
import styles from "./Navbar.module.css";
import LogoImage from "../../assets/logo.png";

export default function Logo(){
    return <img src={LogoImage} alt="QTify Logo" width={65} />
}