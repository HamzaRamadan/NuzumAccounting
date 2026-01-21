import React from "react";

const WhoAre = () => {
  return (
    <section
      dir="rtl"
      className="relative w-full  pt-[90px] pb-[110px] overflow-hidden"
    >
      {/* الدائرة الخلفية */}
      <div
        className="absolute top-[-180px] left-[-220px] w-[70%] h-[620px] bg-[#0d41eb] "
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderTopLeftRadius: "800px",
          borderTopRightRadius: "800px",
        }}
      />

      <div className="relative mx-auto w-[1200px]">
        {/* العنوان */}
        <div className="text-center mb-[70px]">
          <div className="relative inline-block">
            <h2 className="text-[40px] font-bold text-[#1E1B4B]">من نحن؟</h2>

            {/* الدائرة الزرقا */}
            <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-[120px] h-[52px] border-2 border-[#3B82F6] rounded-full" />
          </div>

          <p className="mt-[18px] text-[16px] text-[#6B7280]">
            تعرّف على رسالتنا، رؤيتنا، والقيم التي نعمل بها
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-2 gap-[32px]">
          {/* خبرتنا */}
          <div className="relative w-[584px] h-[310px] rounded-[18px] overflow-hidden">
            <img src="/about-1.jpg" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40 px-[28px] pb-[26px] flex flex-col justify-end">
              <h3 className="text-white text-[26px] font-bold mb-[6px]">
                خبرتنا
              </h3>

              <p className="text-white text-[14px] leading-[22px]">
                نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ
                قرارات أفضل.
              </p>
            </div>
          </div>

          {/* رؤيتنا */}
          <div className="w-[584px] h-[310px] bg-[#EFEFEF] rounded-[18px] px-[42px] flex flex-col justify-center">
            <h3 className="text-[26px] font-bold text-[#1E1B4B] mb-[12px]">
              رؤيتنا
            </h3>

            <p className="text-[15px] text-[#4B5563] leading-[26px] w-[420px]">
              نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ قرارات
              أفضل.
            </p>
          </div>

          {/* هدفنا */}
          <div className="w-[584px] h-[310px] bg-white rounded-[18px] px-[42px] flex flex-col justify-center">
            <h3 className="text-[26px] font-bold text-[#1E1B4B] mb-[12px]">
              هدفنا
            </h3>

            <p className="text-[15px] text-[#4B5563] leading-[26px] w-[420px]">
              تمكين الأفراد والشركات من تحقيق أهدافهم بثقة ووضوح.
            </p>
          </div>

          {/* قيمنا */}
          <div className="relative w-[584px] h-[310px] rounded-[18px] overflow-hidden">
            <img src="/about-2.jpg" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40 px-[28px] pb-[26px] flex flex-col justify-end">
              <h3 className="text-white text-[26px] font-bold mb-[6px]">
                قيمنا
              </h3>

              <p className="text-white text-[14px] leading-[22px]">
                نلتزم بالاحترافية، السرية، وبناء علاقات قائمة على الثقة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAre;
