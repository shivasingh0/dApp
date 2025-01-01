import "./App.css";
import FeatureCard from "./components/FeatureCard";
import { Send, Shield, BarChart3, Clock } from "lucide-react";

function App() {
  return (
    <>
      {/* Hero component start */}
      <section className="text-white h-screen overflow-hidden">
        <div className="relative">
          <img
            src="./images/bg.png"
            className="absolute -top-[500px] -left-[600px] object-cover"
            alt="hero-bg"
          />
          <img
            src="./images/bg.png"
            className="absolute -top-[500px] left-[600px] object-cover"
            alt="hero-bg"
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              A Fast Blockchain. Scalable AI.
            </h1>
            <p className="text-xl mb-8">
              Our technology performing fast blockchain (120K TPS) and it has
              guaranteed AI-based data security. Proof of Stake, its consensus
              algorithm enables unlimited speeds.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Get started
            </button>
            <div>
              <img
                src="./images/hero.png"
                className="w-full bottom-40 relative z-10"
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero component end */}

      {/* Glass component start */}
      <div className="overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Build your crypto portfolio
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Feugiat nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Phone */}

          <img
            src="./images/bg.png"
            className="absolute -top-[500px] -left-[600px] object-cover"
            alt="hero-bg"
          />
          <img
            src="./images/bg.png"
            className="absolute -top-[500px] left-[600px] object-cover"
            alt="hero-bg"
          />

          {/* Feature Cards */}
          <div className="flex gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <FeatureCard
                icon={<Send className="w-8 h-8" />}
                title="SEND & RECEIVE"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8" />}
                title="100% SECURE WALLET"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
              />
            </div>

            {/* Center Column */}

            <div className="space-y-8 relative h-full mb-20">
              <div className="bg-[#1A1A1A] w-[300px] h-[450px] rounded-2xl p-6 border border-[#2A2A2A]">
                <div className="bg-[#8A2BE2] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  icon
                </div>
                <h3 className="font-semibold mb-2 text-white">title</h3>
                <p className="text-sm text-gray-400">description</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <FeatureCard
                icon={<BarChart3 className="w-8 h-8" />}
                title="TRADING CHARTS"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
              />
              <FeatureCard
                icon={<Clock className="w-8 h-8" />}
                title="REAL TIME TRADING"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
              />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* Glass component end */}

      {/* Robot component start */}
      <div className="relative mt-20">
        <div className="bg-[#0052CC] px-20 py-12 rounded-3xl max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Content */}
            <div className="max-w-xl z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore endless possibilities with FinanceFlow
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
                nulla suspendisse tortor aene.
              </p>
              <button className="bg-white text-[#0052CC] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                DOWNLOAD APP
              </button>
            </div>
          </div>
        </div>
        {/* Robot Image */}
        <div className="mt-12 w-[700px] absolute right-20 top-0">
          <img
            src="/images/Robot.png"
            alt="FinanceFlow Robot"
            className="w-full"
          />
        </div>
      </div>

      {/* Robot component end */}

      <div class="relative text-white flex mt-40 overflow-x-hidden">
        <div class="py-12 animate-marquee whitespace-nowrap">
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
        </div>

        <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
          <span class="text-4xl mx-4 bg-[#1A1A1A] relative z-10 rounded-2xl p-6 border border-[#2A2A2A]">
            Marquee Item 1
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
