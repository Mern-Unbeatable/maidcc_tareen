import bg from "../../../../assets/heroothers.webp";
import { Award, Star, Heart, TrendingUp } from "lucide-react";
import Container from "../../../../layout/Container";

const About = () => {
  const stats = [
    {
      icon: Award,
      value: "10,000+",
      label: "Successful Placements",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Customer Satisfaction",
    },
    {
      icon: Heart,
      value: "15+",
      label: "Years of Experience",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Retention Rate",
    },
  ];

  return (
    <section className="relative w-full py-24 flex items-center justify-center overflow-hidden">
      <img
        src={bg}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <Container className="relative z-10 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 font-[Poppins]">
          About Us
        </h2>
        <p className="text-[15px] text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          We are dedicated to connecting families with trusted domestic helpers
          while providing comprehensive support throughout the entire hiring
          process.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 shadow-lg">
                <stat.icon className="w-6 h-6 text-secondaryCta stroke-2" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1.5 font-[Poppins]">
                {stat.value}
              </h3>
              <p className="text-[11px] text-gray-300 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
