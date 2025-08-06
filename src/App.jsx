// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ReviewsSection from "./components/ReviewsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [pageReady, setPageReady] = useState(false); // true when resources & critical data loaded
  const [sectionsReady, setSectionsReady] = useState({
    hero: false,
    services: false,
    reviews: false,
    faq: false,
    contact: false,
    about: false,
  });

  useEffect(() => {
    // Example: wait for window load (images/fonts) OR your data to be ready
    // Replace with your actual data loading checks if you fetch.
    const onLoad = () => {
      // small delay to let animations finish
      setTimeout(() => {
        setPageReady(true);
      }, 700);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      // fallback timeout if load event too slow (optional)
      const fallback = setTimeout(() => onLoad(), 2500);
      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  // Progressive reveal for sections (simulate or set when data arrives)
  useEffect(() => {
    if (pageReady) {
      // stagger revealing sections for nice UX
      const timers = [
        setTimeout(() => setSectionsReady(prev => ({ ...prev, hero: true })), 300),
        setTimeout(() => setSectionsReady(prev => ({ ...prev, services: true })), 600),
        setTimeout(() => setSectionsReady(prev => ({ ...prev, reviews: true })), 900),
        setTimeout(() => setSectionsReady(prev => ({ ...prev, faq: true })), 1100),
        setTimeout(() => setSectionsReady(prev => ({ ...prev, contact: true })), 1300),
        setTimeout(() => setSectionsReady(prev => ({ ...prev, about: true })), 1500),
      ];
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [pageReady]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "reviews", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Loader visible={!pageReady} />

      {/* When loader is visible, pointer-events are blocked by Loader */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="max-w-[96%] m-auto transition-all duration-500">
        {/* pass ready flag to each section so it can show placeholder / real content */}
        <HeroSection ready={sectionsReady.hero} />
        <ServicesSection ready={sectionsReady.services} />
        <ReviewsSection ready={sectionsReady.reviews} />
        <FAQSection ready={sectionsReady.faq} />
        <ContactSection ready={sectionsReady.contact} />
        <AboutSection ready={sectionsReady.about} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
