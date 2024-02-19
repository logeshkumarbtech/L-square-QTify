import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
// import { StyledEngineProvider } from "@mui/material/StyledEngineProvider";

function App() {
  return (
    // <StyledEngineProvider injectFirst>
    <>
      <Navbar />
      <HeroSection />
    </>

    // </StyledEngineProvider>
  );
}

export default App;
