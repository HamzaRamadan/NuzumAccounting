const WhoAre = () => {
  return (
    <section
      dir="rtl"
      className="relative w-full pt-[90px] pb-[110px] overflow-hidden"
    >
      {/* الدائرة الخلفية */}
      <div className="absolute top-[10px] left-[-180px] w-[100%] h-[400px] bg-[#5078FF14] rounded-full" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* العنوان الرئيسي */}
        <div className="flex flex-col items-center mb-[70px] relative">
          <div className="relative inline-block">
            <h1 className="font-almarai font-extrabold text-[48px] leading-[106%] tracking-[-1%] text-center w-[184px] h-[51px] opacity-100">
              من نحن؟
            </h1>

            <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-[220px] h-[60px] border-2 border-[#3B82F6] rounded-full" />
          </div>

          <p className="mt-6 font-almarai font-normal text-[18px] text-[#331B3BA8] leading-[146%] tracking-[2%] text-center max-w-[662px] opacity-100">
            تعرف على رسالتنا، رؤيتنا، والقيم التي نعمل بها
          </p>
        </div>

        {/* الجزء الأول: رؤيتنا و خبرتنا */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_700px] gap-[16px] justify-start">
          {/* رؤيتنا */}
          
          <div className="w-full h-[350px] bg-[#E9E9E9] rounded-[18px] px-[42px] flex flex-col justify-center">
            <h3 className="font-almarai font-bold text-[50px] leading-[148%] tracking-[-0.01em] text-right text-[#322536] opacity-100">
              رؤيتنا
            </h3>

            <p className="font-almarai font-bold text-[16px] leading-[146%] tracking-[0] text-right text-[#322536] opacity-100">
              نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ قرارات أفضل.
            </p>
          </div>

          {/* خبرتنا */}
          <div className="relative w-full h-[310px] rounded-[18px] overflow-hidden">
            <img
              src="/Who1.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 px-[28px] pt-[26px] flex flex-col items-start text-left">
              <h3 className="font-almarai font-bold text-[50px] leading-[148%] tracking-[-0.01em] text-right text-white opacity-100">
                خبرتنا
              </h3>

              <p className="font-almarai font-bold text-[20px] leading-[146%] tracking-[0] text-right text-white opacity-100 max-w-[480px]">
                نقدم استشارات مبنية على خبرة ومعرفة عملية لمساعدتك في اتخاذ قرارات أفضل.
              </p>
            </div>
          </div>
        </div>

        {/* الجزء الثاني: قيمنا و هدفنا */}
        <div className="grid grid-cols-1 lg:grid-cols-[700px_300px] gap-[20px] mt-[30px] justify-start">
          {/* قيمنا */}
          <div className="relative w-full h-[310px] rounded-[18px] overflow-hidden">
            <img
              src="/Who2.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 px-[28px] pb-[26px] flex flex-col justify-end">
              <h3 className="font-almarai font-bold text-[50px] leading-[148%] tracking-[-0.01em] text-right text-white">
                قيمنا
              </h3>

              <p className="font-almarai font-bold text-[20px] leading-[146%] text-right text-white max-w-[450px]">
                نلتزم بالاحترافية، السرية، وبناء علاقات قائمة على الثقة.
              </p>
            </div>
          </div>


          {/* هدفنا */}
          <div className="w-full h-[300px] lg:-mt-10 bg-[#F1F4FF] rounded-[18px] px-[42px] flex flex-col justify-start">
            <h3 className="font-almarai font-bold text-[50px] leading-[148%] tracking-[-0.01em] text-right text-[#322536]">
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
