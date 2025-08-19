import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Banner
        title="Welcome to Our Blog"
        subtitle="Discover amazing products and services"
        bgColor="#0f172a"
        textColor="white"
        imageUrl="/pexels-feriilicee-7554804.jpg"
        prev={"ABOUT US"}
      />
    </>
  );
}
