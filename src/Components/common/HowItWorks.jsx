import { MessageCircle, FileText, ShieldCheck } from "lucide-react";

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
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 font-[Poppins]">
          How It Works
        </h2>
        <p className="text-[15px] text-gray-500 mb-16">
          Simple 3-step process to get started today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-full border border-blue-50 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-secondaryCta stroke-2" />
                </div>
              </div>

              <h3 className="text-[19px] font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed max-w-[300px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
