import React from "react";
import AboutImage from "../../assets/women/women.png";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
         <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Who We Are
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Abouts
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              About Roar Design Bags
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At Roar Design Bags, we believe that your bag should be more than just a carryall. It’s an expression of your personality, style, and sophistication. Our mission is to craft bags that resonate with the modern, bold, and confident individual.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded with a passion for quality and a keen eye for fashion, Roar Design Bags offers an exclusive collection of bags that blend timeless elegance with contemporary design. Each piece is meticulously crafted using premium materials, ensuring both durability and luxury.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us in celebrating individuality and style with our unique designs that make a statement wherever you go. Roar with confidence. Roar with style.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={AboutImage}
              alt="About Roar Design Bags"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
