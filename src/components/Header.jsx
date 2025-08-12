import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import logo from "../assets/logo/icone.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "الرئيسية" },
    { id: "services", label: "الخدمات" },
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

  // Animation variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <header className="bg-white border-b fixed top-0 w-full z-50">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-5">
          {/* Animated Logo */}
          <motion.div
            className="flex items-center gap-2 bg-black p-1 rounded-full"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img src={logo} alt="" className="h-[60px] rounded-full" />
            <span className="text-white font-bold text-xl pl-2">
              النجوم للمقاولات
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-5 items-center">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-900 text-[20px] lg:text-[25px] ${
                  activeSection === item.id
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              onClick={() => scrollToSection("contact")}
              className="lg:flex hidden items-center gap-4 bg-black text-white px-4 py-3 text-[22px] rounded-full hover:bg-gray-800 transition-colors"
            >
              تواصل معنا
              <span className="bg-white rounded-full text-black p-1">
                <ArrowUp className="rotate-45" />
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="md:block hidden rounded-full p-4 bg-gray-100 font-bold text-gray-900">
            AS
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeLeft}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right py-2 text-lg font-medium text-gray-700"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              custom={navItems.length}
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
              onClick={() => scrollToSection("contact")}
              className="w-auto flex items-center justify-center gap-3 bg-black text-white px-4 py-2 rounded-full mt-2"
            >
              <div className="rounded-full p-1 bg-white">
                <ArrowUp className="rotate-45 text-black" />
              </div>
              تواصل معنا
            </motion.button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
