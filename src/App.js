import { useEffect } from "react";
import "./App.css";
import { Feature } from "./components/Feature";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import Marquee from "./components/Marquee";
import Aos from "aos";
import 'aos/dist/aos.css';
import Reflect from "./components/Reflect";
import ContactForm from "./components/ContactForm";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // You can set the duration here
  }, []);
  return (
   <div>
    <Header/>
    <Hero/>
    {/* <BackgroundText /> */}
    <Feature/>
    <div className="flex items-center justify-center relative top-20">
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="transform -rotate-6">
          <Marquee direction="left" speed={20} />
        </div>
        <div className="transform rotate-6 -mt-8">
          <Marquee direction="right" speed={20} />
        </div>
      </div>
    </div>

    <Reflect />
    <ContactForm />
   </div>
  );
}

export default App;
