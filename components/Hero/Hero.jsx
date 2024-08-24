import React, { useState, useEffect } from 'react';
import Image1 from "../../assets/hero/hero1.avif"; 
import Image2 from "../../assets/hero/hero2.avif";
import Image3 from "../../assets/hero/hero.jpg";

const content = [
  {
    text: "Discover the Perfect Bag for Every Occasion",
    subtext: "Explore our collection of stylish and functional bags, designed to complement your unique style.",
    image: Image1,
  },
  {
    text: "Carry Your World in Style",
    subtext: "Our bags are crafted to provide both elegance and practicality.",
    image: Image2,
  },
  {
    text: "Unleash Your Fashion Sense",
    subtext: "Find the bag that matches your personality and enhances your wardrobe.",
    image: Image3,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6">
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 slide-in">
            {content[index].text}
          </h1>
          <p className="text-gray-600 text-lg mb-6 slide-in" style={{ animationDelay: '0.5s' }}>
            {content[index].subtext}
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300 slide-in" style={{ animationDelay: '1s' }}>
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src={content[index].image}
            alt="Stylish Bags"
            className="w-full  transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from 'react';
// import Image3 from "../../assets/hero/hero1.avif";

// const Hero = () => {
//   return (
//     <section className="bg-gray-100 py-20">
//       <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6">
//         <div className="lg:w-1/2 mt-10 lg:mt-0">
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 slide-in">
//             Discover the Perfect Bag for Every Occasion
//           </h1>
//           <p className="text-gray-600 text-lg mb-6 slide-in" style={{ animationDelay: '0.5s' }}>
//             Explore our collection of stylish and functional bags, designed to complement your unique style.
//           </p>
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300 slide-in" style={{ animationDelay: '1s' }}>
//             Shop Now
//           </button>
//         </div>
//         <div className="lg:w-1/2">
//           <img
//             src={Image3}
//             alt="Stylish Bags"
//             className="w-full  transform hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
