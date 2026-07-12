import firstImage from "../../../../assets/card1.png";
import secondImage from "../../../../assets/card2.png";
import thirldImage from "../../../../assets/card3.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Category = () => {
  const cards = [
    {
      id: 1,
      image: firstImage,
      title: "Need a visa for your maid?",
      subtitle: "Apply now. Receive it in 7 days",
      primaryBtnText: "Hired a maid",
      colSpan: "col-span-1 md:col-span-1",
      slug: "maid-visa"
    },
    {
      id: 2,
      image: secondImage,
      title: "Looking for a full-time maid?",
      subtitle:
        "Filipinas, Africans, & Ethiopians available. Live-in & live-out options.",
      primaryBtnText: "Hired a full time maid",
      colSpan: "col-span-1 md:col-span-1",
      slug: "full-time-maid"
    },
    {
      id: 3,
      image: thirldImage,
      title: "Looking for a part-time maid?",
      subtitle: "Cleaners, nannies, & cooks. Find your match.",
      primaryBtnText: "Hired a part time maid",
      colSpan: "col-span-1 md:col-span-2",
      slug: "home-cleaning"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative rounded-[24px] overflow-hidden group h-[400px] ${card.colSpan}`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 font-[Poppins]">
                {card.title}
              </h3>
              <p className="text-[15px] text-gray-300 mb-6 font-medium">
                {card.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link to={`/services/${card.slug}`} className="flex items-center gap-2 relative text-gray-200 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-600/50 transition-colors btn-ani hover:bg-white/10">
                  <span>Learn More</span>
                </Link>
                <button className="flex items-center gap-2 bg-categoryBtn text-white px-5 py-2.5 rounded-full text-sm font-medium btn-ani">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>{card.primaryBtnText}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
