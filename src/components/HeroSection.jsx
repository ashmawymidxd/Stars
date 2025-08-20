import { Phone, MessageCircleIcon } from "lucide-react";
import banner from "../assets/hero/banner2.jpg";
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
    },
    {
      id: 2,
      name: "شفط الصرف الصحي",
      icon: BinocularsIcon,
    },
    {
      id: 3,
      name: "مكافحة الحشرات",
      icon: InspectIcon,
    },
    {
      id: 4,
      name: "تنظيف وصيانة المباني",
      icon: BuildingIcon,
    },
    {
      id: 5,
      name: "كمبروسير تنظيف البيارات",
      icon: WindIcon,
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

  const pulseAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
    },
  };

  const overlayAnimation = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: [0, 0.5, 0],
      scale: [1, 1.3, 1.5],
      transition: {
        duration: 2,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <section id="home" className="mt-[150px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            className="text-xl md:text-3xl font-bold text-gray-800 mb-6 max-w-4xl m-auto leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
          >
            شركة <span className="text-black">النجوم</span> للخدمات هي شركة
            مقاولات سعودية متخصصة في تقديم حلول متكاملة للمشاريع الإنشائية
          </motion.h1>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-5 mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={1}
          >
            {/* Phone Button */}
            <motion.a
              href="tel:+966567648029"
              target="__blank"
              className="bg-black text-white px-5 py-3 rounded-full flex items-center gap-4 font-medium hover:bg-gray-800 transition-colors relative overflow-hidden "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="bg-white text-black p-2 rounded-full flex items-center justify-center relative"
                variants={pulseAnimation}
                initial="hidden"
                animate="visible"
              >
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
              className="border text-gray-800 px-5 py-3 flex items-center gap-4 rounded-full font-medium hover:bg-gray-200 transition-colors relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="bg-black text-white p-2 rounded-full flex items-center justify-center relative"
                variants={pulseAnimation}
                initial="hidden"
                animate="visible"
              >
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

        {/* Services Section */}
        <div
          style={{
            background: `linear-gradient(to top,rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full rounded-xl min-h-[80vh] flex flex-col items-center justify-center overflow-hidden mt-12 px-4 sm:px-6 lg:px-10 py-10"
        >
          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer rounded-full p-3 flex flex-col gap-4 shadow-lg hover:shadow-xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="flex items-center gap-3">
                  <span className="p-3 rounded-full bg-black/70 flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </span>
                  <h1 className="font-bold text-white text-lg sm:text-xl">
                    {service.name}
                  </h1>
                </div>
              </motion.div>
            ))}
          </div>

          {/* لماذا نحن Section */}
          <div className="mt-10 text-center text-white max-w-5xl mx-auto px-4">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0}
            >
              لماذا تختار{" "}
              <span className="text-yellow-400 drop-shadow-md">
                شركة النجوم؟
              </span>
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-12 leading-relaxed text-sm sm:text-base"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={1}
            >
              نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا مع التركيز على
              الموثوقية، الكفاءة، والالتزام بالمواعيد. هدفنا هو بناء علاقة طويلة
              الأمد مع عملائنا قائمة على الثقة والاحترافية.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  color: "bg-yellow-400",
                  title: "الموثوقية",
                  text: "خدماتنا معتمدة من الجهات الرسمية، ونلتزم بجودة التنفيذ والدقة.",
                },
                {
                  color: "bg-green-500",
                  title: "الخبرة",
                  text: "فريق عمل متخصص يمتلك خبرة طويلة في تقديم حلول متكاملة باحترافية عالية.",
                },
                {
                  color: "bg-blue-500",
                  title: "الجودة",
                  text: "نستخدم معدات متطورة ومواد آمنة لضمان أعلى معايير الجودة والسلامة.",
                },
                {
                  color: "bg-red-500",
                  title: "الالتزام",
                  text: "نحرص على تسليم المشاريع والخدمات وفق الجداول الزمنية المحددة بلا تأخير.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  custom={i + 2}
                >
                  <span
                    className={`${item.color} p-4 rounded-full mb-4 shadow-md shadow-black/30`}
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
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
