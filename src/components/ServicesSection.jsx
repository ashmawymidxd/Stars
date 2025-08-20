import {
  Droplets,
  Shovel,
  Bug,
  Building2,
  Fan,
  LucideArrowDownLeft,
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
      image: S2,
      icon: <Droplets />,
      idK: "s1",
    },
    {
      title: " شفط الصرف الصحي",
      description:
        "نقدم حلول شفط ونقل الصرف الصحي باحترافية عالية، باستخدام أحدث المعدات والآليات المعتمدة، مع الالتزام الكامل بالاشتراطات البيئية والصحية. كما تساهم خدماتنا في الحفاظ على بيئة آمنة ونظيفة، سواء في المشاريع السكنية أو التجارية أو الصناعية.",
      image: S4,
      icon: <Shovel />,
      idK: "s2",
    },
    {
      title: "مكافحة الحشرات",
      description:
        "نوفّر خدمات مكافحة الحشرات والآفات باستخدام تقنيات حديثة ومواد آمنة ومرخصة من وزارة البيئة. كما نعتمد على فريق مختص لضمان القضاء على الحشرات بكفاءة، مع تقديم حلول وقائية تضمن بيئة خالية من المخاطر الصحية.",
      image: S3,
      icon: <Bug />,
      idK: "s3",
    },
    {
      title: "تنظيف وصيانة المباني",
      description:
        "نمتلك خبرة واسعة في توريد وصيانة المباني بمختلف أنواعها، من السكنية إلى التجارية والصناعية. كما تشمل خدماتنا أعمال الترميم، الدهانات، أعمال الكهرباء والسباكة، والتشطيبات الداخلية والخارجية، بما يضمن أعلى معايير الجودة والسلامة والالتزام بالجداول الزمنية.",
      image: S1,
      icon: <Building2 />,
      idK: "s4",
    },
    {
      title: "كمبروسير تنظيف البيارات",
      description:
        "نقدّم كمبروسرات هواء عالية الضغط تُستخدم في تشغيل المعدات، حفر التربة، وأعمال التكسير، إضافة إلى دورها الفعّال في شفط وتنظيف البيارات ومجاري الصرف الصحي عبر تفتيت الرواسب وتنظيف الخطوط المسدودة. كما نوفر معدّات موثوقة مع دعم فني مستمر لضمان جودة العمل وسلامته.",
      image: S5,
      icon: <Fan />,
      idK: "s5",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <div className="text-start">
          <p className="section-subtitle">ما نقدمه</p>
          <h2 className="text-xl md:text-3xl max-w-2xl">
            متخصصون في تقديم <span className="text-black">حلول متكاملة</span>{" "}
            للمشاريع الإنشائية والخدمية وفق أعلى معايير الجودة والسلامة
          </h2>
        </div>

        <div className="services-grid mt-[50px]">
          {services.map((service, index) => (
            <div key={index} className="service-card" id={service.idK}>
              <div className="service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                  loading="lazy"
                />
                <div className="service-header">
                  <div className="flex items-center justify-between gap-2">
                    <span className="service-icon">{service.icon}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="flex">
                    {" "}
                    المذيد
                    <LucideArrowDownLeft />
                  </div>
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
