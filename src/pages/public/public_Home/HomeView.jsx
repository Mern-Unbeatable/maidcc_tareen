import React from "react";
import bg from "../../../assets/herobg.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const HomeView = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center">
      <img
        src={bg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-badge text-gray-200 text-xs font-medium mb-6">
            Trusted By 10,000+ Families
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-semibold text-white leading-[1.15] mb-6 font-[Poppins]">
            Hire a Maid or Apply for
            <br />A Maid Visa in Minutes
          </h1>

          <p className="text-base text-gray-300 mb-8 max-w-lg leading-relaxed">
            Fast processing, trusted service, and 100% legal compliance. We
            handle the paperwork so you can focus on your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/maid-visa-application"
              className="flex items-center justify-center gap-2 bg-primaryCta btn-ani hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium btn-ani text-sm"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Get a maid visa</span>
            </Link>
            <Link className="flex items-center justify-center gap-2 bg-secondaryCta hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium btn-ani text-sm">
              <FaWhatsapp className="w-4 h-4" />
              <span>Hired a maid</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
