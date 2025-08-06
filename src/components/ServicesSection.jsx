import {
  RainbowIcon,
  BinocularsIcon,
  InspectIcon,
  BuildingIcon,
  WindIcon,
} from "lucide-react";
import S1 from "../assets/services/s (1).jpg";
import S2 from "../assets/services/s (2).jpg";
import S3 from "../assets/services/s (3).jpg";
import S4 from "../assets/services/s (4).jpg";
import S5 from "../assets/services/s (5).jpg";
function ServicesSection() {
  const services = [
    {
      title: "توريد مياه",
      description:
        "نوفّر خدمات توريد المياه النقية وفق أعلى معايير الجودة والالتزام، لتلبية احتياجات المشاريع والمواقع في جميع الأوقات. وبفضل أسطولنا المتكامل من الصهاريج المعقمة وخدمة التوريد السريع، نضمن وصول المياه إلى موقعك بأمان وكفاءة، بما يتوافق مع متطلبات الجهات التنظيمية المحلية.",
      image: S1,
      icon: <RainbowIcon />,
    },
    {
      title: " شفط الصرف الصحي",
      description:
        "نقدم حلول شفط ونقل الصرف الصحي باحترافية عالية، باستخدام أحدث المعدات والآليات المعتمدة، مع الالتزام الكامل بالاشتراطات البيئية والصحية. كما تساهم خدماتنا في الحفاظ على بيئة آمنة ونظيفة، سواء في المشاريع السكنية أو التجارية أو الصناعية.",
      image: S2,
      icon: <BinocularsIcon />,
    },
    {
      title: "مكافحة الحشرات",
      description:
        "نوفّر خدمات مكافحة الحشرات والآفات باستخدام تقنيات حديثة ومواد آمنة ومرخصة من وزارة البيئة. كما نعتمد على فريق مختص لضمان القضاء على الحشرات بكفاءة، مع تقديم حلول وقائية تضمن بيئة خالية من المخاطر الصحية.",
      image: S3,
      icon: <InspectIcon />,
    },
    {
      title: "توريد وصيانة المباني",
      description:
        "نمتلك خبرة واسعة في توريد وصيانة المباني بمختلف أنواعها، من السكنية إلى التجارية والصناعية. كما تشمل خدماتنا أعمال الترميم، الدهانات، أعمال الكهرباء والسباكة، والتشطيبات الداخلية والخارجية، بما يضمن أعلى معايير الجودة والسلامة والالتزام بالجداول الزمنية.",
      image: S4,
      icon: <BuildingIcon />,
    },
    {
      title: "خدمة تأجير الكمبروسر (ضاغط الهواء)",
      description:
        "نقدّم كمبروسرات هواء عالية الضغط تُستخدم في تشغيل المعدات، حفر التربة، وأعمال التكسير، إضافة إلى دورها الفعّال في شفط وتنظيف البيارات ومجاري الصرف الصحي عبر تفتيت الرواسب وتنظيف الخطوط المسدودة. كما نوفر معدّات موثوقة مع دعم فني مستمر لضمان جودة العمل وسلامته.",
      image: S5,
      icon: <WindIcon />,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <div className="text-start mb-16">
          <p className="section-subtitle">ما نقدمه</p>
          <h2 className="section-title">
            متخصصة في تقديم <span className="highlight">حلول متكاملة</span>{" "}
            للمشاريع الإنشائية والخدمية وفق أعلى معايير الجودة والسلامة
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-header">
                  <span className="service-icon">{service.icon}</span>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


//  import  {
//   RainbowIcon,
//   BinocularsIcon,
//   InspectIcon,
//   BuildingIcon,
//   WindIcon,
// } from "lucide-react";
// import S1 from "../assets/services/s (1).jpg";
// import S2 from "../assets/services/s (2).jpg";
// import S3 from "../assets/services/s (3).jpg";
// import S4 from "../assets/services/s (4).jpg";
// import S5 from "../assets/services/s (5).jpg";
// function ServicesSection() {
//   const services = [
//     {
//       title: "توريد مياه",
//       description:
//         "نوفّر خدمات توريد المياه النقية وفق أعلى معايير الجودة والالتزام، لتلبية احتياجات المشاريع والمواقع في جميع الأوقات. وبفضل أسطولنا المتكامل من الصهاريج المعقمة وخدمة التوريد السريع، نضمن وصول المياه إلى موقعك بأمان وكفاءة، بما يتوافق مع متطلبات الجهات التنظيمية المحلية.",
//       image: S1,
//       icon: <RainbowIcon />,
//     },
//     {
//       title: " شفط الصرف الصحي",
//       description:
//         "نقدم حلول شفط ونقل الصرف الصحي باحترافية عالية، باستخدام أحدث المعدات والآليات المعتمدة، مع الالتزام الكامل بالاشتراطات البيئية والصحية. كما تساهم خدماتنا في الحفاظ على بيئة آمنة ونظيفة، سواء في المشاريع السكنية أو التجارية أو الصناعية.",
//       image: S2,
//       icon: <BinocularsIcon />,
//     },
//     {
//       title: "مكافحة الحشرات",
//       description:
//         "نوفّر خدمات مكافحة الحشرات والآفات باستخدام تقنيات حديثة ومواد آمنة ومرخصة من وزارة البيئة. كما نعتمد على فريق مختص لضمان القضاء على الحشرات بكفاءة، مع تقديم حلول وقائية تضمن بيئة خالية من المخاطر الصحية.",
//       image: S3,
//       icon: <InspectIcon />,
//     },
//     {
//       title: "توريد وصيانة المباني",
//       description:
//         "نمتلك خبرة واسعة في توريد وصيانة المباني بمختلف أنواعها، من السكنية إلى التجارية والصناعية. كما تشمل خدماتنا أعمال الترميم، الدهانات، أعمال الكهرباء والسباكة، والتشطيبات الداخلية والخارجية، بما يضمن أعلى معايير الجودة والسلامة والالتزام بالجداول الزمنية.",
//       image: S4,
//       icon: <BuildingIcon />,
//     },
//     {
//       title: "خدمة تأجير الكمبروسر (ضاغط الهواء):",
//       description:
//         "نقدّم كمبروسرات هواء عالية الضغط تُستخدم في تشغيل المعدات، حفر التربة، وأعمال التكسير، إضافة إلى دورها الفعّال في شفط وتنظيف البيارات ومجاري الصرف الصحي عبر تفتيت الرواسب وتنظيف الخطوط المسدودة. كما نوفر معدّات موثوقة مع دعم فني مستمر لضمان جودة العمل وسلامته.",
//       image: S5,
//       icon: <WindIcon />,
//     },
//   ];

//   return (
//     <section id="services" className="bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-start mb-10">
//           <p className="text-xl text-gray-400 font-bold"> ما نقدمه</p>
//           <h2 className="text-4xl font-bold text-gray-800 max-w-3xl">
//             متخصصة في تقديم <span className="text-[#FF6969]"> حلول متكاملة</span> للمشاريع الإنشائية
//             والخدمية وفق أعلى معايير الجودة والسلامة
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white rounded-xl overflow-hidden">
//               <div className="relative">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-[280px] object-cover"
//                 />
//                 <div className="absolute w-[94%] top-3 right-3 bg-[#00000091] text-white px-2 py-2 rounded-xl text-md flex items-center gap-2">
//                   <span className="p-1 rounded-xl bg-[#ff6969] text-2xl font-bold">
//                     {service.icon}
//                   </span>{" "}
//                   {service.title}
//                 </div>
//                 <div className="absolute w-[94%] bottom-3 right-3 h-40 flex items-center justify-center bg-[#00000098] text-white px-3 py-1 rounded-xl text-md">
//                   <p className="text-white mb-4">{service.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesSection;
