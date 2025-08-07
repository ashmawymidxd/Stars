import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "أحمد محمد",
      role: "مالك مشروع سكني",
      rating: 5,
      comment:
        "خدمة ممتازة والتزام بالمواعيد. فريق العمل محترف ومتعاون. أنصح بشدة بالتعامل مع شركة النجوم.",
    },
    {
      name: "فاطمة العتيبي",
      role: "مديرة مشروع تجاري",
      rating: 5,
      comment:
        "جودة عالية في التنفيذ وأسعار تنافسية. تم إنجاز المشروع في الوقت المحدد وبأفضل المواصفات.",
    },
    {
      name: "خالد الرشيد",
      role: "مطور عقاري",
      rating: 5,
      comment:
        "تعاملت مع الشركة في عدة مشاريع والنتيجة كانت مرضية جداً. الفريق متخصص وملتزم بالجودة.",
    },
    {
      name: "نورة السليم",
      role: "مستثمرة عقارية",
      rating: 5,
      comment:
        "شركة موثوقة ومحترفة في تنفيذ المشاريع. قدمت لي استشارات ممتازة ساعدت في نجاح الاستثمار.",
    },
    {
      name: "ياسر الحربي",
      role: "مهندس معماري",
      rating: 5,
      comment:
        "تعاون مميز مع شركة النجوم في مشروع متكامل. التزامهم بمعايير الجودة والسلامة كان ملحوظاً.",
    },
    {
      name: "لمى عبدالله",
      role: "مالكة فيلا",
      rating: 5,
      comment:
        "تنفيذ دقيق للتصاميم مع اهتمام بالتفاصيل. فريق العمل متعاون ويستمع لملاحظات العميل باهتمام.",
    },
    {
      name: "سعد القحطاني",
      role: "مدير شركة مقاولات",
      rating: 5,
      comment:
        "شركة النجوم من أفضل الشركات التي تعاملت معها من حيث الاحترافية وجودة التنفيذ.",
    },
    {
      name: "أمينة السديري",
      role: "مصممة ديكور",
      rating: 5,
      comment:
        "تجربة رائعة في التعاون معهم. يمتلكون رؤية فنية عالية ويحافظون على الجماليات في التنفيذ.",
    },
    {
      name: "تركي الفيصل",
      role: "مستشار عقاري",
      rating: 5,
      comment:
        "الشركة تقدم حلولاً عملية مع الحفاظ على الجودة. أوصي بهم لجميع المشاريع السكنية والتجارية.",
    },
    {
      name: "هناء الزهراني",
      role: "مالكة مشروع فندقي",
      rating: 5,
      comment:
        "إدارة ممتازة للمشروع من التصميم حتى التسليم. التزم الفريق بالمواصفات الفنية والجدول الزمني.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // Calculate visible slides for desktop (3 slides) and mobile (1 slide)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const slideIndex = (currentSlide + i) % reviews.length;
      slides.push(reviews[slideIndex]);
    }
    return slides;
  };

  return (
    <section id="reviews" className="">
      <div className="container mx-auto px-4">
            <p className="text-xl text-gray-400 font-bold"> آراء العملاء</p>
        <div className="flex justify-between items-center">
          <div className="text-start">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 max-w-3xl">
              استمع إلي عملائنا
              <span className="text-[black]"> نجاح حقيقي</span>
            </h2>
          </div>

          {/* Navigation Buttons in Header */}
          <div className="flex gap-3">
            <button
              onClick={nextSlide}
              className="bg-[black] text-white p-3 rounded-full hover:bg-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <button
              onClick={prevSlide}
              className="bg-[black] text-white p-3 rounded-full hover:bg-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          {/* Desktop View - 3 Cards */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleSlides().map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border p-8 text-start h-full"
              >
                <div className="flex justify-start mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-6 italic">
                  {review.comment}
                </p>

                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {review.name}
                </h4>
                <p className="text-gray-600">{review.role}</p>
              </div>
            ))}
          </div>

          {/* Mobile View - 1 Card */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl border p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-lg text-gray-700 mb-6 italic">
                {reviews[currentSlide].comment}
              </p>

              <h4 className="text-xl font-bold text-gray-800 mb-1">
                {reviews[currentSlide].name}
              </h4>
              <p className="text-gray-600">{reviews[currentSlide].role}</p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
