import React from "react";
import Form from "./subComponents/Form";
import SnowfallEffect from "./subComponents/SnowfallEffect";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            <div className="w-2 h-2 bg-[#9BDCFD] rounded-full opacity-80" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600">
                Have questions or want to collaborate? Drop us a message, and
                our friendly polar bear will make sure it gets to the right
                place!
              </p>
              <Form />
            </div>

            <div className="flex justify-center">
              <img
                src="/assets/polarBeer/contact.gif"
                alt="Polar Bear"
                className="w-full relative left-100 h-auto rounded-3xl"
                data-aos="fade-left"
                data-aos-delay="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
