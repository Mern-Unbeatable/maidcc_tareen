import aboutImg from "../../../../assets/heroothers.webp";
import { Award, Star, Heart } from "lucide-react";
import Container from "../../../../layout/Container";

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "10,000+",
      label: "Successful Placements",
    },
    {
      icon: Heart,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <section className="w-full section-padding bg-white">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left card — orange background */}
          <div className="bg-[#E67E00] rounded-[24px] px-8 py-12 md:px-14 md:py-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 font-[Poppins]">
              About Us
            </h2>
            <p className="text-white/90 text-[15px] md:text-base max-w-md mx-auto mb-12 leading-relaxed">
              We are dedicated to connecting families with trusted domestic
              helpers while providing comprehensive support throughout the
              entire hiring process.
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-10 w-full max-w-lg">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <stat.icon className="w-6 h-6 text-[#E67E00] stroke-2" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-[Poppins] mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] md:text-[13px] text-white/90 font-medium leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="rounded-[24px] overflow-hidden h-[320px] lg:h-auto">
            <img
              src={aboutImg}
              alt="Maid providing home cleaning service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;