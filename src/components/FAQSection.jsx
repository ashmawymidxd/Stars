import { useState } from "react";
import { PlusCircle } from "lucide-react";

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

  return (
    <section className="bg-white mt-10">
      <div className="container mx-auto px-4">
        <div className="w-2xl mx-auto">
          <div className="text-center">
            <p className="text-xl text-gray-400 font-bold"> الأسئلة الشائعة</p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 ">
              كل ما تحتاج 
              <span className="text-[black]">  لمعرفته</span>
            </h2>
          </div>

          <div className="mt-10">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-gray-200 rounded-lg overflow-hidden my-3 ${
                  openFAQ === index ? "bg-gray-100" : ""
                }`}
              >
                <button
                  className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <PlusCircle
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFAQ === index ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;