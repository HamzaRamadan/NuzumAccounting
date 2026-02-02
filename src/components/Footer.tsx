import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full bg-footer-background mt-[56px] md:mt-[84px] lg:mt-[112px] px-4 py-4 md:py-6 lg:py-4"
      style={{ backgroundColor: "#1f2425" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="mb-4 md:mb-6 lg:mb-7">
            <img
              src="/EradaLogo-removebg-preview.png"
              alt="Company Logo"
              className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] object-contain"
            />
          </div>

          <div className="flex flex-row-reverse items-center justify-center gap-4 -mt-10">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=61586007011479&sk=grid"
              target="_blank"
              className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-[#1877F2] text-white
      hover:scale-110 transition
    "
            >
              <FaFacebookF className="w-5 h-5" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@hany.josseph?_r=1&_t=ZS-93MM4bm6pGs"
              target="_blank"
              className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-black text-white
      hover:scale-110 transition
    "
            >
              <FaTiktok className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nuzum_for_accounting?igsh=MTkzaGtna2MzbHN3aA=="
              target="_blank"
              className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]
      text-white
      hover:scale-110 transition
    "
            >
              <FaInstagram className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/posts/%D9%86%D9%8F%D8%B8-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9_%D9%86%D9%82%D8%AF%D9%85-%D9%84%D9%83%D9%85-%D9%86%D8%AD%D9%86-%D8%B4%D8%B1%D9%83%D8%A9-%D9%86%D8%B8%D9%85-%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%84%D8%AA%D9%82%D8%AF%D9%8A%D9%85-%D8%AE%D8%AF%D9%85%D8%A7%D8%AA-activity-7415028716340350976-Zrge?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWuvbkBrMeM5adZ2xKJoLCTI1NEukOqJck"
              target="_blank"
              className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-[#0A66C2] text-white
      hover:scale-110 transition
    "
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center -mt-1">
            <p
              className="text-sm md:text-base lg:text-lg font-bold leading-5 md:leading-6 lg:leading-[21px] opacity-50"
              style={{
                fontFamily: "Almarai",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              © 2025 – جميع الحقوق محفوظة. تطوير نظم المحاسبة
            </p>
          </div>

          {/* Privacy Policy Link */}
          <div className="text-center">
            <a
              href="/privacy-policy"
              className="text-sm md:text-base lg:text-lg font-bold leading-5 md:leading-6 lg:leading-[21px] hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded px-2 py-1"
              style={{
                fontFamily: "Almarai",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
