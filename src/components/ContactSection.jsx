import { Phone, Mail, MapPin, Clock } from "lucide-react";
function ContactSection() {
  return (
    <section id="contact" className="mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-start">
              <p className="text-xl text-gray-400 font-bold"> اتصل بنا</p>
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 max-w-3xl">
                الأن <span className="text-[black]"> تواصل معنا</span> وأخبرنا
                عن خططك التجارية، فنحن هنا لمساعدتك على مدار ساعة
              </h2>
            </div>

            <div className="my-10">
              <div className="flex items-center mt-3">
                <div className="bg-[black] text-white p-3 rounded-full ml-4">
                  <Phone size={20} />
                </div>
                <a href="tel:+201554300351">
                  <h4 className="font-bold text-gray-800">الهاتف</h4>
                  <p className="text-gray-600">+966123456567</p>
                </a>
              </div>

              <div className="flex items-center mt-3">
                <div className="bg-[black] text-white p-3 rounded-full ml-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">البريد الإلكتروني</h4>
                  <p className="text-gray-600">info@starsbusiness.com</p>
                </div>
              </div>

              <div className="flex items-center mt-3">
                <div className="bg-[black] text-white p-3 rounded-full ml-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">عنوان المقر</h4>
                  <p className="text-gray-600">
                    شارع الملك عبدالعزيز - الرياض 11431
                  </p>
                </div>
              </div>

              <div className="flex items-center mt-3">
                <div className="bg-[black] text-white p-3 rounded-full ml-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">أوقات العمل</h4>
                  <p className="text-gray-600">
                    السبت - الخميس: 8:00 ص - 6:00 م
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/+201554300351"
                className="border w-60 flex mt-8 items-center justify-center bg-black text-gray-200 px-4 py-2  gap-4 rounded-full font-medium hover:bg-gray-700 transition-colors"
              >
                تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
