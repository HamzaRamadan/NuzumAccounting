
const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "الباقة الصغيرة",
      price: "700 ريال",
      period: "شهريا",
      description:
        "مخصصة لمشاريع التجارة الإلكترونية أو المشاريع متناهية الصغر.\n\nمناسبة للمنشآت التي تقل مبيعاتها الشهرية عن 50,000 ريال أو تصدر أقل من 100 فاتورة شهريًا.",
    },
    {
      id: 2,
      title: "الباقة الأساسية",
      price: "1000 ريال",
      period: "شهريا",
      description:
        "مناسبة للمنشآت التي تصل مبيعاتها الشهرية حتى 50,000 ريال.\n\nأو مناسبة للمنشآت التي تصدر حتى 100 فاتورة شهريًا.",
    },
    {
      id: 3,
      title: "الباقة الإضافية",
      price: "1500 ريال",
      period: "شهريا",
      description:
        "مناسبة للمنشآت التي تصل مبيعاتها الشهرية حتى 200,000 ريال.\n\nأو مناسبة للمنشآت التي تصدر حتى 500 فاتورة شهريًا.",
    },
    {
      id: 4,
      title: "الباقة المتقدمة",
      price: "2000 ريال",
      period: "شهريا",
      description:
        "السعر يبدأ من 2000، لكنه ليس ثابت لكل العملاء، ولذلك يُحدد السعر النهائي بناءً على الاتصال أو المقابلة مع العميل.\n\nمخصصة للمنشآت التي تتجاوز مبيعاتها الشهرية 200,000 ريال أو تصدر أكثر من 500 فاتورة شهريًا.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
     <div
  className="bg-[#ffded44c] rounded-tl-[180px] sm:rounded-tl-[260px] md:rounded-tl-[300px] lg:rounded-tl-[336px] pt-10 sm:pt-14 md:pt-18 lg:pt-[82px] pb-14 sm:pb-20 md:pb-28 lg:pb-[120px] px-4 sm:px-6 md:px-10 lg:px-[80px] mb-8 sm:mb-12 md:mb-16 lg:mb-20 translate-x-0 sm:translate-x-4 md:translate-x-8 lg:translate-x-16" >
  {/* Main Title */}
  <h2 className=" text-[#331B3B] font-almarai font-bold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[140%] tracking-[-0.01em] text-right ">
    <span className="relative inline-block">
      أنظمة
      <span className="absolute left-0 -bottom-1 w-full h-[6px] sm:h-[7px] bg-[#2C7EF3]" />
    </span>
    مختلفة تناسب جميع احتياجاتك مهما كان وضع شركتك
  </h2>

  {/* Description */}
  <p className=" text-right font-almarai font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6] tracking-[0.02em] text-[#331B3BA8] max-w-full lg:max-w-[950px] mt-4 sm:mt-5 ">
    خدمة ربح هي الحل الأمثل للشركات الناشئة والصغيرة والمتوسطة فى
    المملكة، حيث نقدّم خدمات محاسبية شاملة عن بُعد، بأسعار تنافسية،
    لتلبية احتياجاتك المالية والضريبية بكفاءة، مما يتيح لك التركيز على
    تنمية مشروعك وتحقيق أهدافك فى أسرع وقت.
  </p>

  {/* Additional Info */}
  <p className=" text-[#331B3BA8] font-almarai font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[1.6] tracking-[0.02em] text-right mt-4 max-w-full lg:max-w-[900px] ">
    جميع الباقات توفر عليك أكثر من 80٪ من الحلول البديلة عند توظيف
    محاسبين داخل الشركة، مع إمكانية توفير برنامج محاسبي سحابي احترافي
    بالتعاون مع شركائنا بسعر يبدأ من 500 ريال سنويًا.
  </p>
</div>

        {/* Pricing Cards */}
        <div className=" grid grid-cols-1 mt-0 lg:-mt-40 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 md:gap-5 lg:gap-2.5 ">
          {pricingPlans?.map((plan) => (
            <div
              key={plan?.id}
              className="bg-white shadow-2xl z-10 rounded-[24px] p-3 sm:p-4 md:p-5 flex flex-col h-full"
            >
              <div className="relative w-[260px] h-[120px] mx-auto">
                <div className="w-full h-full bg-[#4F6EF7] text-white flex items-center justify-center text-[22px] font-bold rounded-tl-[16px] rounded-tr-[16px] [clip-path:polygon(0_0,100%_0,100%_100%,0_70%)] ">
                  {plan?.title}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-4 sm:mb-6">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3"
                  style={{ fontFamily: "Almarai" }}
                >
                  {plan?.price}
                </div>
                <div
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-black"
                  style={{ fontFamily: "Almarai" }}
                >
                  {plan?.period}
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 mb-6 sm:mb-8">
                <p
                  className="text-sm sm:text-base md:text-lg text-[#331b3ba8] text-right leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "Almarai" }}
                >
                  {plan?.description}
                </p>
              </div>
                <button
  className="
    block mx-auto
    bg-[#2C7EF3] hover:bg-[#2563C3]
    transition
    text-white text-sm font-bold
    py-3 w-50
    rounded-full
  "
>
  حجز استشارة مجانية الآن
</button>

          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

