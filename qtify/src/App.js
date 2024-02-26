import styles from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./components/Section/Section";
// import { StyledEngineProvider } from "@mui/material/StyledEngineProvider";
import FilterSection from "./components/FilterSection/FilterSection";
import FaqSection from "./components/FAQSection/FaqSection";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataVal, setFilteredDataVal] = useState([]);
  const [value, setValue] = useState(0);  

  const fetchTopAlbum = async () => {
    try {
      let result = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbumData(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const fetchNewAlbum = async () => {
    try {
      let result = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbumData(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const fetchNewSongs = async () => {
    try {
      let result = await axios.get("https://qtify-backend-labs.crio.do/songs");
      setSongsData(result.data);
      setFilteredDataVal(result.data);      
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  useEffect(() => {
    fetchTopAlbum();
    fetchNewAlbum();
    fetchNewSongs();
  }, []);

  const filteredData = (val) => {
    setValue(val);   
    generateFilteredSongs(val);
  };

  

  const generateFilteredSongs = (value) => {
    let data = songsData;    
    let key;
    if (value === 0) {
      setFilteredDataVal(data);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const newData = data.filter((item) => {       
      return item.genre.key === key;
    });
    console.log(newData);
    setFilteredDataVal(newData);
  };

  return (
    // <StyledEngineProvider injectFirst>
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.wrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <hr className={styles.line} />
        <Section type="album" title="New Albums" data={newAlbumData} />
        <hr className={styles.line} />
        <FilterSection
          type="songs"
          title="Songs"          
          filteredData={filteredData}
          filteredDataValues={filteredDataVal}
          value={value}          
        />
        <hr className={styles.line} />
        <FaqSection/>
      </div>
    </>
    // </StyledEngineProvider>
  );
}

export default App;
