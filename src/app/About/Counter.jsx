import React from "react";
import ScrollCounter from "./ScrollCounter";

const Counter = () => {
  const stats = [
    { number: 12, label: "Years Experience" },
    { number: 244, label: "Projects Completed" },
    { number: 26, label: "Loyal Partners" },
  ];

  return (
    <div className="py-12 px-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-center text-3xl font-semibold mb-12">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center text-yellow-500 font-bold text-4xl mb-2">
              <ScrollCounter end={stat.number} />
              <span className="ml-2 text-4xl">+</span>
            </div>
            <h3 className="text-xl font-semibold text-center">{stat.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
