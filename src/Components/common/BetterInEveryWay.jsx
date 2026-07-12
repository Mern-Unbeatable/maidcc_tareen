import React from "react";
import { FaBriefcase } from "react-icons/fa";

const BetterInEveryWay = ({ rows = [] }) => {
  if (!rows || rows.length === 0) return null;

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 font-[Poppins]">
            Better in every way.
          </h2>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 border-b border-gray-100 bg-white">
            <div className="col-span-4 p-6 font-semibold text-gray-900 text-sm flex items-center">
              Category
            </div>
            <div className="col-span-4 p-6 flex flex-col items-center justify-center border-l border-r border-gray-100 bg-[#fefdfa]">
              <div className="text-2xl font-black text-gray-900 leading-none tracking-tight font-[Poppins]">
                maids.cc
              </div>
            </div>
            <div className="col-span-4 p-6 flex flex-col items-center justify-center">
              <FaBriefcase className="text-gray-400 w-5 h-5 mb-1" />
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-1">
                Other Agencies
              </div>
            </div>
          </div>

          {/* Data Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-12 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors"
            >
              <div className="col-span-4 p-6 text-[13px] font-semibold text-gray-800 flex items-center">
                {row.category}
              </div>
              <div className="col-span-4 p-6 text-[13px] font-bold text-primaryCta border-l border-r border-gray-100 bg-[#fefdfa] flex items-center justify-center text-center leading-relaxed">
                {row.us}
              </div>
              <div className="col-span-4 p-6 text-[13px] font-medium text-gray-500 flex items-center justify-center text-center leading-relaxed">
                {row.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BetterInEveryWay;
