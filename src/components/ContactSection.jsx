import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import whatsapp from "../assets/icons/whatsapp.png"
function ContactSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const contactItems = [
    {
      icon: <Phone size={22} />,
      title: "الهاتف",
      text: "966567648029+",
      link: "tel:+966567648029",
    },
    {
      icon: <Mail size={22} />,
      title: "البريد الإلكتروني",
      text: "info@Stars.com",
      link: "mailto:info@Stars.com",
    },
    {
      icon: <Clock size={22} />,
      title: "أوقات العمل",
      text: "نعمل 24 -  ساعة في اليوم - علي مدار الاسبوع",
    },
  ];

  return (
    <section id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
          >
            <div className="text-start">
              <p className="text-lg text-gray-500 font-semibold mb-2">اتصل بنا</p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-snug">
                <span className="text-black">تواصل معنا الآن</span> وشاركنا خططك التجارية
              </h2>
              <p className="text-gray-600 mt-4 max-w-lg">
                نحن هنا لمساعدتك والرد على جميع استفساراتك في أي وقت خلال 24 ساعة.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeUp}
                  custom={index + 1}
                >
                  <div className="bg-black text-white p-3 rounded-full shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    {item.link ? (
                      <a href={item.link} className="block hover:text-black transition-colors">
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </a>
                    ) : (
                      <div>
                        <h4 className="font-bold text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+966567648029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-8 items-center justify-center bg-black text-white px-6 py-3 gap-3 rounded-full font-medium shadow-lg hover:bg-green-700 transition-all"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
              custom={contactItems.length + 1}
            >
              <img src={whatsapp} alt="" width={20} />
              تواصل عبر واتساب
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
