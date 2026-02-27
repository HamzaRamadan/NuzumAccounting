/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultation: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, consultation } = formData;

    if (!name || !email || !phone || !consultation) {
      setToast({ message: "من فضلك اكمل كل البيانات", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_th1yq0e",
        "template_qtbauua",
        {
          name,
          email,
          phone,
          consultation,
        },
        "iODxejsnPdPfDdqkz"
      );

      setToast({
        message: "تم إرسال طلب الاستشارة بنجاح ✅",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        consultation: "",
      });
    } catch (error: any) {
      setToast({
        message: "حدث خطأ أثناء الإرسال ❌",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="Contact" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg text-white font-bold ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
            <form
              onSubmit={handleSubmit}
              className="border border-[#8c94a34f] rounded-[50px] p-8 sm:p-10 md:p-12 lg:p-[30px] bg-white"
            >
              <div className="space-y-6 sm:space-y-8">
                {/* Name */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    الاسم <span className="text-[#f01008]">*</span>
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
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="الاسم"
                      className="w-full bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    البريد الإلكتروني <span className="text-[#f01008]">*</span>
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
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="hamza@gmail.com"
                      className="w-full bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    رقم هاتفك <span className="text-[#f01008]">*</span>
                  </label>
                  <div
                    className="w-full rounded-lg p-2 sm:p-3 md:p-[8px]"
                    style={{
                      backgroundImage: "url('/images/img_input_field.svg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+201257982565"
                      className="w-full bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                      style={{ fontFamily: "Almarai" }}
                      required
                    />
                  </div>
                </div>

                {/* Consultation */}
                <div className="flex flex-col items-start">
                  <label
                    className="text-lg sm:text-xl md:text-2xl text-[#1d2026] text-right mb-2 sm:mb-3"
                    style={{ fontFamily: "Almarai" }}
                  >
                    نبذة عن الاستشارة <span className="text-[#f01008]">*</span>
                  </label>
                  <textarea
                    value={formData.consultation}
                    onChange={(e) =>
                      handleInputChange("consultation", e.target.value)
                    }
                    placeholder="اضف تفاصيل رسالتك هنا...."
                    rows={4}
                    className="w-full bg-transparent text-right border-2 py-2 px-5 rounded-2xl border-[#E9EAF0] text-[#8c94a3] text-base sm:text-lg md:text-xl outline-none"
                    style={{ fontFamily: "Almarai" }}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    bg-[#2C7EF3] hover:bg-[#2563C3]
                    transition
                    text-white text-sm font-bold
                    px-20 py-4
                    rounded-full
                    disabled:opacity-50
                  "
                >
                  {loading ? "جارٍ الإرسال..." : "احجز استشارتك المجانية الان"}
                </button>

                <p
                  className="text-center text-sm sm:text-base md:text-lg text-[#8c94a3]"
                  style={{ fontFamily: "Almarai" }}
                >
                  نقبل عدد محدود جداً من الشركات شهرياً
                </p>
              </div>
            </form>
          </div>

          {/* Image + Text */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="/contact.jpg"
              alt="Consultation"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
