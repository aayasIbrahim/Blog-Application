"use client";
import Image from "next/image";
import Header from "./Header";
import Banner from "../components/Banner";
import ServiceSection from "./ServiceSection";
import ChoiceDesign from "./ChoiceDesing";
import Facilities from "./Facilities";
import TeamDetails from "./TeamDetails";

export default function About() {
  return (
    <>
      <Banner
        imageUrl={"/pexels-kamo11235-667838.jpg"}
        title="About Us"
        subtitle="Learn more about our mission and values"
      />
      <Header />
      <ServiceSection/>
      <ChoiceDesign/>
      <Facilities/>
      <TeamDetails/>
    </>
  );
}
