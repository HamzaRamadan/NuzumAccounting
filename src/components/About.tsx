import React from "react";
import Logo from "../assets/images/logo.png";

const About = () => {
  return (
    <section dir="rtl" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE (LEFT on desktop) */}
        <div className="relative flex justify-center items-center lg:order-1">
          {/* dotted pattern */}
          <div className="absolute -bottom-8 -right-8 grid grid-cols-6 gap-2">
            {Array.from({ length: 36 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-[#2C7EF3] rounded-full opacity-60"
              />
            ))}
          </div>

          {/* blob background */}
          <div className="absolute w-[420px] h-[420px] bg-[#4F7CFF] rounded-[60%_40%_55%_45%]"></div>

          {/* image mask */}
          <div className="relative w-[380px] h-[380px] overflow-hidden rounded-[60%_40%_55%_45%] bg-white">
            <img src={Logo} alt="Team" className="w-full h-full object-cover" />
          </div>

          {/* dashed outline */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-gray-300"></div>
        </div>

        {/* TEXT SIDE (RIGHT on desktop) */}
        <div className="lg:order-2">
          <h2 className="font-Almarai font-extrabold text-[36px] leading-[52px] text-[#2D1B3F]">
            <span className="text-[#2C7EF3]">38%</span> من الشركات تفشل
            <br />
            بسبب الإدارة المالية
          </h2>

          <p className="mt-6 text-[16px] leading-[30px] text-[#6B6B6B] max-w-xl">
            إدارة الحسابات واحدة من أهم الإدارات داخل الشركة وهي المسؤولة عن
            التخطيط والتنظيم والتحليل والمحاسبة اليومية لأعمال الشركة.
          </p>

          <p className="mt-4 text-[16px] leading-[30px] text-[#6B6B6B] max-w-xl">
            الكثير من أصحاب الشركات يواجهون مشاكل متكررة بسبب عدم توفر الوقت أو
            الخبرة لإدارة العمليات المحاسبية مع عدم وجود إمكانية مالية لتعيين
            فريق عمل.
          </p>

          <p className="mt-4 text-[16px] leading-[30px] text-[#6B6B6B] max-w-xl">
            الآن يمكنك الاستغناء عن توظيف فريق والاستعانة بخدمة محاسبية عن بُعد
            من ربح.
          </p>

          <button className="mt-8 bg-[#2C7EF3] hover:bg-blue-600 transition text-white text-sm font-bold px-8 py-4 rounded-full">
            احجز استشارة مجانية الآن
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
