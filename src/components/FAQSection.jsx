import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "ما هي تكلفة الخدمات المتاحة؟",
      answer:
        "تختلف التكلفة حسب نوع المشروع وحجمه. نقوم بتقديم عروض أسعار مفصلة بعد معاينة الموقع ودراسة المتطلبات.",
    },
    {
      question: "كيف يتم التواصل على طلب الخدمة؟",
      answer:
        "يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مقرنا الرئيسي. فريقنا متاح للرد على استفساراتكم.",
    },
    {
      question: "ما هي تكلفة رخصة العمرة؟",
      answer:
        "نحن متخصصون في المقاولات وليس خدمات العمرة. للاستفسار عن خدماتنا الإنشائية، يرجى التواصل معنا مباشرة.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // 👈 will run each time in view
          variants={fadeUp}
          custom={0}
        >
          <div className="text-center">
            <p className="text-xl text-gray-400 font-bold">الأسئلة الشائعة</p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800">
              كل ما تحتاج <span className="text-[black]">لمعرفته</span>
            </h2>
          </div>

          <div className="mt-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`border border-gray-200 rounded-lg overflow-hidden my-3 ${
                  openFAQ === index ? "bg-gray-50" : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} // 👈 triggers on every scroll into view
                variants={fadeUp}
                custom={index + 1}
              >
                <button
                  className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PlusCircle className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      className="bg-white px-6 pb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQSection;
