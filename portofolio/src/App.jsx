import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import CTA from "./components/Cta/CTA";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Project />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
