// src/components/AboutSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// import aboutImg from "../assets/about/about.jpg";
import S1 from "../assets/services/s (1).jpg";
import S2 from "../assets/services/s (2).jpg";
import S3 from "../assets/services/s (3).jpg";
import S4 from "../assets/services/s (4).jpg";
import S5 from "../assets/services/s (5).jpg";

export default function AboutSection() {
  const items = [
    {
      title: "من نحن",
      desc: "شركة النجوم للخدمات هي شركة مقاولات سعودية متخصصة في تقديم حلول متكاملة للمشاريع الإنشائية والخدمية، وفق أعلى معايير الجودة والسلامة. تقدم الشركة باقة من الخدمات.",
    },
    {
      title: "الخدمات تشمل",
      desc: "تزويد المياه النقية للمواقع، شفط الصرف الصحي، مكافحة الحشرات، تزويد وصيانة المبانى، وخدمة تأجير الكمبروسور (ضواغط الهواء).",
    },
    {
      title: "هدفنا",
      desc: "تقديم خدمات موثوقة تسهم في تعزيز البنية التحتية المحلية وتحقيق تطلعات رؤية المملكة.",
    },
    {
      title: "الرؤية",
      desc: "الالتزام بدعم التنمية المستدامة في المملكة وتحقيق تطلعات رؤية السعودية 2030.",
    },
  ];

  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);
  const timerRef = useRef(null);

  itemRefs.current = items.map(
    (_, i) => itemRefs.current[i] ?? React.createRef()
  );

  const moveIndicator = (index) => {
    const container = containerRef.current;
    const el = itemRefs.current[index]?.current;
    const indicator = indicatorRef.current;
    if (!container || !el || !indicator) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const top = elRect.top - containerRect.top + container.scrollTop;

    indicator.style.transform = `translateY(${top}px)`;
    indicator.style.height = `${elRect.height}px`;
  };

  useEffect(() => {
    moveIndicator(active);
    const startTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, 5000);
    };
    startTimer();
    window.addEventListener("resize", () => moveIndicator(active));

    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener("resize", () => moveIndicator(active));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    moveIndicator(active);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleClick = (index) => {
    setActive(index);
  };

  const images = [S1, S2, S3, S4, S5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section id="about" className="my-10 container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row-reverse items-start gap-8">
        {/* Right: Text + Indicator */}
        <motion.div
          className="w-full md:w-1/2 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // animate every time in view
          variants={fadeUp}
          custom={0}
        >
          <div className="relative">
            <div
              ref={indicatorRef}
              className="absolute -right-4 md:-right-6 w-1.5 bg-gray-800 rounded transition-transform duration-700 ease-in-out"
              style={{ transform: "translateY(0px)", top: 0, height: "0px" }}
              aria-hidden="true"
            />

            <div ref={containerRef} className="space-y-6 pr-0">
              {items.map((it, idx) => (
                <motion.button
                  key={idx}
                  ref={itemRefs.current[idx]}
                  onClick={() => handleClick(idx)}
                  className={`group w-full text-right block p-4 rounded-lg transition-shadow duration-300 ${
                    active === idx
                      ? "bg-white border"
                      : "bg-white/60 hover:bg-gray-100"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeUp}
                  custom={idx + 1}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h4
                        className={`font-medium ${
                          active === idx ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {it.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {it.desc}
                      </p>
                    </div>
                    <div
                      className={`w-8 h-8 p-3 flex items-center justify-center rounded-full border ${
                        active === idx
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          custom={1}
        >
          <div className="rounded-lg overflow-hidden">
            <motion.img
              key={currentImageIndex} // re-triggers fade when image changes
              src={images[currentImageIndex]}
              alt="Slideshow"
              className="w-full h-full object-cover md:h-[450px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
