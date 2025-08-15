import FooterHeading from "./FooterHeading";
import FooterNavigation from "./FooterNavigation";
import FooterTouch from "./FooterTouch";
import FooterProject from "./FooterProject";
import CopyRight from "./CopyRight";
import Line from "./Line";
export default function Footer() {
  return (
    <footer className="">
      <div className="bg-[#0F172A]  text-white ">
        <div className="max-w-7xl mx-auto   grid grid-cols-1 md:grid-cols-4 gap-10 p-5 ">
          <div className="">
            <FooterHeading />
          </div>

          <div className="">
            <h2 className="text-white text-md font-bold">Navigation</h2>
            <Line />
            <FooterNavigation />
          </div>

          <div>
            <h2 className="text-white text-md font-bold ">Get In Touch</h2>
            <Line />

            <FooterTouch />
          </div>

          <div>
            <h2 className="font-bold text-md sm:text-white ">Our Projects</h2>
            <Line />
            <FooterProject />
          </div>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
