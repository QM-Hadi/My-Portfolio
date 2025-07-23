// App.jsx
import { Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import Footer from "./components/Footer/Footer";
import ContactPage from "./Pages/Contact";
import WebsitesDesigns from "./components/WebsitesDesigns/WebsitesDesigns";
 // replace with your actual contact page

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <SkillsSection />
            <WebsitesDesigns/> {/* Ensure this component is imported correctly */}
            <Footer />
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
