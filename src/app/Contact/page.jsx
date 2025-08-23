import React from "react";
import Banner from "../components/Banner";
import ContactBody from "./ContactBody";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  console.log("Contact Page Loaded");
  return (
    <>
      <Banner
        title="Contact Us"
        subtitle="We'd love to hear from you! Reach out with any questions or feedback."
        imageUrl={"/pexels-godless-humanist-739743-1587947.jpg"}

      />
      <ContactBody/>
      <GoogleMap/>
    </>
  );
}
