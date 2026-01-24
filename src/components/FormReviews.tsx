/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import RatingBar from "./ui/RatingBar";

const Reviews2 = () => {
  const [rating, setRating] = useState(4);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Toast state
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      setToast({ message: "من فضلك اكمل كل الحقول", type: "error" });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_q53f7di",
        "template_b969o32",
        { user_name: name, rating, message },
        "xfBdJV0Wg9Lj2jxwQ",
      );

      setToast({ message: "تم إرسال التقييم بنجاح ✅", type: "success" });
      setName("");
      setMessage("");
      setRating(4);
    } catch (error: any) {
      console.log("STATUS:", error.status);
      console.log("TEXT:", error.text);
      setToast({
        message: error.text || "حدث خطأ أثناء الإرسال ❌",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 relative">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg text-white font-bold transition-transform ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={sendEmail}
          className="max-w-[800px] mx-auto flex flex-col items-start text-right space-y-4 sm:space-y-6"
        >
          <div>
            <h3
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black mb-2 sm:mb-3"
              style={{ fontFamily: "Cairo" }}
            >
              تقييمك العام
            </h3>
            <RatingBar
              rating={rating}
              layout_width="auto"
              margin="0"
              position="relative"
              variant="default"
              size="medium"
              onRatingChange={(newRating) => setRating(newRating)}
            />
          </div>

          <div className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-3 sm:p-4 md:p-[18px]">
            <input
              type="text"
              name="user_name"
              placeholder="الاسم كامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none"
              style={{ fontFamily: "Cairo" }}
              required
            />
          </div>

          <div className="w-full bg-[#f1f4ff] rounded-[10px] border border-[#f1f4ff] p-4 sm:p-5 md:p-[20px] min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
            <textarea
              name="message"
              placeholder="اكتب رأيك هنا..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-full bg-transparent text-right text-[#878680] text-base sm:text-lg md:text-xl outline-none resize-none"
              style={{ fontFamily: "Cairo" }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="block bg-[#2C7EF3] transition text-white text-sm font-bold py-3 w-50 rounded-full hover:scale-110 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "Almarai" }}
          >
            {loading ? "جارٍ الإرسال..." : "إرسال التقييم"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reviews2;
