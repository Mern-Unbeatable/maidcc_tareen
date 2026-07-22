import Container from "./Container";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import CtaButton from "../Components/common/CtaButton";

const FooterLayout = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Need a visa for your maid", slug: "maid-visa" },
    { label: "Looking for full time maid", slug: "full-time-maid" },
    { label: "Looking for part time maid", slug: "home-cleaning" },
  ];

  const socials = ["Facebook", "Instagram", "YouTube", "TikTok"];

  return (
    <footer className="w-full bg-white py-6 px-4 md:px-6">
      <div className="max-w-7xl mx-auto border border-[#EDE8DE] rounded-[28px] p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {/* Brand card */}
            <div className="bg-[#F3EFE8] rounded-2xl p-8">
              <div className="mb-4">
                <div className="text-3xl font-black text-gray-900 leading-none tracking-tight font-[Poppins]">
                  maids.CC
                </div>
                <div className="text-[13px] font-semibold mt-2 tracking-wide">
                  <span className="text-gray-900">+nannies</span>{" "}
                  <span className="text-[#E67E00]">+visa services</span>
                </div>
              </div>

              <p className="text-gray-500 text-[14px] leading-relaxed max-w-[420px] mb-8">
                The UAE's most trusted digital platform for domestic help and
                visa processing. Licensed, reliable, and fast.
              </p>

              {/* <div className="flex items-center gap-3">
                <Link
                  to="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E67E00] text-white px-6 py-3.5 rounded-full font-semibold text-[15px] hover:bg-[#c96e00] transition-colors"
                >
                </Link>
                <Link
                  to="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get started"
                  className="w-[52px] h-[52px] shrink-0 bg-[#E67E00] text-white rounded-full flex items-center justify-center hover:bg-[#c96e00] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div> */}

              <div className="flex items-center gap-3 mb-10">
                <CtaButton to="https://wa.me/" float>
                  Hire A Maid Today!
                </CtaButton>
                <CtaButton to="https://wa.me/" variant="circle" float />
              </div>
            </div>

            {/* Social card */}
            <div className="bg-[#F3EFE8] rounded-2xl p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-3 font-[Poppins]">
                Lets stay in Touch
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed max-w-[350px] mb-10">
                Follow us on social media to stay updated on our latest news.
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-white border border-gray-200 text-gray-800 text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {/* Newsletter card */}
            <div className="bg-[#F3EFE8] rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                Get the Latest Updates from NeatNest
              </h3>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-wrap items-center gap-3"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 min-w-[180px] bg-white border border-gray-200 rounded-full px-5 py-3.5 text-[14px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-gray-300"
                />
                {/* <button
                  type="submit"
                  className="bg-[#E67E00] text-white px-6 py-3.5 rounded-full font-semibold text-[14px] whitespace-nowrap hover:bg-[#c96e00] transition-colors"
                >
                  Join Our Newsletter!
                </button> */}
                {/* <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-[48px] h-[48px] shrink-0 bg-[#E67E00] text-white rounded-full flex items-center justify-center hover:bg-[#c96e00] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button> */}
                <div className="flex items-center gap-3 mb-">
                  <CtaButton to="https://wa.me/" float>
                  Join Our Newsletter!
                  </CtaButton>
                  <CtaButton to="https://wa.me/" variant="circle" float />
                </div>
              </form>
            </div>

            {/* Services + Contact card */}
            <div className="bg-[#F3EFE8] rounded-2xl p-8 flex flex-col grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                    Our Services
                  </h4>
                  <ul className="space-y-4">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="text-gray-600 text-[14px] hover:text-gray-900 transition-colors"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-5 font-[Poppins]">
                    Contact Details
                  </h4>
                  <div className="space-y-4 text-gray-600 text-[14px] leading-relaxed">
                    <p>maids.cc@gmail.com</p>
                    <p>+88 012345677685</p>
                    <p>ul. Generała Ziętka Jerzego 54, Mysłowice 41-412</p>
                  </div>
                </div>
              </div>

              {/* Bottom bar inside the card */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-auto pt-10">
                <div className="flex items-center gap-6">
                  <Link
                    to="/privacy-policy"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Privacy & Policy
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <p className="text-[13px] text-gray-500">
                  © {currentYear} maids.cc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
