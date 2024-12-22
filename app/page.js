import About from "./components/About";
import Clients from "./components/Clients";
import Dimpu from "./components/Dimpu";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Products from "./components/Products";
import ServicesSection from "./components/ServicesSection";
import Works from "./components/Works";

export default function Home() {
  return (
    <div className="w-screen">
      <Nav />
      <Hero />
      <Clients />
      <ServicesSection />
      <About />
      <Works />
      <Products />
      <Dimpu />
      <Footer />
    </div>
  );
}
