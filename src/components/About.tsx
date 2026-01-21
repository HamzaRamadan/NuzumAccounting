import Logo from "../assets/images/Mask Group.png";

const About = () => {
  return (
    <section dir="rtl" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SIDE (LEFT on desktop) */}
   
<div className="relative w-[500px] h-[500px] md:h-[500px]">
  {/* الخلفية */}
  <div
    className="absolute top-[5px] left-[5px] w-[350px] h-[350px] bg-contain bg-no-repeat bg-center"
    style={{ backgroundImage: "url('/Vector 9.png')" }}
  ></div>

  {/* الصورة العلوية */}
  <img
    src={Logo}
    alt="Overlay"
    className="absolute top-1/3 left-1/3 w-[600px] md:w-[600px] -translate-x-1/2 -translate-y-1/2"
  />
   <div className="absolute -left-10 top-10 grid grid-cols-4 gap-2">
        {Array.from({ length: 36 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 bg-gray-300 rounded-full opacity-60"
          />
        ))}
      </div>

      <div className="absolute right-30 bottom-12 grid grid-cols-5 gap-2">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="w-2 h-2 bg-[#2C7EF3] rounded-full opacity-80"
          />
        ))}
      </div>
</div>










        {/* TEXT SIDE (RIGHT on desktop) */}
<div className="lg:order-2 flex flex-col items-start text-right">
          <h2 className="font-Almarai font-extrabold text-[30px] leading-[52px] text-[#2D1B3F]">
            38% من الشركات تفشل
            <br />
            بسبب الإدارة المالية
          </h2>

          <p className="mt-6 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
            إدارة الحسابات واحدة من أهم الإدارات داخل الشركة وهي المسؤولة عن
            التخطيط والتنظيم والتحليل والمحاسبة اليومية لأعمال الشركة.
          </p>

          <p className="mt-4 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
           الكثير من أصحاب الشركات يواجهون مشاكل متكررة بسبب عدم توافر الوقت أو الخبرة لإدارة العمليات المحاسبية مع عدم وجود إمكانية مالية تسمح لهم بتوظيف فريق عمل.
          </p>

          <p className="mt-4 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
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











// import Logo from "../assets/images/Mask Group.png";

// const About = () => {
//   return (
//     <section dir="rtl" className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//         {/* IMAGE SIDE (LEFT on desktop) */}
   
// <div className="relative w-[500px] h-[500px] md:h-[500px]">
//   {/* الخلفية */}
//   <div
//     className="absolute top-[5px] left-[5px] w-[350px] h-[350px] bg-contain bg-no-repeat bg-center"
//     style={{ backgroundImage: "url('/Vector 9.png')" }}
//   ></div>

//   {/* الصورة العلوية */}
//   <img
//     src={Logo}
//     alt="Overlay"
//     className="absolute top-1/3 left-1/3 w-[600px] md:w-[600px] -translate-x-1/2 -translate-y-1/2"
//   />
// </div>










//         {/* TEXT SIDE (RIGHT on desktop) */}
// <div className="lg:order-2 flex flex-col items-start text-right">
//           <h2 className="font-Almarai font-extrabold text-[30px] leading-[52px] text-[#2D1B3F]">
//             38% من الشركات تفشل
//             <br />
//             بسبب الإدارة المالية
//           </h2>

//           <p className="mt-6 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
//             إدارة الحسابات واحدة من أهم الإدارات داخل الشركة وهي المسؤولة عن
//             التخطيط والتنظيم والتحليل والمحاسبة اليومية لأعمال الشركة.
//           </p>

//           <p className="mt-4 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
//            الكثير من أصحاب الشركات يواجهون مشاكل متكررة بسبب عدم توافر الوقت أو الخبرة لإدارة العمليات المحاسبية مع عدم وجود إمكانية مالية تسمح لهم بتوظيف فريق عمل.
//           </p>

//           <p className="mt-4 text-[16px] leading-[30px] text-[#331B3BA8] max-w-[450px]">
//             الآن يمكنك الاستغناء عن توظيف فريق والاستعانة بخدمة محاسبية عن بُعد
//             من ربح.
//           </p>

//           <button className="mt-8 bg-[#2C7EF3] hover:bg-blue-600 transition text-white text-sm font-bold px-8 py-4 rounded-full">
//             احجز استشارة مجانية الآن
//           </button>
//         </div>
//       </div>

      
//     </section>
//   );
// };

// export default About;











