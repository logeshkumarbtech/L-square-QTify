import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Card.module.css";
// import { Link } from "react-router-dom";

const Card = ({ type, data }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            {/* // <Link to={`/album/${slug}`}> */}
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img className={styles.image} src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.text}>
                <p>{title}</p>
              </div>
            </div>
            {/* //   </Link> */}
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title} = data;
        return (          
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  className={styles.image}
                  src={image}
                  alt="album"
                  loading="lazy"
                />
                <div className={styles.banner}>
                  <Chip
                    label={`${likes} Likes`}
                    className={styles.chip}
                    size="small"
                  />
                </div>
              </div>
              <div className={styles.text}>
                <p>{title}</p>
              </div>
            </div>         
        );
      }
      default: {
        return <></>;
      }
    }
  };
  return getCard(type);
};

export default Card;
