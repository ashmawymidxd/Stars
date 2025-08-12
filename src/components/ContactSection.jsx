import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

function ContactSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const contactItems = [
    {
      icon: <Phone size={20} />,
      title: "الهاتف",
      text: "+966567648029",
      link: "tel:+966567648029",
    },
    {
      icon: <Mail size={20} />,
      title: "البريد الإلكتروني",
      text: "info@starsbusiness.com",
    },
    {
      icon: <MapPin size={20} />,
      title: "عنوان المقر",
      text: "شارع الملك عبدالعزيز - الرياض 11431",
    },
    {
      icon: <Clock size={20} />,
      title: "أوقات العمل",
      text: "السبت - الخميس: 8:00 ص - 6:00 م",
    },
  ];

  return (
    <section id="contact" className="mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="text-start">
              <p className="text-xl text-gray-400 font-bold">اتصل بنا</p>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 max-w-3xl">
                الأن <span className="text-[black]">تواصل معنا</span> وأخبرنا
                عن خططك التجارية، فنحن هنا لمساعدتك على مدار ساعة
              </h2>
            </div>

            <div className="my-10">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mt-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <div className="bg-[black] text-white p-3 rounded-full ml-4">
                    {item.icon}
                  </div>
                  {item.link ? (
                    <a href={item.link}>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </a>
                  ) : (
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/+966567648029"
                className="border w-60 flex mt-8 items-center justify-center bg-black text-gray-200 px-4 py-2 gap-4 rounded-full font-medium hover:bg-gray-700 transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                custom={contactItems.length + 1}
              >
                تواصل معنا عبر واتساب
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
