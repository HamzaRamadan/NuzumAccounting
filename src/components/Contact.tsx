import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultation: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <form 
              onSubmit={handleSubmit}
              className="border border-[#8c94a34f] rounded-[50px] p-8 sm:p-10 md:p-12 lg:p-[50px] bg-white"
            >
              <div className="space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="flex flex-col items-end">
                  <label 
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    <span>الاسم</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div 
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[12px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <input
                      type="text"
                      value={formData?.name}
                      onChange={(e) => handleInputChange('name', e?.target?.value)}
                      placeholder="ماريا الضبع"
                      className="w-full bg-transparent text-right text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: 'Almarai' }}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col items-end">
                  <label 
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    <span>البريد الإلكتروني</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div 
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[12px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <input
                      type="email"
                      value={formData?.email}
                      onChange={(e) => handleInputChange('email', e?.target?.value)}
                      placeholder="maria@gmail.com"
                      className="w-full bg-transparent text-right text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: 'Almarai' }}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="flex flex-col items-end">
                  <label 
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    <span>رقم هاتفك</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div 
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[8px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 px-1">
                        <img src="/images/img_ic_round_arrow_left.svg" alt="Arrow" className="w-5 h-5 sm:w-6 sm:h-6" />
                        <img src="/images/img_twemoji_flag_egypt.svg" alt="Egypt Flag" className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <input
                        type="tel"
                        value={formData?.phone}
                        onChange={(e) => handleInputChange('phone', e?.target?.value)}
                        placeholder="+2012343545454"
                        className="flex-1 bg-transparent text-right text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                        style={{ fontFamily: 'Almarai' }}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Field */}
                <div className="flex flex-col items-end">
                  <label 
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: 'Almarai' }}
                  >
                    <span>نبذة عن الاستشارة</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div 
                    className="w-full rounded-lg p-4 sm:p-6 md:p-[56px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <textarea
                      value={formData?.consultation}
                      onChange={(e) => handleInputChange('consultation', e?.target?.value)}
                      placeholder="اضف تفاصيل رسالتك هنا...."
                      rows={4}
                      className="w-full bg-transparent text-right text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none resize-none"
                      style={{ fontFamily: 'Almarai' }}
                      required
                    />
                  </div>
                </div>

              

                {/* Disclaimer */}
                <p 
                  className="text-center text-sm sm:text-base md:text-lg text-[#8c94a3] leading-relaxed"
                  style={{ fontFamily: 'Almarai' }}
                >
                  نقبل عدد محدود جداً من الشركات شهرياً
                </p>
              </div>
            </form>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col items-end text-right">
              {/* Main Title */}
              <div className="relative mb-6 sm:mb-8">
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#331b3b] text-right leading-tight"
                  style={{ fontFamily: 'Almarai' }}
                >
                  سجل بياناتك الآن لحجز استشارة مجانية لمراجعة احتياجاتك وتحديد الباقة المناسبة
                </h2>
                <img 
                  src="/images/img_vector_15.svg" 
                  alt="Underline" 
                  className="absolute bottom-[-8px] right-0 w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px] h-[4px] sm:h-[6px] md:h-[8px] lg:h-[10px]"
                />
              </div>

              {/* Consultation Image */}
              <div className="w-full max-w-[500px] lg:max-w-[734px]">
                <img 
                  src="/images/img_rectangle_3465126.png" 
                  alt="Consultation" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;