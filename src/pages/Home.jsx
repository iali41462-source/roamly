
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Experiences from "../components/Experiences";
import FeaturedTrips from "../components/FeaturedTrips";
import WhyRoamly from "../components/WhyRoamly";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import About from "../components/About";



function Home() {
  return (
    <>
   

      <main id="top">
        <Hero />
        <Destinations />
        <Experiences />
        <FeaturedTrips />
        <WhyRoamly />
        <Testimonials />
        <CTA />
        <About />
      </main>
     
    </>
  );
}

export default Home;
