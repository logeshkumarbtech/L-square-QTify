import react, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";

const Section = ({ type, title, data }) => {
  const [carouselToggle, setCarouselToggle] = useState(false);
  const handleToggle = (e) => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h4>{title}</h4>
        <h5 className={styles.toggle} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h5>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((data) => (
                <Card type={type} data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
