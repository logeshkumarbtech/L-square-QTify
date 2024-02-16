import React from "react";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Button  from "./Button";

export default function Navbar(){
    return(
        <nav className={styles.Navbar}>
            <Logo/>
            <SearchBox/>
            <Button/>
        </nav>
    );

}