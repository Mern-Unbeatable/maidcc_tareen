import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import Container from "../../layout/Container";

import avatar1 from "../../img/avatar-1.webp";
import avatar2 from "../../img/avatar-2.webp";
import avatar3 from "../../img/avatar-3.webp";

const Review = () => {
  const reviews = [
    {
      id: 1,
      title: "Absolutely the Best Maid Hiring Service!",
      text: "Finding a trustworthy full-time maid felt overwhelming until I found this platform. The process was quick, the maid was experienced, and everything was handled professionally. I couldn't be happier with the service!",
      name: "Sarah M",
      email: "sarahm@gmail.com",
      rating: 4.8,
      avatar: avatar1,
    },
    {
      id: 2,
      title: "Reliable, Professional & Hassle-Free!",
      text: "I hired a part-time maid for my apartment, and the experience exceeded my expectations. The booking process was simple, and the maid arrived on time and did an excellent job. Highly recommended!",
      name: "Michael R",
      email: "michael.r@gmail.com",
      rating: 4.8,
      avatar: avatar2,
    },
    {
      id: 3,
      title: "Smooth Visa Process, Great Support!",
      text: "We hired a full-time maid through maids.cc and everything was handled perfectly — from the interview to the visa paperwork. The support team was responsive and professional throughout.",
      name: "Priya M",
      email: "priyam@gmail.com",
      rating: 4.9,
      avatar: avatar3,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container className="max-w-7xl">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2.6 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="pb-2"
          >
            {/* Static intro slide */}
            <SwiperSlide className="h-auto">
              <div className="bg-[#F3EFE8] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[420px] text-left">
                <div>
                  <h2 className="text-3xl md:text-[34px] font-medium text-gray-900 leading-[1.15] mb-6 font-[Poppins]">
                    Trusted by Hundreds of Families Across the UAE
                  </h2>
                  <p className="text-gray-500 text-[14px] leading-relaxed max-w-xs">
                    See what our customers say about hiring a maid and
                    processing their maid visa with maids.cc.
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-10">
                  <button className="swiper-button-prev-custom w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-pointer group">
                    <ArrowLeft className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="swiper-button-next-custom w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-pointer group">
                    <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </SwiperSlide>

            {/* Review slides */}
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-[#F3EFE8] rounded-[24px] p-8 flex flex-col justify-between h-full min-h-[420px] text-left">
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 leading-[1.2] mb-6 font-[Poppins]">
                      {review.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-[15px] font-semibold text-gray-900 leading-tight">
                          {review.name}
                        </p>
                        <p className="text-[12px] text-gray-500">
                          {review.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-semibold text-gray-900">
                        {review.rating}
                      </span>
                      <div className="flex text-[#E67E00]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#E67E00]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Review;