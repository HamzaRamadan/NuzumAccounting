const FloatingFeatures = () => {
  return (
    <div className="relative z-20 flex justify-center">
      <div
        className="
          translate-y-0 lg:-translate-y-1/2
          bg-white rounded-2xl shadow-xl

          flex flex-col items-center gap-4
          px-6 py-6 w-[90%] text-center

          lg:flex-row lg:gap-16
          lg:px-20 lg:py-8 lg:w-auto
        "
      >
        <div className="flex items-center gap-3 text-sm">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2C7EF3] text-white font-bold">
            1
          </span>
          <p className="font-Almarai font-bold text-[16px] text-[#322536]">
            دعم على مدار الساعة
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2C7EF3] text-white font-bold">
            2
          </span>
          <p className="font-Almarai font-bold text-[16px] text-[#322536]">
            أنظمة وباقات مختلفة
          </p>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#2C7EF3] text-white font-bold">
            3
          </span>
          <p className="font-Almarai font-bold text-[16px] text-[#322536]">
            استشارة مجانية
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default FloatingFeatures;
