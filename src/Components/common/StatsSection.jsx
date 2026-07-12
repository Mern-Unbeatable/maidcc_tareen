import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      top: (
        <div className="flex items-center gap-2">
          <span>4.8</span>
          <span className="text-[#f39c12] text-xl tracking-tighter">★★★★★</span>
        </div>
      ),
      bottom: "Google Ratings"
    },
    {
      top: "15,000+",
      bottom: "Verified Placements"
    },
    {
      top: "#1",
      bottom: "Domestic Choice"
    },
    {
      top: "25K+",
      bottom: "Visas Issued"
    }
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 relative z-20">
      <div className="max-w-[850px] mx-auto px-4 py-10">
        <div className="flex justify-between items-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5">
              <div className="text-[26px] font-bold text-gray-900 font-[Poppins] leading-none">
                {stat.top}
              </div>
              <div className="text-[10px] font-bold text-gray-500 tracking-wide">
                {stat.bottom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
