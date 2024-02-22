import styles from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "./components/Section/Section";
// import { StyledEngineProvider } from "@mui/material/StyledEngineProvider";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

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

  useEffect(() => {
    fetchTopAlbum();
    fetchNewAlbum();
  }, []);

  return (
    // <StyledEngineProvider injectFirst>
    <>
      <Navbar />
      <HeroSection />
      <div className={styles.wrapper}>
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <Section type="album" title="New Albums" data={newAlbumData} />
      </div>
    </>
    // </StyledEngineProvider>
  );
}

export default App;
