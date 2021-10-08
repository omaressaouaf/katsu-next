import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Menu from "../components/home/Menu";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
