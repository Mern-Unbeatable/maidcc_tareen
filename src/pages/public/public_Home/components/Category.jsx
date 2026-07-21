import firstImage from "../../../../assets/card1.webp";
import secondImage from "../../../../assets/card2.webp";
import thirldImage from "../../../../assets/card3.webp";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import Container from "../../../../layout/Container";

const Category = () => {
  const cards = [
    {
      id: 1,
      image: firstImage,
      title: "Need a visa for your maid?",
      subtitle: "Apply now. Receive it in 7 days",
      primaryBtnText: "Hired a maid",
      slug: "maid-visa",
      badgeStyle: "primary", // orange filled circle with arrow
    },
    {
      id: 2,
      image: secondImage,
      title: "Looking for a full-time maid?",
      subtitle:
        "Filipinas, Africans, & Ethiopians available. Live-in & live-out options.",
      primaryBtnText: "Hired a full time maid",
      slug: "full-time-maid",
      badgeStyle: "outline", // white circle with diagonal arrow
    },
    {
      id: 3,
      image: thirldImage,
      title: "Looking for a part-time maid?",
      subtitle: "Cleaners, nannies, & cooks. Find your match.",
      primaryBtnText: "Hired a part time maid",
      slug: "home-cleaning",
      badgeStyle: "outline",
    },
  ];

  return (
    <div className=" ">
      <Container className="max-w-7xl shadow-sm bg-white rounded-sm py-12 px-">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4 font-[Poppins]">
            Explore our maid Services
          </h2>
          <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
            Hire trusted maids tailored to your needs. From flexible part-time
            cleaning services to dedicated full-time domestic helpers and
            complete maid visa assistance, we make the hiring process simple,
            secure, and stress-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#eeeae2] rounded-[24px] p-3 flex flex-col"
            >
              {/* Image */}
              <div className="relative rounded-[18px] overflow-hidden h-64 group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Circle badge */}
                <div
                  className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${
                    card.badgeStyle === "primary"
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {card.badgeStyle === "primary" ? (
                    <FaArrowRight className="w-4 h-4" />
                  ) : (
                    <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="px-3 pt-5 pb-3 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1.5 font-[Poppins]">
                  {card.title}
                </h3>
                <p className="text-base text-gray-500 mb-6 leading-relaxed">
                  {card.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-auto">
                  <Link
                    to={`/services/${card.slug}`}
                    className="relative flex items-center gap-2 overflow-hidden bg-white text-gray-800 px-3 py-2.5 rounded-full text-sm font-medium border border-gray-200 group/btn"
                  >
                    {/* Fill layer - sweeps left to right on hover */}
                    <span className="absolute inset-0 bg-[#E67E00] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover/btn:scale-x-100 -z-0"></span>

                    {/* <svg
                      className="relative z-10 w-3.5 h-3.5 text-orange-500 transition-colors duration-500 group-hover/btn:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 3C6 6 4 9 4 12c0 3 2 6 5 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                    <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-white">
                      Learn More
                    </span>
                  </Link>

                  <Link
                    to="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25479D] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[#1a2f56]"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>{card.primaryBtnText}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Category;
