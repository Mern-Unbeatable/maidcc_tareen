import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const CategoryHero = ({ heroData }) => {
  if (!heroData) return null;

  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-[#24488b]">
      {/* Background Image (Tinted) */}
      {heroData.image && (
        <div className="absolute inset-0 z-0">
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-full h-full object-cover mix-blend-overlay opacity-90 grayscale-30"
          />
        </div>
      )}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-[#203a70]/90 to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-[550px]">
          <h1 className="text-4xl md:text-[50px] font-bold text-white leading-[1.15] tracking-tight mb-5 font-[Poppins]">
            {heroData.title}
          </h1>
          <p className="text-[15px] text-white/90 mb-8 leading-relaxed font-medium max-w-[400px]">
            {heroData.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-[#f39c12] hover:bg-primaryCta text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors btn-ani">
              <FaWhatsapp className="w-5 h-5" />
              <span>Talk On WhatsApp</span>
            </button>
            <button className="bg-secondaryCta  text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors btn-ani shadow-lg">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
