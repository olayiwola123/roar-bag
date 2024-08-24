import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Alexandra Davis",
    text: "The craftsmanship of these bags is truly exceptional. I've purchased several, and each one has exceeded my expectations in both style and durability. Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 2,
    name: "Christopher Lee",
    text: "I was blown away by the quality and design of these bags. They’re not only fashionable but incredibly functional. Perfect for my daily needs and special occasions alike.",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 3,
    name: "Jordan Taylor",
    text: "These bags are a game-changer for anyone who values both style and practicality. The attention to detail and the use of high-quality materials make them stand out.",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 4,
    name: "Riley Morgan",
    text: "Absolutely love my new bag! The design is modern, and the craftsmanship is top-notch. I’ve received numerous compliments and couldn’t be happier with my purchase.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-600">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Customer Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hear from our satisfied customers who love our bags for their style, quality, and functionality.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white dark:bg-gray-800 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-500 text-center">{data.text}</p>
                    <h1 className="text-xl font-bold text-black dark:text-white">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
