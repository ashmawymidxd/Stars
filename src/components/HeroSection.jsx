import { Phone, MessageCircleIcon } from "lucide-react";
import banner from "../assets/hero/banner.jpg";
import logo from "../assets/logo/icone.png";
import {
  RainbowIcon,
  BinocularsIcon,
  InspectIcon,
  BuildingIcon,
  WindIcon,
} from "lucide-react";
function HeroSection() {
  return (
    <section id="home" className="mt-[150px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 max-w-4xl m-auto">
            شركة <span className="text-black">النجوم</span> للخدمات هي شركة
            مقاولات سعودية متخصصة في تقديم حلول متكاملة للمشاريع الإنشائية
            والخدمية،
          </h1>
          <div className="flex justify-center gap-5 mt-10">
            <a
              href="tel:+201554300351"
              className="bg-black text-white px-4 py-3  rounded-full flex items-center gap-4 font-medium hover:bg-gray-800 transition-colors"
            >
              <span className="bg-white text-black p-2  rounded-full flex items-center justify-center">
                <Phone className="inline-block" />
              </span>{" "}
              اتصل الآن
            </a>
            <a
              href="https://wa.me/+201554300351"
              className="border text-gray-800 px-4 py-3 flex items-center gap-4  rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              <span className="bg-black text-white p-2  rounded-full flex items-center justify-center">
                <MessageCircleIcon className="inline-block" />
              </span>
              تواصل معنا{" "}
            </a>
          </div>
        </div>

        {/* Infographic Section */}
        <div
          style={{ backgroundImage: `url(${banner})`, backgroundSize: 1490 }}
          className="w-full h-[550px] bg-[#FDF3E0] rounded-xl flex items-center justify-between overflow-hidden mt-[50px]"
        >
          <div className="flex justify-center items-center p-5 md:p-10 gap-10 w-full">
            <span className="p-3 rounded-full overflow-hidden hidden md:block">
              <img src={logo} alt="" className="hidden" width={150} />
            </span>
            <div className="w-full">
              {/* one */}
              <div className="bg-[#000000b7] mr-0 md:mr-[-70px]  rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3">
                <span className="p-1  rounded-full bg-white flex items-center justify-center">
                  <span className="p-1  rounded-full bg-black">
                    <RainbowIcon className="text-white" />
                  </span>
                </span>
                <h1 className="font-bold text-white text-xl">توريد مياه</h1>
              </div>
              {/* tow */}
              <div className="bg-[#000000b7] mr-0 md:mr-[-20px]  rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3">
                <span className="p-1  rounded-full bg-white flex items-center justify-center">
                  <span className="p-1  rounded-full bg-black">
                    <BinocularsIcon className="text-white" />
                  </span>
                </span>
                <h1 className="font-bold text-white text-xl">
                  شفط الصرف الصحي
                </h1>
              </div>
              {/* three */}
              <div className="bg-[#000000b7] rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3">
                <span className="p-1  rounded-full bg-white flex items-center justify-center">
                  <span className="p-1  rounded-full bg-black">
                    <InspectIcon className="text-white" />
                  </span>
                </span>
                <h1 className="font-bold text-white text-xl">
                  {" "}
                  مكافحة الحشرات
                </h1>
              </div>
              {/* four */}
              <div className="bg-[#000000b7] mr-0 md:mr-[-20px]  rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3">
                <span className="p-1  rounded-full bg-white flex items-center justify-center">
                  <span className="p-1  rounded-full bg-black">
                    <BuildingIcon className="text-white" />
                  </span>
                </span>
                <h1 className="font-bold text-white text-xl">
                  توريد وصيانة المباني
                </h1>
              </div>
              {/* five */}
              <div className="bg-[#000000b7] mr-0 md:mr-[-70px]  rounded-full p-2 md:w-[400px] flex items-center justify-start gap-3 my-3">
                <span className="p-1  rounded-full bg-white flex items-center justify-center">
                  <span className="p-1  rounded-full bg-black">
                    <WindIcon className="text-white" />
                  </span>
                </span>
                <h1 className="font-bold text-white text-xl">
                  خدمة تأجير الكمبروسر 
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
