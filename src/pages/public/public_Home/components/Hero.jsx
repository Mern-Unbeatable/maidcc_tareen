// import bg from "../../../../assets/herobg.webp";
// import { FaWhatsapp } from "react-icons/fa";
// import { Link } from "react-router";
// import Container from "../../../../layout/Container";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden flex items-center">
//       <img
//         src={bg}
//         alt="Hero background"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <Container className="relative z-10 max-w-7xl">
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-badge text-gray-200 text-xs font-medium mb-6">
//             Trusted By 10,000+ Families
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-[54px] font-semibold text-white leading-[1.15] mb-6 font-[Poppins]">
//             Hire a Maid or Apply for
//             <br />A Maid Visa in Minutes
//           </h1>

//           <p className="section-desc text-gray-300 mb-8 max-w-lg leading-relaxed">
//             Fast processing, trusted service, and 100% legal compliance. We
//             handle the paperwork so you can focus on your family.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               to="https://wa.me/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 bg-primaryCta btn-ani hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium btn-ani text-sm"
//             >
//               <FaWhatsapp className="w-4 h-4" />
//               <span>Get a maid visa</span>
//             </Link>
//             <Link
//               to="https://wa.me/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 bg-secondaryCta hover:opacity-90 text-white px-6 py-2.5 rounded-full font-medium btn-ani text-sm"
//             >
//               <FaWhatsapp className="w-4 h-4" />
//               <span>Hired a maid</span>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Hero;

import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router";
import Container from "../../../../layout/Container";

// Replace these with your actual asset imports
import maidMopImg from "../../../../img/maidMopImg.webp";
import maidTowelsImg from "../../../../img/maidTowelsImg.webp";
import girlBeachImg from "../../../../img/girlBeachImg.webp";
import avatar1 from "../../../../img//avatar-1.webp";
import avatar2 from "../../../../img/avatar-2.webp";
import avatar3 from "../../../../img/avatar-3.webp";
import avatar4 from "../../../../img/avatar-4.webp";
import CtaButton from "../../../../Components/common/CtaButton";

const avatars = [avatar1, avatar2, avatar3, avatar4];

// Counts up from 0 to `end` once the element enters the viewport
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out for a nice deceleration near the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const Hero = () => {
  const [reviewCount, reviewRef] = useCountUp(2000, 1600);

  // Format 2000 -> "2k+", 1450 -> "1.4k+", etc.
  const formatCount = (num) => {
    if (num >= 1000) {
      const val = num / 1000;
      return `${val % 1 === 0 ? val.toFixed(0) : val.toFixed(1)}k+`;
    }
    return `${num}+`;
  };

  return (
    <div className="w-full bg-white py-4">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left card — content */}
          <div className="border border-[#EDE8DE] rounded-2xl px-6 py-8 flex flex-col justify-start items-start">
            <div className="inline-flex w-fit items-center justify-center px-4 py-1.5 rounded-full bg-[#102A63] text-white text-sm font-semibold mb-6">
              Trusted By 10,000+ Families
            </div>

            <h1 className="text-4xl md:text-5xl  font-semibld text-gray-900 leading-[1.1] mb-6 font-[Poppins]">
              Hire a Maid or Apply for A Maid Visa in Minutes
            </h1>

            <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              Fast processing, trusted service, and 100% legal <br />
              compliance. We handle the paperwork so you can focus
              <br /> on your family.
            </p>

            <div className="flex items-center gap-3 mb-10">
              {/* Primary CTA — fill sweep animation on hover */}
              {/* <Link
                to="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-float relative overflow-hidden flex items-center justify-center bg-[#E67E00] text-white px-7 py-3.5 rounded-full font-semibold text-base group/cta transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-[#c96e00] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/cta:scale-x-100"></span>
                <span className="relative z-10">Get a maid visa</span>
              </Link> */}
              <div className="flex items-center gap-3 mb-10">
                <CtaButton to="https://wa.me/" float>
                  Get a maid visa
                </CtaButton>
                <CtaButton to="https://wa.me/" variant="circle" float />
              </div>

              {/* Circular arrow button — rotate + shift on hover */}
              {/* <Link
                to="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#E67E00] text-white w-[52px] h-[52px] rounded-full transition-all duration-300 hover:bg-[#c96e00] hover:rotate-45 hover:scale-105 active:scale-95"
                aria-label="Get started"
              >
                <FaArrowRight className="w-4 h-4" />
              </Link> */}
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Expert"
                      className="w-15 h-15 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-base leading-tight text-gray-700">
                  More than
                  <br />
                  <span className="font-bold text-gray-900">200 Experts</span>
                </p>
              </div>

              <div
                className="text-base leading-tight text-gray-700"
                ref={reviewRef}
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-gray-900">4.8</span>
                  <div className="flex text-[#FE4D00]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>
                <p>
                  <span className="font-bold text-gray-900">
                    {formatCount(reviewCount)}
                  </span>{" "}
                  Reviews on Google
                </p>
              </div>
            </div>
          </div>

          {/* Right card — image grid */}
          <div className="border border-[#EDE8DE]  rounded-2xl p-4 grid grid-cols-2 gap-4 ">
            <div className="flex flex-col gap-4">
              <img
                src={maidMopImg}
                alt="Maid cleaning a kitchen"
                className="flex-[2.2] w-full object-cover rounded-2xl"
              />
              <div className="flex-1 bg-[#EDE8DE] rounded-2xl flex flex-col items-center justify-center text-center px-4">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  100%
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Satisfaction Guarantee
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={maidTowelsImg}
                alt="Maid holding folded towels"
                className="flex-1 w-full object-cover rounded-2xl"
              />
              <img
                src={girlBeachImg}
                alt="Child relaxing at the beach"
                className="flex-1 w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
