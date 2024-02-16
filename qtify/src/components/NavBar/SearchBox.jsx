import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import styles from "./SearchBox.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function SearchBox() {
  return (
    // <div className={styles.parent}>
    //   <TextField      
    //     className={styles.search}
    //     InputProps={{
    //       endAdornment: (
    //         <InputAdornment position="end">
    //           <SearchIcon />
    //         </InputAdornment>
    //       ),
    //     }}
    //     placeholder="Search for song of your own choice"
    //     name="search"
    //   />
    // </div>
    <div className={styles.parent}>
      <input
        type="text"
        className={styles.search}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchButton}>
        <SearchIcon />
      </button>
    </div>
  );
}
