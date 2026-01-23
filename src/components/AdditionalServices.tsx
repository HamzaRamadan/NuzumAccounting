import { MdCheckCircle } from "react-icons/md";

const AdditionalServices = () => {
  const services = [
    {
      id: 1,
      title: "دراسة الجدوى",
      image: "/service1.png",
      description:
        "نحلل مشروعك من جميع الجوانب لنمنحك رؤية استثمارية واضحة قبل اتخاذ القرار.",
      checklistFeatures: [
        "الدراسة التقنية للمشروع",
        "الدراسة المالية والفنية",
        "دراسة السوق وتحليل المنافسين",
        "الدراسة القانونية والتنظيمية",
      ],
    },
    {
      id: 2,
      title: "استشارات مالية",
      image: "/service2.png",
      description:
        "جلسة مخصصة مع خبير مالي لمساعدتك على فهم وضعك المالي واتخاذ قرارات حاسمة لمشروعك.",
      features: [
        "جلسة استشارة مالية احترافية لمدة 60 دقيقة مع خبير مالي.",
        "تحليل مالي شامل وتحديد أسباب الخسائر أو تباطؤ النمو",
        "توصيات عملية قابلة للتنفيذ مع ملخص تنفيذي مكتوب بعد الجلسة.",
      ],
    },
    {
      id: 3,
      title: "الحساب بالساعة",
      image: "/service3.png",
      description:
        "خدمة محاسبية مرنة تُنفذ حسب الحاجة، بدون التزام طويل المدى، وبما يناسب حجم عملك.",
      features: [
        "تنفيذ جميع المهام المحاسبية المطلوبة باحترافية",
        "مرونة كاملة حسب حجم العمل",
        "تسليم كافة الملفات والتقارير المحاسبية",
        "توفير الوقت والتكلفة",
      ],
    },
    {
      id: 4,
      title: "باقة المدير المالي",
      image: "/service4.png",
      description:
        "حل مالي متكامل لإدارة ومتابعة الشؤون المالية لمشروعك دون الحاجة لتعيين مدير مالي بدوام كامل.",
      features: [
        "الإشراف على محاسبي المنشأة أو تدريبهم وتقييم أدائهم",
        "تحليل البيانات المالية والتنبؤ بالأداء المستقبلي",
        "الإشراف على تطبيق معايير IFRS الدولية",
      ],
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className="
    bg-[#5078FF14]

    rounded-tr-[180px] sm:rounded-tr-[260px] md:rounded-tr-[300px] lg:rounded-tr-[336px]

    pt-10 sm:pt-14 md:pt-18 lg:pt-[82px]
    pb-14 sm:pb-20 md:pb-28 lg:pb-[120px]

    px-4 sm:px-6 md:px-10 lg:px-[80px]
    mb-8 sm:mb-12 md:mb-16 lg:mb-20

    -translate-x-0 sm:-translate-x-4 md:-translate-x-8 lg:-translate-x-16
  "
        >
          {/* Main Title + Description */}
          <div className="w-full text-left lg:text-right lg:mr-52">
            {/* Main Title */}
            <h2
              className="
      text-[#331B3B]
      font-almarai font-bold
      text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px]
      leading-[140%] tracking-[-0.01em]
    "
            >
              <span className="relative inline-block">
                حلول
                <span className="absolute left-0 -bottom-1 w-full h-[6px] sm:h-[7px] bg-[#5078FF]" />
              </span>
              وباقات إضافية
            </h2>

            {/* Description */}
            <p
              className="
      font-almarai font-normal
      text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
      leading-[1.6] tracking-[0.02em]
      text-[#331B3BA8]
      max-w-full lg:max-w-[920px]
      mt-4 sm:mt-5
    "
            >
              بحاجة إلى رأي خبير أو توجيه مالي واضح لاتخاذ القرار الصحيح قبل
              الاستثمار؟ خدماتنا المصممة خصيصًا لك تساعدك على رؤية الصورة
              المالية كاملة قبل أي خطوة.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className=" grid grid-cols-1 mt-0 lg:-mt-40 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 md:gap-5 lg:gap-2.5 ">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="bg-white shadow-2xl z-10 rounded-[24px] p-3 sm:p-4 md:p-5 flex flex-col h-full"
            >
              <div className="relative w-[260px] h-[120px] mx-auto">
                <div className="w-full h-full bg-[#5078FF] text-white flex items-center justify-center text-[22px] font-bold rounded-tl-[16px] rounded-tr-[16px] [clip-path:polygon(0_0,100%_0,100%_100%,0_70%)]  ">
                  {service?.title}
                </div>
              </div>
              <div className="transform transition-transform duration-500 ease-out hover:scale-110">
               <img 
                  src={service?.image} 
                  alt={service?.title}
                  className=" bottom-[-18px] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[166px] h-[100px] sm:h-[120px] md:h-[140px] lg:h-[150px] object-contain"
                />
</div>
              {/* Description */}
              <div className="flex-1 mb-6 sm:mb-8">
                <p className="text-right font-[Almarai] font-normal text-[18px] leading-[1.46] tracking-[0.02em] text-[#331B3BA8] w-[250px] h-[84px] opacity-100">
{service?.description}
</p>

              </div>

{/* Features */}
{Array.isArray(service?.features) || Array.isArray(service?.checklistFeatures) ? (
  <ul className=" ">
    {(service?.features ?? service?.checklistFeatures ?? []).map(
      (feature, index) => (
        <li
          key={index}
          className="flex items-start gap-2 text-right font-[Almarai] font-normal text-[17px] leading-[1.6] text-[#331B3BA8]"
        >
          <MdCheckCircle className="text-[#5078FF] w-[50px] text-[18px]" />
          <span>{feature}</span>
          
        </li>
      )
    )}
  </ul>
) : null}

<a href="#Contact">

              <button
                className=" block mx-auto bg-[#2C7EF3] transition text-white text-sm font-bold py-3 w-50 my-8 rounded-full hover:scale-110 cursor-pointer"
              >
                حجز استشارة مجانية الآن
              </button></a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
