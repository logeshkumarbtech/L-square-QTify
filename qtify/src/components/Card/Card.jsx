import React from "react";
import Chip from "@mui/material/Chip";
import Tooltip from "@mui/material/Tooltip";

import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const  Card= ({ type, data })=> {
  console.log("card");
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          // <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            // <Link to={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    className={styles.image}
                    src={image}
                    alt="album"
                  />
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
          //   </Link>
          // </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title, slug, songs } = data;
        return (
          <Tooltip title={`songs`} placement="top" arrow>
            <Link to={`/album/${slug}`}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    className={styles.image}
                    src="https://images.pexels.com/photos/4571219/pexels-photo-4571219.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                    alt="album"
                  />
                  <div className={styles.banner}>
                    <Chip
                      label={`100 Likes`}
                      className={styles.chip}
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <p>New Bollywood</p>
                </div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      default: {
        return <></>;
      }
    }
  }
  return getCard(type);
}

export default Card;