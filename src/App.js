import { useEffect } from "react";
import "./App.css";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Marquee from "./components/Marquee";
import Aos from "aos";
import "aos/dist/aos.css";
import Reflect from "./components/Reflect";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/About";
import LiquidComp from "./components/LiquidComp";
import RoadmapCircle from "./components/roadmap/RoadmapCircle";
import Experience from "./components/Experience";
import Exp from "./components/experience/Exp";
import { OrbitingCircle } from "./components/OrbitingCircle";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // You can set the duration here
  }, []);
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#000",
        }}
        outerStyle={{
          border: "3px solid #000",
        }}
      />

      <Header />
      <Hero />
      {/* <BackgroundText /> */}
      <Feature />
      {/* <Exp /> */}
      {/* <Experience /> */}
      {/* <div className="flex items-center justify-center relative top-20">
        <div
          data-aos="zoom-out"
          className="absolute inset-0 flex flex-col justify-center"
        >
          <div className="transform -rotate-6">
            <Marquee direction="left" speed={20} />
          </div>
          <div className="transform rotate-6 -mt-8">
            <Marquee direction="right" speed={20} />
          </div>
        </div>
      </div> */}

      <LiquidComp />

      {/* <Reflect /> */}
      <div className="min-h-screen">
        <About />
      </div>

      <RoadmapCircle />

      <OrbitingCircle />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
