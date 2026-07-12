import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = ({ plans = [] }) => {
  if (!plans || plans.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 font-[Poppins]">
            Transparent Pricing
          </h2>
          <p className="text-[13px] text-gray-500 font-medium">
            Choose the plan that fits your timeline and budget.
          </p>
        </div>

        <div className={`flex flex-wrap justify-center gap-8`}>
          {plans.map((plan, index) => {
            const isHighlight = plan.highlight;
            const priceParts = plan.subtitle.split("/");
            const amount = priceParts[0];
            const period = priceParts[1];

            return (
              <div
                key={index}
                className={`relative w-full max-w-[340px] rounded-[24px] p-8 flex flex-col bg-white ${
                  isHighlight
                    ? "border-2 border-blue-500 shadow-xl"
                    : "border border-gray-100 shadow-lg"
                }`}
              >
                {/* Popular Badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center font-[Poppins]">
                  {plan.title}
                </h3>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-3xl font-black text-gray-900 tracking-tight font-[Poppins]">
                    {amount}
                  </span>
                  {period && (
                    <span className="bg-[#fff4e6] text-[#e67e00] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {period}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-full text-sm font-bold transition-all mb-8 shadow-md hover:shadow-lg ${
                    isHighlight
                      ? "bg-[#e67e00] hover:bg-[#cc7000] text-white"
                      : "bg-[#e67e00] hover:bg-[#cc7000] text-white"
                  }`}
                >
                  {plan.btnText}
                </button>

                <div className="flex flex-col gap-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="w-[18px] h-[18px] text-green-500 shrink-0 mt-0.5" />
                      <span className="text-[13px] text-gray-600 font-medium leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
