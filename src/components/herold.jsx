import { Phone, MessageCircleIcon } from "lucide-react";
import banner from "../assets/hero/banner.jpg";
import {
  RainbowIcon,
  BinocularsIcon,
  InspectIcon,
  BuildingIcon,
  WindIcon,
} from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  const services = [
    {
      id: 1,
      name: "توريد مياه",
      icon: RainbowIcon,
      offset: "mr-0 md:mr-[-70px]",
    },
    {
      id: 2,
      name: "شفط الصرف الصحي",
      icon: BinocularsIcon,
      offset: "mr-0 md:mr-[-20px]",
    },
    {
      id: 3,
      name: "مكافحة الحشرات",
      icon: InspectIcon,
      offset: "",
    },
    {
      id: 4,
      name: "تنظيف وصيانة المباني",
      icon: BuildingIcon,
      offset: "mr-0 md:mr-[-20px]",
    },
    {
      id: 5,
      name: "كمبروسير تنظيف البيارات",
      icon: WindIcon,
      offset: "mr-0 md:mr-[-70px]",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Pulse animation for buttons
  const pulseAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  // Overlay animation
  const overlayAnimation = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: [0, 0.5, 0],
      scale: [1, 1.3, 1.5],
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 0.5
      }
    }
  };

  return (
    <section id="home" className="mt-[150px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Title Animation */}
          <motion.h1
            className="text-xl md:text-3xl font-bold text-gray-800 mb-6 max-w-4xl m-auto"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            شركة <span className="text-black">النجوم</span> للخدمات هي شركة
            مقاولات سعودية متخصصة في تقديم حلول متكاملة للمشاريع الإنشائية
            والخدمية،
          </motion.h1>

          {/* Buttons with animations */}
          <motion.div
            className="flex justify-center gap-5 mt-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            {/* Phone Button */}
            <motion.a
              href="tel:+966567648029"
              target="__blank"
              className="bg-black text-white px-4 py-3 rounded-full flex items-center gap-4 font-medium hover:bg-gray-800 transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-white text-black p-2 rounded-full flex items-center justify-center relative"
                variants={pulseAnimation}
                initial="hidden"
                animate="visible"
              >
                {/* Overlay circle */}
                <motion.span
                  className="absolute inset-0 bg-white rounded-full"
                  variants={overlayAnimation}
                  initial="hidden"
                  animate="visible"
                />
                <Phone className="relative z-10" size={20} />
              </motion.span>
              اتصل الآن
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+966567648029"
              target="__blank"
              className="border text-gray-800 px-4 py-3 flex items-center gap-4 rounded-full font-medium hover:bg-gray-200 transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-black text-white p-2 rounded-full flex items-center justify-center relative"
                variants={pulseAnimation}
                initial="hidden"
                animate="visible"
              >
                {/* Overlay circle */}
                <motion.span
                  className="absolute inset-0 bg-black rounded-full"
                  variants={overlayAnimation}
                  initial="hidden"
                  animate="visible"
                />
                <MessageCircleIcon className="relative z-10" size={20} />
              </motion.span>
              تواصل معنا
            </motion.a>
          </motion.div>
        </div>

        {/* Infographic Section */}
        <div
          style={{ backgroundImage: `url(${banner})`, backgroundSize: 1490 }}
          className="w-full h-[550px] bg-[#FDF3E0] rounded-xl flex items-center justify-between overflow-hidden mt-[50px]"
        >
          <div className="flex justify-center items-center p-5 md:p-10 gap-10 w-full">
            <span className="p-3 rounded-full overflow-hidden hidden md:block"></span>
            <div className="w-full">
              {services.map((service, i) => (
                <motion.div
                  key={service.id}
                  className={`bg-[#000000b7] hover:bg-black hover:mr-0 ${service.offset} duration-300 cursor-pointer rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeLeft}
                  custom={i}
                >
                  <span className="p-1 rounded-full bg-white flex items-center justify-center">
                    <span className="p-1 rounded-full bg-black">
                      <service.icon className="text-white" size={18} />
                    </span>
                  </span>
                  <h1 className="font-bold text-white text-xl">
                    {service.name}
                  </h1>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
