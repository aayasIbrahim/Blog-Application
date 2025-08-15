import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function FooterHeading() {
  const socialLinks = [
    { url: "https://www.facebook.com/", icon: <FaFacebook /> },
    { url: "https://www.instagram.com/", icon: <FaInstagram /> },
    { url: "https://www.twitter.com/", icon: <FaTwitter /> },
    { url: "https://www.linkedin.com/", icon: <FaLinkedin /> },
  ];
  return (
    <div className="">
      <h2 className=" text-md font-bold text-[#deb142] mb-4">
        HOME DECOR IDEAS
      </h2>
      <p className="text-white text-justify text-md">
        Discover timeless home decor ideas to elevate every room. From cozy
        accents to modern touches, find inspiration to create a space that
        reflects your unique style and personality.
      </p>
      <div className="">
        <div className="flex  gap-6 mt-4">
          {socialLinks.map((link) => {
            return (
              <a
                key={link.url}
                className="text-md  text-[#DEB142] hover:text-white"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
