import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultation: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e?.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="Contact" className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <form
              onSubmit={handleSubmit}
              className="border border-[#8c94a34f] rounded-[50px] p-8 sm:p-10 md:p-12 lg:p-[30px] bg-white"
            >
              <div className="space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    <span>الاسم</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[12px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <input
                      type="text"
                      value={formData?.name}
                      onChange={(e) =>
                        handleInputChange("name", e?.target?.value)
                      }
                      placeholder=" الاسم"
                      className="w-full  bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    <span>البريد الإلكتروني</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[12px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <input
                      type="email"
                      value={formData?.email}
                      onChange={(e) =>
                        handleInputChange("email", e?.target?.value)
                      }
                      placeholder="hamza@gmail.com"
                      className="w-full  bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    <span>رقم هاتفك</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[8px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center gap-1 px-1">
                        <img
                          src="/images/img_ic_round_arrow_left.svg"
                          alt="Arrow"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                        <img
                          src="/images/img_twemoji_flag_egypt.svg"
                          alt="Egypt Flag"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </div> */}
                      <input
                        type="tel"
                        value={formData?.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e?.target?.value)
                        }
                        placeholder="+201257982565"
                        className="w-full  bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                        style={{ fontFamily: "Almarai" }}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Field */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    <span>نبذة عن الاستشارة</span>
                    <span className="text-[#f01008]">*</span>
                  </label>
                  <div
                   className="w-full"
                  >
                    <textarea
                      value={formData?.consultation}
                      onChange={(e) =>
                        handleInputChange("consultation", e?.target?.value)
                      }
                      placeholder="اضف تفاصيل رسالتك هنا...."
                      rows={4}
                      className="w-full  bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>
          <button className="
            bg-[#2C7EF3] hover:bg-[#2563C3]
            transition
            text-white text-sm font-bold
            px-20 py-4
            rounded-full
          ">
احجز استشارتك المجانية الان
          </button>

                {/* Disclaimer */}
                <p
                  className="text-center text-sm sm:text-base md:text-lg text-[#8c94a3] leading-relaxed"
                  style={{ fontFamily: "Almarai" }}
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
                  className="
    text-[#331B3B]
    font-bold
    text-[22px]
    sm:text-[28px]
    lg:text-[40px]
    leading-[36px]
    sm:leading-[44px]
    lg:leading-[61px]
    text-right
    max-w-[600px]
  "
                  style={{ fontFamily: "Almarai" }}
                >
                  سجل بياناتك الآن لحجز استشارة مجانية لمراجعة احتياجاتك وتحديد{" "}
                  <span className="relative inline-block">
                    الباقة
                    <span
                      className="
      absolute
      right-0
      -bottom-[2px]
      w-full
      border-t-[10px]
      lg:border-t-[10px]
      border-[#2C7EF3]
    "
                    ></span>
                  </span>{" "}
                  المناسبة
                </h2>
              </div>

              {/* Consultation Image */}
              <div className="w-full max-w-[500px] lg:max-w-[734px]">
                <img
                  src="/contact.jpg"
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
