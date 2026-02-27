const WhoAre = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div
          className="
            bg-[#5078FF14]
            rounded-tr-[180px] sm:rounded-tr-[260px] md:rounded-tr-[300px] lg:rounded-tr-[336px]

            pt-10 sm:pt-12 md:pt-14 lg:pt-[60px]
            pb-8 sm:pb-10 md:pb-12 lg:pb-[60px]

            px-4 sm:px-6 md:px-10 lg:px-[80px]

            -translate-x-0 sm:-translate-x-4 md:-translate-x-8 lg:-translate-x-16
          "
        >
          {/* Title + Description */}
          <div className="flex flex-col items-center text-center">
            <div className="relative inline-block">
              <h1 className="font-almarai font-extrabold text-[48px] leading-[106%] tracking-[-1%]">
                <span className="relative inline-block">
                  من
                  <span className="absolute left-0 -bottom-1 w-full h-[6px] sm:h-[7px] bg-[#5078FF]" />
                </span>{" "}
                نحن ؟
              </h1>
            </div>

            <p className="mt-4 font-almarai font-normal text-[18px] text-[#331B3BA8] leading-[146%] tracking-[2%] max-w-[662px]">
              نحن شركة إرادة للمحاسبة والضرائب نقدم خدمات إمساك الدفاتر المحاسبية
              ومتابعة الإقرار الضريبة وتقارير الربح والخسارة لنشاطك التجاري سواء
              كان متناهي الصغر أو صغير او متوسط الحجم، جميع خدماتنا عن بُعد لا
              تتردد في التواصل معنا.
            </p>
          </div>
        </div>

        {/* القسم الأول: رؤيتنا + خبرتنا */}
        {/* <div className="grid grid-cols-1 -mt-12 md:mt-4 lg:grid-cols-[300px_700px] gap-[16px] justify-start"> */}
          <div className="grid grid-cols-1 mt-1 sm:mt-10 md:mt-2 lg:grid-cols-[300px_700px] gap-[16px] justify-start">
          {/* رؤيتنا */}
          <div className="w-full h-[350px] bg-[#E9E9E9] rounded-[18px] px-[42px] flex flex-col justify-center">
            <h3 className="font-almarai font-bold text-[50px] leading-[148%] text-right text-[#322536]">
              رؤيتنا
            </h3>

            <p className="font-almarai font-bold text-[16px] leading-[146%] text-right text-[#322536]">
              نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ قرارات
              أفضل.
            </p>
          </div>

          {/* خبرتنا */}
          <div className="relative w-full h-[310px] rounded-[18px] overflow-hidden">
            <img src="/Who1.jpg" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40 px-[28px] pt-[26px]">
              <h3 className="font-almarai font-bold text-[50px] leading-[148%] text-right text-white">
                خبرتنا
              </h3>

              <p className="font-almarai font-bold text-[20px] leading-[146%] text-right text-white max-w-[480px]">
                نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ قرارات
                أفضل.
              </p>
            </div>
          </div>
        </div>

        {/* القسم الثاني: قيمنا + هدفنا */}
        <div className="grid grid-cols-1 lg:grid-cols-[700px_300px] gap-[20px] mt-[30px] justify-start">
          
          {/* قيمنا */}
          <div className="relative w-full h-[310px] rounded-[18px] overflow-hidden">
            <img src="/Who2.jpg" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/40 px-[28px] pb-[26px] flex flex-col justify-end">
              <h3 className="font-almarai font-bold text-[50px] leading-[148%] text-right text-white">
                قيمنا
              </h3>

              <p className="font-almarai font-bold text-[20px] leading-[146%] text-right text-white max-w-[450px]">
                نلتزم بالاحترافية، السرية، وبناء علاقات قائمة على الثقة.
              </p>
            </div>
          </div>

          {/* هدفنا */}
          <div className="w-full h-[300px] lg:-mt-10 bg-[#F1F4FF] rounded-[18px] px-[42px] flex flex-col justify-start">
            <h3 className="font-almarai font-bold text-[50px] leading-[148%] text-right text-[#322536]">
              هدفنا
            </h3>

            <p className="font-almarai font-bold text-[16px] leading-[146%] text-right text-[#322536]">
              تمكين الأفراد والشركات من تحقيق أهدافهم بثقة ووضوح.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoAre;