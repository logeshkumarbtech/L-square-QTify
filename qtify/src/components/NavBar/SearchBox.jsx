import React from "react";
import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function SearchBox() {
  return (    
    <form className={styles.parent}>
      <input        
        className={styles.search}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
