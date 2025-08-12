import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo/icone.png";
function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-4 bg-black p-1 rounded-full">
              <img src={logo} alt="" className="h-[60px] rounded-full" />
              <span className="text-white font-bold text-xl px-2">
                النجوم للمقاولات
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              شركة مقاولات سعودية متخصصة في تقديم حلول إنشائية متكاملة بأعلى
              معايير الجودة.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <span className="text-white">📘</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <span className="text-white">🐦</span>
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <span className="text-white">📷</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  توريد المياة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  شطف الصرف الصحي
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مكافحة الحشرات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  توريد وصيانة المباني
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  خدمة تأجير الكمبروسر (ضاغط الهواء)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">روابط مهمة</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  مشاريعنا
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  آراء العملاء
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  الوظائف
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">معلومات التواصل</h4>
            <div className="space-y-3 text-gray-400">
              <a href="tel:+966567648029" className="flex items-center">
                <Phone size={16} className="ml-2" />
                +966567648029
              </a>
              <p className="flex items-center">
                <Mail size={16} className="ml-2" />
                info@starsbusiness.com
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="ml-2" />
                الرياض، المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 شركة النجوم للخدمات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
