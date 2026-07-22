import { MessageCircle, FileText, ShieldCheck, Star } from "lucide-react";
import Container from "../../layout/Container";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Apply on WhatsApp",
      description:
        "Send us a message and our team will guide you through the initial requirements.",
    },
    {
      icon: FileText,
      title: "We process document",
      description:
        "Our experts handle all legal paperwork and government approvals for you",
    },
    {
      icon: ShieldCheck,
      title: "Maid arrives at home",
      description:
        "Once approved, your maid is ready to start. we ensure a smooth transition",
    },
    {
      icon: MessageCircle,
      title: "Apply on WhatsApp",
      description:
        "Send us a message and our team will guide you through the initial requirements.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container className="max-w-7xl">
        <div className="border border-[#EDE8DE] rounded-[24px] p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — heading & content */}
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-5 font-[Poppins] leading-[1.1]">
                How It Works
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                Getting started is simple. Browse available services, choose
                the option that fits your needs, and hire a trusted maid in
                just a few steps. From booking to visa assistance, we make
                the entire process smooth, secure, and hassle-free.
              </p>

              <div className="inline-flex w-fit items-center gap-2 bg-[#F3EFE8] px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-[#E67E00] fill-[#E67E00]" />
                <span className="text-sm font-medium text-gray-800">
                  2k+ Reviews on Google
                </span>
              </div>
            </div>

            {/* Right — 2x2 grid of steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-[#F3EFE8] rounded-2xl p-5 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FBE3D0] flex items-center justify-center mb-4">
                    <step.icon className="w-5 h-5 text-[#E67E00] stroke-2" />
                  </div>

                  <h3 className="text-[16px] font-semibold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;