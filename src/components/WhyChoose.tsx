import React from "react";

const WhyChoose = () => {
  const reasons = [
    {
      id: 1,
      title: "دعم متخصص وموثوق مع فريق محاسبي محترف.",
      bgColor: "#023248",
      borderRadius: "0px 50px 0px 0px",
    },
    {
      id: 2,
      title: "ضمان جودة الخدمة والمتابعة السريعة لأي استفسارات.",
      bgColor: "#2C85C7",
    },
    {
      id: 3,
      title: "مرونة سعرية وتكلفة أقل من التوظيف بدوام كامل.",
      bgColor: "#70D0DC",
    },
    {
      id: 4,
      title: "خدمة عملاء متاحة 24/7 لضمان استجابة سريعة وفعالة.",
      bgColor: "#2A8E9E",
    },
    {
      id: 5,
      title: "إعداد التقارير المالية التفصيلية.",
      bgColor: "#55ADD5",
    },
    {
      id: 6,
      title: "متابعة الالتزامات الضريبية.",
      bgColor: "#026F80",
      borderRadius: "0px 0px 0px 50px",
    },
  ];

  return (
    <section className="w-full py-6 sm:py-16 md:py-5 lg:py-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="relative inline-block mb-8 sm:mb-12">
            <div className="bg-[#F1F4FF] rounded-full w-[100px] sm:w-[80px] md:w-[100px] lg:w-[100px] h-[100px] sm:h-[80px] md:h-[100px] lg:h-[100px] absolute top-5 right-2 lg:top-14 lg:-right-8" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#331b3b] text-center relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20"
              style={{
                fontFamily: "Almarai",
                lineHeight: "1.2",
              }}
            >
              لماذا تحتاج إلى مستشار تسويقي؟
            </h2>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4 w-[80%] mx-auto">
          {reasons?.map((reason) => (
            <div
              key={reason.id}
              className="p-4 sm:p-5 md:p-6 lg:p-[20px] flex flex-col text-right min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[200px] relative"
              style={{
                backgroundColor: reason.bgColor,
                borderRadius: reason.borderRadius || "0px",
              }}
            >
              {/* Number Badge أعلى يمين */}
              <div className="absolute top-4 right-4 bg-[#ffffff72] rounded-[10px] w-[40px] sm:w-[50px] md:w-[60px] lg:w-[62px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[62px] flex items-center justify-center">
                <span
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
                  style={{ fontFamily: "Inter" }}
                >
                  {reason.id}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white text-right leading-tight mt-12 sm:mt-16 md:mt-20 lg:mt-24"
                style={{
                  fontFamily: "Almarai",
                  lineHeight: "1.5",
                }}
              >
                {reason.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
