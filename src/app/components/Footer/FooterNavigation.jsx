import React from "react";
import { FaAngleRight } from "react-icons/fa";
import  Link  from "next/link";
export default function FooterNavigation() {
  const pages = ["Home", "About", "Project", "Service"];
  return (
    <div>
      <ul className=" text-white text-md font-semibold">
        {pages.map((page) => {
          return (
            <li key={page} className="mb-5">
              <span className="flex items-center gap-1">
                <FaAngleRight size={18} color={"#DEB142"} />
                <Link
                  href={`/${page}`}
                  className="font-bold text-md hover:text-[#DEB142]"
                >
                  {page}
                </Link>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
