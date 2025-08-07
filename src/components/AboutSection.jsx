// src/components/AboutSection.jsx
import React, { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about/about.jpg";
import S1 from "../assets/services/s (1).jpg";
import S2 from "../assets/services/s (2).jpg";
import S3 from "../assets/services/s (3).jpg";
import S4 from "../assets/services/s (4).jpg";
import S5 from "../assets/services/s (5).jpg";

export default function AboutSection() {
  // content items (Arabic example)
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

  // ensure there is a ref for each item
  itemRefs.current = items.map(
    (_, i) => itemRefs.current[i] ?? React.createRef()
  );

  // function to move indicator to active item (compute position)
  const moveIndicator = (index) => {
    const container = containerRef.current;
    const el = itemRefs.current[index]?.current;
    const indicator = indicatorRef.current;
    if (!container || !el || !indicator) return;

    // compute top offset relative to container
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const top = elRect.top - containerRect.top + container.scrollTop;

    // set styles for smooth move
    indicator.style.transform = `translateY(${top}px)`;
    indicator.style.height = `${elRect.height}px`;
  };

  // set up auto cycle every 5000ms
  useEffect(() => {
    // initial move after mount
    moveIndicator(active);

    const startTimer = () => {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % items.length);
      }, 5000);
    };

    startTimer();

    // update on resize so indicator keeps correct position
    const onResize = () => moveIndicator(active);
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run only once on mount

  // whenever active changes, move indicator
  useEffect(() => {
    moveIndicator(active);
    // restart timer so it waits full 5000ms after manual change
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // click handler for items
  const handleClick = (index) => {
    setActive(index);
  };

  // images swaper
  const images = [aboutImg, S1, S2, S3, S4, S5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 500ms

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="my-10 container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row-reverse items-start gap-8">
        {/* Right: Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative">
            {/* indicator bar (dark span) */}
            <div
              ref={indicatorRef}
              className="absolute -right-4 md:-right-6 w-1.5 bg-gray-800 rounded transition-transform duration-700 ease-in-out"
              style={{
                transform: "translateY(0px)",
                top: 0,
                height: "0px",
              }}
              aria-hidden="true"
            />

            {/* list */}
            <div ref={containerRef} className="space-y-6 pr-0">
              {items.map((it, idx) => (
                <button
                  key={idx}
                  ref={itemRefs.current[idx]}
                  onClick={() => handleClick(idx)}
                  className={`group w-full text-right block p-4 rounded-lg transition-shadow duration-300 ${
                    active === idx
                      ? "bg-white border"
                      : "bg-white/60 hover:bg-gray-100"
                  }`}
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

                    {/* small dot indicator for each item (optional) */}
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
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Left: Content with indicator */}
        <div className="w-full md:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <img
              src={images[currentImageIndex]}
              alt="Slideshow"
              className="w-full h-full object-cover md:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
