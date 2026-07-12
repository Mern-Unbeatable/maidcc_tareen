import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(2); // 3rd item is open by default in design

  const faqs = [
    {
      question: "Are you licensed by the Ministry of Human Resources and Emiratization?",
      answer: "Yes, we are fully licensed and compliant with all UAE labor laws.",
    },
    {
      question: "Why should I use a licensed agency?",
      answer: "Using a licensed agency ensures that all legal procedures are followed correctly, protecting both you and the domestic worker.",
    },
    {
      question: "How much do your services cost?",
      answer: "You can hire a maid starting from 2,980 AED / month, or get a Visa for your maid for 8500 AED + 160 AED monthly for 2 years.",
    },
    {
      question: "What documents do I need to use maids.cc services?",
      answer: "Typically, you need your Emirates ID, Passport copy, and Visa page. We will guide you through any additional requirements.",
    },
    {
      question: "Do you offer part-time/hourly/daily maids?",
      answer: "We specialize in full-time live-in and live-out maids, but please contact us for specific requirements.",
    },
    {
      question: "What if the maid does not match my family's preferences?",
      answer: "We offer a replacement guarantee to ensure you find the perfect match for your family's needs.",
    },
    {
      question: "What if I want to cancel later on?",
      answer: "You can cancel the service according to the terms outlined in our service agreement.",
    },
    {
      question: "What if I want to cancel later on?",
      answer: "You can cancel the service according to the terms outlined in our service agreement.",
    },
    {
      question: "Can you bring my maid from outside the UAE?",
      answer: "Yes, we handle all the visa and immigration processes to bring your maid from their home country.",
    },
    {
      question: "Are there any legal liabilities?",
      answer: "As long as you follow the guidelines and legal framework provided by the UAE government, which we facilitate, there are no legal liabilities.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 font-[Poppins]">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-300 cursor-pointer overflow-hidden ${
                  isOpen ? "bg-[#e2e2e2]" : "bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className="px-6 py-5 flex justify-between items-center">
                  <span
                    className={`text-[15px] ${
                      isOpen ? "font-semibold text-gray-900" : "font-medium text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </div>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-[14px] text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
