/* eslint-disable no-irregular-whitespace */

const TestimonialsSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-10 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="flex flex-col items-center gap-2 sm:gap-2">
            <h2
              className="text-[#331B3B] font-extrabold text-[30px] leading-[111%] tracking-[-0.01em] text-center"
              style={{ fontFamily: "Almarai" }}
            >
              <span className="relative inline-block">
                ماذا يقول
                <span className="absolute left-0 -bottom-2 w-full h-[6px] sm:h-[7px] bg-[#5078FF]" />
              </span>{" "}
              عنا عملاؤنا؟
            </h2>

            <p
              className="text-center text-[#331B3BCF] font-normal text-[20px] leading-[146%] tracking-[2%] max-w-[866px] mx-auto"
              style={{ fontFamily: "Almarai" }}
            >
              نفتخر بثقة عملائنا وسعداء بتجاربهم معنا. <br />
              فيما يلي بعض آراء عملائنا الذين تعاملوا معنا في إعداد وتجهيز
              القوائم المالية، وتنظيم
              <br />
              الحسابات، وتقديم الاستشارات المحاسبية.
            </p>
          </div>
        </div>

        {/* ===== نسخة الفون والتابلت ===== */}
        <div className="block lg:hidden relative w-full max-w-[1200px] mx-auto">
          {/* Main testimonial image */}
          <img
            src="/58a5a77e094599bee79b71809a79f9ad070b5713.png"
            alt="Main Testimonial"
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg border-8 border-[#5078FF] mb-4"
          />

          {/* Right column */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4 mb-4">
            <img
              src="/520ec9c16da607bd3a62e20f19db61aeffb71803.png"
              alt="Testimonial 1"
              className="w-full h-[120px] sm:h-[180px] md:h-[250px] object-cover rounded-lg border-8 border-[#5078FF]"
            />
            <img
              src="/4a6371a82e80301be33417f11564dd43292e64ee.png"
              alt="Testimonial 2"
              className="w-full h-[80px] sm:h-[130px] md:h-[180px] object-cover rounded-lg border-8 border-[#5078FF]"
            />
          </div>

          {/* Left column */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-4">
            <img
              src="/65b2a14b0775e5bae9ef090a7ed3e01810a53a65.png"
              alt="Testimonial 3"
              className="w-full h-[200px] sm:h-[350px] md:h-[450px] object-cover rounded-lg border-8 border-[#5078FF]"
            />
          </div>
        </div>

        {/* ===== نسخة اللاب ===== */}
        <div className="hidden lg:block relative w-full max-w-[1200px] mx-auto h-[1712px]">
          <div className="relative w-full max-w-[1200px] mx-auto h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[1712px]">
            {/* Main testimonial image - right side */}
            <img
              src="/58a5a77e094599bee79b71809a79f9ad070b5713.png"
              alt="Main Testimonial"
              className="absolute border-8 border-[#5078FF] top-0 right-0 w-[45%] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[652px] object-cover rounded-lg"
            />

            {/* Right column */}
            <div className="absolute top-[320px] sm:top-[480px] md:top-[600px] lg:top-[660px] right-0 flex flex-col gap-4 sm:gap-2 md:gap-2 lg:gap-[10px] w-[60%]">
              <img
                src="/520ec9c16da607bd3a62e20f19db61aeffb71803.png"
                alt="Testimonial 1"
                className="w-full border-8 border-[#5078FF] h-[150px] sm:h-[220px] md:h-[280px] lg:h-[320px] object-cover rounded-lg"
              />
              <img
                src="/4a6371a82e80301be33417f11564dd43292e64ee.png"
                alt="Testimonial 2"
                className="w-full border-8 border-[#5078FF] h-[100px] sm:h-[150px] md:h-[200px] lg:h-[222px] object-cover rounded-lg"
              />
            </div>

            {/* Left column */}
            <div className="absolute top-[350px] sm:top-[500px] md:top-[500px] -ml-20 lg:top-[550px] left-0 flex flex-col  w-[45%]">
              <img
                src="/65b2a14b0775e5bae9ef090a7ed3e01810a53a65.png"
                alt="Testimonial 3"
                className="w-full border-8 border-[#5078FF] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[646px] object-cover rounded-lg"
              />
            </div>

            {/* Additional left testimonials */}
            <div className="absolute top-0  sm:-left-10 flex flex-col gap-2 sm:gap-2 md:gap-2 -ml-10 w-[60%]">
              <img
                src="/674eb128b4428d1226067603075086ffb0185638.png"
                alt="Testimonial 5"
                className="w-full border-8 border-[#5078FF] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[262px] object-cover rounded-lg"
              />
              <img
                src="/674eb128b4428d1226067603075086ffb0185638.png"
                alt="Testimonial 6"
                className="w-full border-8 border-[#5078FF] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[262px] object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-0  sm:-left-10 flex flex-col gap-2 sm:gap-2 md:gap-2 -ml-10 w-[60%]">
              <img
                src="/674eb128b4428d1226067603075086ffb0185638.png"
                alt="Testimonial 5"
                className="w-full border-8 border-[#5078FF] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[262px] object-cover rounded-lg"
              />
              <img
                src="/674eb128b4428d1226067603075086ffb0185638.png"
                alt="Testimonial 6"
                className="w-full border-8 border-[#5078FF] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[262px] object-cover rounded-lg"
              />
            </div>
            {/* New image at the bottom */}
            <div className="absolute bottom-44 -ml-52  transform -translate-x-1/2 w-[300px] sm:w-[450px] md:w-[600px] lg:w-[700px] h-[150px] sm:h-[220px] md:h-[300px] lg:h-[300px]">
              <img
                src="/4a6371a82e80301be33417f11564dd43292e64ee.png"
                alt="Bottom Testimonial"
                className="w-full h-full object-cover rounded-lg border-8 border-[#5078FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
