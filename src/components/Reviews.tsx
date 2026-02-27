// import  { useRef } from 'react';
import FormReviews from './FormReviews';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: "بايجون",
      time: "منذ يومين",
      rating: 5,
      content: `الحمدلله كنت ابحث عن مكتب يشيل عني تعب الحسابات والضريبة 
مرة كويس بالتوفيق باذن الله`,
      avatar: "/images/img_19399522241579780463.svg"
    },
    
  ];

  // const carouselRef = useRef<HTMLDivElement>(null); // ✅ النوع محدد

  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // };

  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="relative inline-block mb-8 sm:mb-12">
            <div className="bg-[#F1F4FF] rounded-full w-[100px] sm:w-[80px] md:w-[100px] lg:w-[100px] h-[100px] sm:h-[80px] md:h-[100px] lg:h-[100px] absolute top-5 left-2 lg:top-14 lg:-left-8" />
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#331b3b] text-center relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20"
              style={{ fontFamily: 'Almarai', lineHeight: '1.2' }}
            >
              شاركنا رأيك في تجربتك معنا
            </h2>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          <div 
            // ref={carouselRef}
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-[68px] overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews?.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-4 sm:p-5 md:p-6 lg:p-[24px] flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[448px] min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[310px]"
                style={{ boxShadow: '0px 0px 7px #00000014' }}
              >
                <div className="flex flex-col h-full">
                  {/* Avatar */}
                  <div className="flex justify-start mb-3 sm:mb-4">
                    <img 
                      src="/Qoute.png"
                      alt="User Avatar"
                      className="w-[30px] sm:w-[30px] md:w-[30px] h-[30px] sm:h-[30px] md:h-[30px] object-contain"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1 mb-4 sm:mb-6">
                    <p 
                      className="text-sm sm:text-base md:text-lg text-[#331b3b] text-right leading-relaxed"
                      style={{ fontFamily: 'Almarai' }}
                    >
                      {review.content}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                   
                   <div className="flex items-center gap-1 sm:gap-2">
  {/* الخط الأزرق */}
  <span className="w-[15px] h-[3px]  bg-blue-600 rounded-full"></span>

  {/* الاسم */}
  <span
    className="text-sm sm:text-base md:text-lg font-bold text-black"
    style={{ fontFamily: "Almarai" }}
  >
    {review.author}
  </span>
</div>
 <span className="text-xs sm:text-sm font-bold text-[#979797]" style={{ fontFamily: 'Almarai' }}>
                      {review.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center gap-6 mt-4">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5078FF] text-white hover:bg-blue-600"
            >
              &#8592;
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5078FF] text-white hover:bg-blue-600"
            >
              &#8594;
            </button>
          </div> */}
        </div>

        {/* Review Form */}
     <FormReviews />
        

        {/* Guarantee Section */}
        {/* Full width background */}
<div className="relative mt-20 left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#D9D9D929] py-2 sm:py-5 md:py-5 lg:py-[2px]">  
  <div className="w-full ">
    
    <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-4">
      
      {/* الصورة */}
      <div className="flex-shrink-0">
        <img
          src="/golden_guarantee.png"
          alt="Guarantee Badge"
          className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[172px] h-auto object-contain mr-0 lg:mr-30"
        />
      </div>

      {/* النص */}
      <div className="flex-1 text-right">
        <h3
          className="text-xl w-[80%] mx-auto  sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#331b3b] leading-tight"
          style={{ fontFamily: 'Almarai' }}
        >
          ضمان استرداد 100٪ من الأموال في حال عدم الرضا عن الخدمة.
        </h3>
      </div>

    </div>

  </div>
</div>



      </div>
    </section>
  );
};

export default Reviews;
