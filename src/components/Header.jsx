import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react"; // Added ArrowUp icon
import logo from "../assets/header/logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
    { id: "reviews", label: "آراء العملاء" },
    { id: "about", label: "من نحن" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const [activeSection, setActiveSection] = useState("home");

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
    <header className="bg-white border-b fixed top-0 w-full z-50">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <img src={logo} alt="" width={55.85} height={55.85} />
            <span className="text-gray-800 text-[25px] ">النجوم</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-900 text-[20px] lg:text-[25px] ${
                  activeSection === item.id
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* New Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="lg:flex hidden items-center gap-4 bg-black text-white px-4 py-3 text-[22px]  rounded-full hover:bg-gray-800 transition-colors"
            >
              تواصل معنا
              <span className="bg-white rounded-full text-black p-1">
                <ArrowUp className="rotate-45" />
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="md:block hidden  rounded-full p-4 bg-gray-100 font-bold text-blue-600">
            AS
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right py-2 text-lg font-medium text-gray-700 hover:text-orange-500"
              >
                {item.label}
              </button>
            ))}
            {/* Mobile Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-end gap-2 w-full bg-black text-white px-4 py-2 rounded-lg mt-2"
            >
              تواصل معنا
              <ArrowUp className="rotate-45" />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
