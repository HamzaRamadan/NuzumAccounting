
const Partners = () => {
  const partners = [
    {
      id: 1,
      image: "/company3.png",
      alt: "Partner 1",
    },
    {
      id: 2,
      image: "/company4.png",
      alt: "Partner 2",
    },
    {
      id: 3,
      image: "/company1.png",
      alt: "Partner 3",
    },
    {
      id: 4,
      image: "/company2.png",
      alt: "Partner 4",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-5 lg:py-5">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Main Title */}
          <h2
            className="
    text-[#331B3B]
    font-almarai font-bold
    text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px]
    leading-[140%] tracking-[-0.01em] mx-auto
  "
          >
            شركاء{" "}
            <span className="relative inline-block">
              النجاح
              <span className="absolute left-0 -bottom-1 w-full h-[6px] sm:h-[7px] bg-[#5078FF]" />
            </span>
          </h2>
        </div>

        {/* Partners Container */}
<div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#D9D9D929] py-8 sm:py-10 md:py-12 lg:py-[50px]">
 <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-4
    items-center
    justify-items-center
    gap-8 sm:gap-12 md:gap-16 lg:gap-20
    px-4 sm:px-8 md:px-12 lg:px-[276px]
  "
>
  {partners?.map((partner) => (
    <div key={partner?.id} className="transform transition-transform duration-500 ease-out hover:scale-110">
      <img
        src={partner?.image}
        alt={partner?.alt}
        className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain transition-all duration-300"
      />
    </div>
  ))}
</div>

</div>

      </div>
    </section>
  );
};

export default Partners;
