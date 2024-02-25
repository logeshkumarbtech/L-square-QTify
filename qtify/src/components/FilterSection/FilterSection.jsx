import { Box, CircularProgress } from "@mui/material";
import styles from "./FilterSection.module.css";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import SongsTab from "../SongsTab/SongsTab";

const FilterSection = ({
  type,
  title,  
  value,
  filteredData,
  filteredDataValues,
  // handleChange,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <SongsTab
          // handleChange={handleChange}
          value={value}
          filteredData={filteredData}
        />
      </div>
      {filteredDataValues.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          <Carousel
            data={filteredDataValues}
            renderCardComponent={(data) => <Card type={type} data={data} />}
          />
        </div>
      )}
    </div>
  );
};

export default FilterSection;
