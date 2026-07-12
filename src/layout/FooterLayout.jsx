import bg from "../assets/footerbg.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterLayout = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] w-full min-h-[500px] flex flex-col justify-end overflow-hidden">
      <div
        className="absolute inset-0 opacity-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <h1 className="text-[180px] md:text-[280px] font-black text-primaryCta leading-none whitespace-nowrap opacity-100 tracking-tighter select-none font-[Poppins]">
          maids.cc
        </h1>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 grow flex items-center justify-center">
        {/* Glassmorphism Card */}
        <div className="flex flex-col md:flex-row w-full max-w-[850px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]/50 backdrop-blur-3xl">
          {/* Left Column (Solid Blue) */}
          <div className="w-full md:w-[45%] bg-[#2d58bc] p-10 flex flex-col justify-center">
            <div className="mb-8">
              <div className="text-4xl font-black text-white leading-none tracking-tight font-[Poppins]">
                maids.CC
              </div>
              <div className="text-[12px] font-bold text-primaryCta mt-1 tracking-wide">
                <span className="text-white">+nannies</span> +visa services
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <Icon className="w-5 h-5 text-[#2d58bc]" />
                  </a>
                ),
              )}
            </div>

            <p className="text-white/90 text-[13px] leading-relaxed max-w-[280px] font-medium">
              The UAE's most trusted digital platform for domestic help and visa
              processing. Licensed, reliable, and fast.
            </p>
          </div>

          {/* Right Column (Glass) */}
          <div className="w-full md:w-[55%] p-10 flex flex-col justify-center">
            <h3 className="text-gray-200 text-[15px] font-medium mb-6">
              Contact Details
            </h3>
            <div className="space-y-4 text-gray-200">
              <p className="text-[15px] italic font-semibold">
                maids.cc@gmail.com
              </p>
              <p className="text-[15px] italic font-semibold">
                +88 012345677685
              </p>
              <p className="text-[15px] italic font-semibold">
                ul. Generała Ziętka Jerzego 54, Mysłowice 41-412
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-gray-400 font-medium">
            © {currentYear} maids.cc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
