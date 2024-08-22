import React from "react";
import Image1 from "../../assets/hero/hero.jpg";
import Image2 from "../../assets/hero/hero2.avif";
import Image3 from "../../assets/hero/hero2.avif";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Bags",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Bags",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-sky-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] font-sans"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[400px] h-[400px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-cover mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;


// import React from "react";
// import Slider from "react-slick";
// import BackgroundVideo from "../../assets/hero/video.mp4"; 

// const textList = [
//   {
//     id: 1,
//     title: "Discover Exclusive Offers on Bags",
//     description: "Uncover the latest trends with up to 70% off on selected items. Limited time offer!",
//   },
//   {
//     id: 2,
//     title: "Up to 50% Off on Men's Collection",
//     description: "Shop our new arrivals and get the best deals on men's bags.",
//   },
//   {
//     id: 3,
//     title: "30% Off on Women's Accessories",
//     description: "Find the perfect accessory for any occasion at unbeatable prices.",
//   },
// ];

// const Hero = ({ handleOrderPopup }) => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//     pauseOnHover: false,
//   };

//   return (
//     <div className="relative h-screen flex items-center justify-center bg-black">
//       {/* Background Video */}
//       <video
//         className="absolute inset-0 object-cover w-full h-full"
//         src={BackgroundVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
      
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

//       {/* Sliding Text Content */}
//       <div className="relative z-10 text-center text-white px-4 sm:px-8">
//         <Slider {...settings}>
//           {textList.map((text) => (
//             <div key={text.id}>
//               <h1 className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
//                 {text.title}
//               </h1>
//               <p className="text-lg sm:text-xl mb-8 drop-shadow-md">
//                 {text.description}
//               </p>
//               <button
//                 onClick={handleOrderPopup}
//                 className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 text-white py-3 px-8 rounded-full shadow-lg hover:scale-105"
//               >
//                 Shop Now
//               </button>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Hero;
