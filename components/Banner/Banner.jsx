import React from "react";
import BannerImg from "../../assets/hero/hero.jpg";
import { FaCheckCircle, FaClock, FaDollarSign, FaTag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[400px] h-[350px] w-full mx-auto  object-cover"
            />
          </div>

          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6 md:pl-8">
            <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-900 dark:text-white">
              Winter Sale Up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Discover our exclusive winter sale with up to 50% off on select items. Enjoy quality products, fast delivery, and easy payment methods.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaCheckCircle className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400 text-blue-600 dark:text-blue-300" />
                <p className="text-gray-800 dark:text-gray-200">Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaClock className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 text-orange-600 dark:text-orange-300" />
                <p className="text-gray-800 dark:text-gray-200">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaDollarSign className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 text-green-600 dark:text-green-300" />
                <p className="text-gray-800 dark:text-gray-200">Easy Payment</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaTag className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 text-yellow-600 dark:text-yellow-300" />
                <p className="text-gray-800 dark:text-gray-200">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
