// import Double from "./components/main/Double";
import ContactLink from "./components/main/ContactLink";
import Hero from "./components/main/Hero";
import Introduction from "./components/main/Introduction";
import Offer from "./components/main/Offer";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="md:relative w-screen pt-14">
      <Hero/>
      <div className=" py-40">
        <Introduction/>
        <Offer/>
        

        <ContactLink heading="Don't Think Twice. Let us Protect Your Data."/>
        <Testimonial/>

      </div>
    </main>
  );
}
