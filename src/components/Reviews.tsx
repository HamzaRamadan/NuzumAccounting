// import React from 'react';

// const Reviews = () => {
//   const reviews = [
//     {
//       id: 1,
//       author: "بايجون",
//       time: "منذ يومين",
//       rating: 5,
//       content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
//       avatar: "/images/img_19399522241579780463.svg"
//     },
//     {
//       id: 2,
//       author: "بايجون",
//       time: "منذ يومين",
//       rating: 5,
//       content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
//       avatar: "/images/img_19399522241579780463.svg"
//     },
//     {
//       id: 3,
//       author: "بايجون",
//       time: "منذ يومين",
//       rating: 5,
//       content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
//       avatar: "/images/img_19399522241579780463.svg"
//     }
//   ];

//   return (
//     // <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
//     <section className="w-full -pt-20 pb-12 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 -lg:pt-52 -lg:pb-52">

//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
// <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
//           <div className="relative inline-block mb-8 sm:mb-12">
//             <div className="bg-[#F1F4FF] rounded-full w-[100px] sm:w-[80px] md:w-[100px] lg:w-[100px] h-[100px] sm:h-[80px] md:h-[100px] lg:h-[100px] absolute top-5 left-2 lg:top-14 lg:-left-8" />
//             <h2
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#331b3b] text-center relative z-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20"
//               style={{
//                 fontFamily: "Almarai",
//                 lineHeight: "1.2",
//               }}
//             >
//               شاركنا رأيك في تجربتك معنا
//             </h2>
//           </div>
//         </div>
//         {/* Reviews Container */}
//         <div className="mb-12 sm:mb-16 md:mb-20">
//           <div 
//             className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-[68px] overflow-x-auto pb-4 scrollbar-hide"
//             style={{ 
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none'
//             }}
//           >
//             {reviews?.map((review) => (
//               <div
//                 key={review?.id}
//                 className="bg-white rounded-lg p-4 sm:p-5 md:p-6 lg:p-[24px] flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[448px] min-h-[250px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[310px]"
//                 style={{ 
//                   boxShadow: '0px 0px 7px #00000014'
//                 }}
//               >
//                 <div className="flex flex-col h-full">
//                   {/* Avatar */}
//                   <div className="flex justify-start mb-3 sm:mb-4">
//                     <img 
//                       src="/Qoute.png"
//                       alt="User Avatar"
//                       className="w-[30] sm:w-[30px] md:w-[30px] h-[30px] sm:h-[30px] md:h-[30px] object-contain"
//                     />
//                   </div>

//                   {/* Review Content */}
//                   <div className="flex-1 mb-4 sm:mb-6">
//                     <p 
//                       className="text-sm sm:text-base md:text-lg text-[#331b3b] text-right leading-relaxed"
//                       style={{ fontFamily: 'Almarai' }}
//                     >
//                       {review?.content}
//                     </p>
//                   </div>

//                   {/* Footer */}
//                   <div className="flex items-center justify-between">
//                     <span 
//                       className="text-xs sm:text-sm font-bold text-[#979797]"
//                       style={{ fontFamily: 'Almarai' }}
//                     >
//                       {review?.time}
//                     </span>
                    
//                     <div className="flex items-center gap-1 sm:gap-2">
//                       <span 
//                         className="text-sm sm:text-base md:text-lg font-bold text-black"
//                         style={{ fontFamily: 'Almarai' }}
//                       >
//                         {review?.author}
//                       </span>
//                       <img 
//                         src="/images/img_vector_4.svg" 
//                         alt="Verified" 
//                         className="w-[6px] sm:w-[8px] md:w-[10px] h-[2px] sm:h-[2px] md:h-[3px]"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

       

//         {/* Review Form */}
//         <div className="max-w-[800px] mx-auto">
//           <div className="flex flex-col items-end text-right space-y-4 sm:space-y-6">
//             {/* Rating Section */}
//             <div>
//               <h3 
//                 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black mb-2 sm:mb-3"
//                 style={{ fontFamily: 'Cairo' }}
//               >
//                 تقييمك العام
//               </h3>
             
//             </div>

//             {/* Name Input */}
//             <div 
//               className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-3 sm:p-4 md:p-[18px]"
//             >
//               <input 
//                 type="text"
//                 placeholder="الاسم كامل"
//                 className="w-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none"
//                 style={{ fontFamily: 'Cairo' }}
//               />
//             </div>

//             {/* Comment Textarea */}
//             <div 
//               className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-4 sm:p-5 md:p-[20px] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
//             >
//               <textarea 
//                 placeholder="اكتب رأيك هنا..."
//                 className="w-full h-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none resize-none"
//                 style={{ fontFamily: 'Cairo' }}
//               />
//             </div>

       
//           </div>
//         </div>

//         {/* Guarantee Section */}
//         <div 
//           className="bg-[#d9d9d928] rounded-lg py-6 sm:py-8 md:py-10 lg:py-[28px] px-4 sm:px-6 md:px-8 lg:px-[28px] mt-12 sm:mt-16 md:mt-20 lg:mt-24"
//         >
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
//             <div className="flex-1 text-right order-2 lg:order-1">
//               <h3 
//                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#331b3b] leading-tight"
//                 style={{ fontFamily: 'Almarai' }}
//               >
//                 ضمان استرداد 100٪ من الأموال في حال عدم الرضا عن الخدمة.
//               </h3>
//             </div>
//             <div className="flex-shrink-0 order-1 lg:order-2">
//               <img 
//                 src="/images/img_rectangle_3465181.png" 
//                 alt="Guarantee Badge" 
//                 className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[172px] h-auto object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;





import React, { useRef } from 'react';
import RatingBar from './ui/RatingBar';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: "بايجون",
      time: "منذ يومين",
      rating: 5,
      content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
      avatar: "/images/img_19399522241579780463.svg"
    },
    {
      id: 2,
      author: "بايجون",
      time: "منذ يومين",
      rating: 5,
      content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
      avatar: "/images/img_19399522241579780463.svg"
    },
    {
      id: 3,
      author: "بايجون",
      time: "منذ يومين",
      rating: 5,
      content: "الحمدللة كنت ابحث عن مكتب يخلص لي قوائم مالية للاعلان عن افلاس شركة والحمدللة رتب لي الامور مع المحاسب القانوني وتمت باسرع وافضل وقت",
      avatar: "/images/img_19399522241579780463.svg"
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null); // ✅ النوع محدد

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-[68px] overflow-x-auto pb-4 scrollbar-hide"
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
                    <span className="text-xs sm:text-sm font-bold text-[#979797]" style={{ fontFamily: 'Almarai' }}>
                      {review.time}
                    </span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-sm sm:text-base md:text-lg font-bold text-black" style={{ fontFamily: 'Almarai' }}>
                        {review.author}
                      </span>
                      <img 
                        src="/images/img_vector_4.svg" 
                        alt="Verified" 
                        className="w-[6px] sm:w-[8px] md:w-[10px] h-[2px] sm:h-[2px] md:h-[3px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center gap-6 mt-4">
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
          </div>
        </div>

        {/* Review Form */}
        <div className="max-w-[800px] mx-auto">
          <div className="flex flex-col items-start text-right space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black mb-2 sm:mb-3" style={{ fontFamily: 'Cairo' }}>
                تقييمك العام
              </h3>
                <RatingBar 
                rating={4} 
                layout_width="auto"
                margin="0"
                position="relative"
                variant="default"
                size="medium"
                onRatingChange={() => {}}
                className=""
              />
            </div>

            <div className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-3 sm:p-4 md:p-[18px]">
              <input 
                type="text"
                placeholder="الاسم كامل"
                className="w-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none"
                style={{ fontFamily: 'Cairo' }}
              />
            </div>

            <div className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-4 sm:p-5 md:p-[20px] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
              <textarea 
                placeholder="اكتب رأيك هنا..."
                className="w-full h-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none resize-none"
                style={{ fontFamily: 'Cairo' }}
              />
            </div>
          <button
  className="w-[201px] h-[60px] rounded-[30px] text-white text-[16px] font-bold leading-[16px] tracking-[0px]"
  style={{ 
    backgroundColor: '#2C7EF3',
    fontFamily: 'Almarai',
  }}
>
  إرسال التقييم
</button>

          </div>
        </div>

        {/* Guarantee Section */}
        {/* Full width background */}
<div className="relative mt-20 left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#D9D9D929] py-2 sm:py-5 md:py-5 lg:py-[2px]">  
  <div className="w-full ">
    
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
      
      {/* الصورة */}
      <div className="flex-shrink-0">
        <img
          src="/golden_guarantee.png"
          alt="Guarantee Badge"
          className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[172px] h-auto object-contain"
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
