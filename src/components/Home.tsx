import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      dir="rtl"
     className=" relative w-full h-[90vh] bg-cover bg-no-repeat overflow-hidden bg-[10%_10%] md:bg-[50%_40%]"
      style={{
        backgroundImage: "url('/home.jpg')",
      }}

    >
      {/* Top Row */}
      <div
        dir="ltr"
        className="
          relative z-10
          flex flex-col items-center gap-6 -mt-4
          lg:flex-row lg:items-center lg:gap-[100px]
        "
      >
        {/* Logo */}
        <Link to="/">
        <img
          src="/EradaLogo-removebg-preview.png"
          alt="Erada Logo"
          className="
            w-52 h-52 object-contain
            lg:w-52 lg:h-52
            lg:translate-x-[40px]
            "
            />
            </Link>

        {/* Buttons */}
        <div
          className="
            flex items-center gap-1
            lg:-mt-3
            -mt-8     
          "
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+966564280855"
            target="_blank"
            className="
              flex items-center justify-center gap-2
              px-4 py-4
              w-[160px] h-[40px]
              lg:w-[180px] lg:h-[20px]
              bg-[#25D366]
              text-white text-[13px] font-medium
              rounded-l-[50px]
              hover:bg-[#1ebe5d]
              transition
            "
          >
            <FaWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
            راسلنا عبر الواتساب
          </a>

          {/* Phone Button */}
          <a
            href="tel:+966564280855"
            className="
              flex items-center justify-center gap-2
              px-4 py-4
              w-[160px] h-[40px]
              lg:w-[180px] lg:h-[20px]
              bg-[#5078FF]
              text-white text-[13px] font-medium
              rounded-r-[50px]
              hover:bg-[#3f66e0]
              transition
            "
          >
            <FaPhoneAlt className="w-4 h-4 lg:w-5 lg:h-5" />
            +966564280855
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#00000080]"></div>

      {/* Content */}
     <div
  className="
    relative z-10
    flex items-start mt-6
    justify-start             // الافتراضي للاب والفون
    sm:justify-start          // فون صغير
    md:justify-start            // تابليت: من 600px ل1024px على اليمين
    lg:mt-0 lg:h-full lg:justify-start  // اللاب
  "
>
  <div
    className="
      bg-transparent
    md:bg-[#1F2425]
      rounded-tl-[60px]
      w-[580px] h-[600px]
      flex flex-col justify-start
      text-right text-white
      p-12
      max-md:w-[90%] max-md:h-[500px]  // تصغير شويه على فون وتابلت
      max-md:p-6
    "
  >
    <h1 className="font-Almarai font-bold text-[19px] lg:text-[28px] mb-4 lg:mb-6">
      تعاني من مشاكل في الإدارة المالية؟
    </h1>

    <h1 className="font-Almarai font-extrabold text-[22px] lg:text-[35px] leading-[40px] lg:leading-[58px]">
      ريح بالك من إدارة حسابات شركتك
      <br />
      <span className="relative inline-block">
        مع إرادة للمحاسبة والضرائب  
        <span className="absolute right-0 top-0 w-[200px] lg:w-[350px] border-t-[10px] lg:border-t-[10px] border-[#2C7EF3]"></span>
      </span>
    </h1>

    <p className="font-Almarai text-[16px] lg:text-[20px] leading-[28px] lg:leading-[35px] text-[#B5C4E8] mt-4">
      نوفر لك جميع الخدمات المحاسبية عن بُعد، من إعداد التقارير المالية
      ومتابعة الضرائب وتحليل الأداء المالي وجميع الخدمات الأخرى.
    </p>
<a href="#Contact">
    <button className="bg-[#2C7EF3] transition px-7 py-3.5 rounded-full text-sm w-fit mt-10 lg:mt-10  transform
    hover:scale-110 cursor-pointer">
      احجز استشارة مجانية الآن
    </button>
</a>

  </div>
</div>

     
    </section>
  );
};

export default Home;









// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { Helmet } from "react-helmet-async";

// const Home = () => {
//   return (
//     <>
//       {/* SEO */}
//       <Helmet>
//         <title>نظم للمحاسبة | خدمات محاسبية متكاملة في السعودية</title>

//         <meta
//           name="description"
//           content="نظم للمحاسبة توفر خدمات محاسبية وضريبية متكاملة عن بُعد للشركات الناشئة والصغيرة والمتوسطة في السعودية."
//         />

//         <link rel="canonical" href="https://nuzum.com/" />

//         {/* Open Graph */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="نظم للمحاسبة | خدمات محاسبية متكاملة" />
//         <meta
//           property="og:description"
//           content="خدمات محاسبية وضريبية احترافية للشركات في السعودية"
//         />
//         <meta property="og:url" content="https://nuzum.com/" />
//         <meta property="og:image" content="https://nuzum.com/og-image.jpg" />

//         {/* Structured Data */}
//         <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "نظم للمحاسبة",
//             url: "https://nuzum.com",
//             description:
//               "خدمات محاسبية وضريبية متكاملة عن بُعد للشركات في السعودية",
//           })}
//         </script>
//       </Helmet>

//       <section
//         dir="rtl"
//         className="relative w-full h-[90vh] bg-cover bg-no-repeat overflow-hidden bg-[10%_10%] md:bg-[50%_40%]"
//         style={{
//           backgroundImage: "url('/home.jpg')",
//         }}
//       >
//         {/* Top Row */}
//         <div
//           dir="ltr"
//           className="
//             relative z-10
//             flex flex-col items-center gap-6 mt-2
//             lg:flex-row lg:items-center lg:gap-[170px]
//           "
//         >
//           {/* Logo */}
//           <img
//             src="/logo.png"
//             alt="نظم للمحاسبة – شركة خدمات محاسبية"
//             loading="lazy"
//             className="
//               w-24 h-24 object-contain
//               lg:w-32 lg:h-32
//               lg:translate-x-[80px]
//             "
//           />

//           {/* Buttons */}
//           <div
//             className="
//               flex items-center gap-1
//               lg:-mt-3
//             "
//           >
//             {/* WhatsApp Button */}
//             <a
//               href="https://wa.me/201090032086"
//               target="_blank"
//               aria-label="التواصل عبر واتساب مع نظم للمحاسبة"
//               className="
//                 flex items-center justify-center gap-2
//                 px-4 py-4
//                 w-[160px] h-[40px]
//                 lg:w-[180px] lg:h-[20px]
//                 bg-[#25D366]
//                 text-white text-[13px] font-medium
//                 rounded-l-[50px]
//                 hover:bg-[#1ebe5d]
//                 transition
//               "
//             >
//               <FaWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
//               راسلنا عبر الواتساب
//             </a>

//             {/* Phone Button */}
//             <a
//               href="tel:+201234567890"
//               aria-label="الاتصال بشركة نظم للمحاسبة"
//               className="
//                 flex items-center justify-center gap-2
//                 px-4 py-4
//                 w-[160px] h-[40px]
//                 lg:w-[180px] lg:h-[20px]
//                 bg-[#5078FF]
//                 text-white text-[13px] font-medium
//                 rounded-r-[50px]
//                 hover:bg-[#3f66e0]
//                 transition
//               "
//             >
//               <FaPhoneAlt className="w-4 h-4 lg:w-5 lg:h-5" />
//               +201234567890
//             </a>
//           </div>
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#00000080]"></div>

//         {/* Content */}
//         <div
//           className="
//             relative z-10
//             flex items-start mt-6
//             justify-start
//             sm:justify-start
//             md:justify-start
//             lg:mt-0 lg:h-full lg:justify-start
//           "
//         >
//           <div
//             className="
//               bg-transparent
//               md:bg-[#1F2425]
//               rounded-tl-[60px]
//               w-[580px] h-[600px]
//               flex flex-col justify-start
//               text-right text-white
//               p-12
//               max-md:w-[90%] max-md:h-[500px]
//               max-md:p-6
//             "
//           >
//             {/* h1 واحد فقط (SEO) */}
//             <h1 className="font-Almarai font-extrabold text-[22px] lg:text-[35px] leading-[40px] lg:leading-[58px] mb-4">
//               ريح بالك من إدارة حسابات شركتك
//               <br />
//               <span className="relative inline-block">
//                 مع ربح
//                 <span className="absolute right-0 top-0 w-[180px] lg:w-[200px] border-t-[10px] lg:border-t-[20px] border-[#2C7EF3]"></span>
//               </span>
//             </h1>

//             <h2 className="font-Almarai font-bold text-[19px] lg:text-[28px] mb-6">
//               تعاني من مشاكل في الإدارة المالية؟
//             </h2>

//             <p className="font-Almarai text-[16px] lg:text-[20px] leading-[28px] lg:leading-[35px] text-[#B5C4E8] mt-4">
//               نوفر لك جميع الخدمات المحاسبية عن بُعد، من إعداد التقارير المالية
//               ومتابعة الضرائب وتحليل الأداء المالي وجميع الخدمات الأخرى.
//             </p>

//             <a href="#Contact">
//               <button
//                 aria-label="احجز استشارة محاسبية مجانية"
//                 className="bg-[#2C7EF3] transition px-7 py-3.5 rounded-full text-sm w-fit mt-16 lg:mt-10 transform hover:scale-110 cursor-pointer"
//               >
//                 احجز استشارة مجانية الآن
//               </button>
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;
