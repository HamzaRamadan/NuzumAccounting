

const Footer = () => {
  return (
    <footer 
      className="w-full bg-footer-background mt-[56px] md:mt-[84px] lg:mt-[112px] px-4 py-4 md:py-6 lg:py-4"
      style={{ backgroundColor: '#1f2425' }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="mb-4 md:mb-6 lg:mb-7">
            <img 
              src="/images/img_rectangle_44.png" 
              alt="Company Logo" 
              className="w-[120px] h-[115px] sm:w-[135px] sm:h-[129px] md:w-[150px] md:h-[144px] object-contain"
            />
          </div>
          
          {/* Copyright Text */}
          <div className="text-center">
            <p 
              className="text-sm md:text-base lg:text-lg font-bold leading-5 md:leading-6 lg:leading-[21px] opacity-50"
              style={{
                fontFamily: 'Almarai',
                color: '#ffffff82',
                fontSize: '16px',
                
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
                fontFamily: 'Almarai',
                color: '#9b949d',
                fontSize: '16px',
                
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