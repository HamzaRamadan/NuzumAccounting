import Logo from "../assets/images/Mask Group.png";

const About = () => {
  return (
    <section dir="rtl" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SIDE (اللابتوب زي ما هو) */}
     <div className="w-full max-lg:flex max-lg:justify-center overflow-visible">
  <div
    className="
      relative
      w-[500px] h-[500px]
      max-lg:w-[320px] max-lg:h-[320px]
      max-lg:translate-x-[40px]
    "
  >
    {/* النقط الرمادي */}
    <div
      className="
        absolute -left-10 top-5
        grid grid-cols-10 gap-3 z-0
        max-lg:scale-75
      "
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <span key={i} className="w-1 h-1 bg-[#D7D7D7] opacity-60" />
      ))}
    </div>

    {/* النقط الزرقا */}
    <div
      className="
        absolute right-32 bottom-36
        grid grid-cols-10 gap-3 z-0
        max-lg:scale-75
        max-lg:right-16
        max-lg:bottom-16
      "
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <span key={i} className="w-1 h-1 bg-[#2C7EF3] opacity-80" />
      ))}
    </div>

    {/* الخلفية */}
    <div
      className="
        absolute top-[5px] left-[5px]
        w-[350px] h-[350px]
        bg-contain bg-no-repeat bg-center z-10
        max-lg:w-[220px] max-lg:h-[220px]
      "
      style={{ backgroundImage: "url('/Vector 9.png')" }}
    />

    {/* الصورة */}
    <img
      src={Logo}
      alt="Overlay"
      className="
        absolute top-1/3 left-1/3
        w-[600px]
        -translate-x-1/2 -translate-y-1/2
        z-20
        max-lg:w-[340px]
      "
    />
  </div>
</div>


        {/* TEXT SIDE */}
        <div className="
          lg:order-2
          flex flex-col
          items-start
          max-lg:items-center
          text-right
          max-lg:text-center
        ">

          <h2 className="
            font-Almarai font-bold
            text-[35px] leading-[52px]
            text-[#2D1B3F]
            max-lg:text-[26px]
            max-lg:leading-[40px]
          ">
            38% من الشركات تفشل
            <br />
            بسبب الإدارة{" "}
            <span className="relative inline-block">
              المالية
              <span className="absolute left-0 -bottom-1 w-full h-[7px] bg-[#2C7EF3]" />
            </span>
          </h2>

          <p className="
            mt-6 text-[16px] leading-7.5
            text-[#331B3BA8] max-w-[450px]
            max-lg:text-[15px]
          ">
            إدارة الحسابات واحدة من أهم الإدارات داخل الشركة وهي المسؤولة عن
            التخطيط والتنظيم والتحليل والمحاسبة اليومية لأعمال الشركة.
          </p>

          <p className="
            mt-4 text-[16px] leading-7.5
            text-[#331B3BA8] max-w-[450px]
            max-lg:text-[15px]
          ">
            الكثير من أصحاب الشركات يواجهون مشاكل متكررة بسبب عدم توافر الوقت أو
            الخبرة لإدارة العمليات المحاسبية مع عدم وجود إمكانية مالية تسمح لهم
            بتوظيف فريق عمل.
          </p>

          <p className="
            mt-4 text-[16px] leading-7.5
            text-[#331B3BA8] max-w-[450px]
            max-lg:text-[15px]
          ">
            الآن يمكنك الاستغناء عن توظيف فريق والاستعانة بخدمة محاسبية عن بُعد
            من اراده للمحاسبه والضرايب.
          </p>
<a href="#Contact">

          <button className=" mt-8 bg-[#2C7EF3]  transition text-white text-sm font-bold px-8 py-4 rounded-full hover:scale-110 cursor-pointer ">
            حجز استشارة مجانية الآن
          </button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
