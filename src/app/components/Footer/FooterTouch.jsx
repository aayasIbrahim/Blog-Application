import React from "react";

import { FaMapLocation } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export default function FooterTouch() {
  const getInTouch = [
    { text: "99 Roving St., Big City, PKU 23456", icon: <FaMapLocation /> },
    { text: "Starday-Thusday", icon: <FaRegCalendarCheck /> },
    { text: "08:00 AM -05:00PM", icon: <FaClock /> },
  ];
  return (
    <ul className=" text-white text-md font-semibold">
      {getInTouch.map((item) => {
        return (
          <li key={item.text} className="flex gap-5 mb-5">
            <span className="flex items-center gap-1 text-md text-[#DEB142] ">
              {item.icon}
            </span>
            <span className="font-bold text-md">{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
}
