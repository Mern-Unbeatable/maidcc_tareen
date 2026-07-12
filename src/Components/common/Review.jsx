import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

import image1 from "../../assets/firstreview.png";
import image2 from "../../assets/secondreview.png";
import image3 from "../../assets/thirdreview.png";

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: "- Sarah L.",
      text: "Excellent support team and a very smooth experience from start to finish.",
      image: image1,
    },
    {
      id: 2,
      name: "- James K.",
      text: "We hired a full-time maid through maids.cc and everything was handled perfectly.",
      image: image2,
    },
    {
      id: 3,
      name: "- Priya M.",
      text: "Great service and fast visa processing. The team was very helpful throughout.",
      image: image3,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 font-[Poppins]">
          Trusted by Hundreds of Families Across
          <br />
          the UAE
        </h2>
        <p className="text-[14px] text-gray-500 mb-16">
          See what our customers say about hiring a maid and processing their
          maid visa with maids.cc.
        </p>

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="pb-6"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col h-full text-left relative">
                  {/* Image with gradient fade at bottom */}
                  <div className="relative h-64 w-full shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Fade to white gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent pointer-events-none"></div>
                  </div>

                  {/* Text Content */}
                  <div className="px-8 pb-8 pt-0 flex flex-col grow relative z-10 -mt-2">
                    <span className="text-3xl font-serif text-gray-300 leading-none mb-4">
                      "
                    </span>
                    <p className="text-[14px] text-gray-800 leading-relaxed mb-8 grow font-medium">
                      {review.text}
                    </p>
                    <p className="text-[12px] text-gray-500 text-right w-full">
                      {review.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons below Swiper */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button className="swiper-button-prev-custom w-10 h-10 rounded-full border border-[#f39c12] flex items-center justify-center text-[#f39c12] hover:bg-[#f39c12] hover:text-white transition-colors cursor-pointer group">
              <ArrowLeft className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" />
            </button>
            <button className="swiper-button-next-custom w-10 h-10 rounded-full border border-[#f39c12] flex items-center justify-center text-[#f39c12] hover:bg-[#f39c12] hover:text-white transition-colors cursor-pointer group">
              <ArrowRight className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
