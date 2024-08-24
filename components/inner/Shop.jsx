import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../assets/hero/hero1.avif"; 
import Image2 from "../../assets/hero/hero2.avif";
import Image3 from "../../assets/hero/hero.jpg";


import ProductImage1 from "../../assets/hero/hero1.avif"; 
import ProductImage2 from "../../assets/hero/hero2.avif";
import ProductImage3 from "../../assets/hero/hero3.avif";
import ProductImage4 from "../../assets/hero/hero.jpg";
import ProductImage5 from "../../assets/hero/hero4.avif";
import ProductImage7 from "../../assets/hero/hero5.avif";


const products = [
  {
    id: 1,
    name: "Leather Tote Bag",
    price: "₦50,000",
    description: "A stylish leather tote bag perfect for everyday use.",
    images: [
      ProductImage1,
      ProductImage2,
      ProductImage3,
      ProductImage4,
      ProductImage5,
      ProductImage7
    ],
    category: "Tote Bags",
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: "₦35,000",
    description: "A durable canvas backpack with ample space for all your essentials.",
    images: [
      ProductImage5, // Use the same or different images as needed
      ProductImage2,
      ProductImage3,
      ProductImage4,
      ProductImage5,
      ProductImage7
    ],
    category: "Backpacks",
  },
  {
    id: 3,
    name: "Sling Bag",
    price: "₦25,000",
    description: "A compact and fashionable sling bag for your essentials.",
    images: [
      ProductImage4,
      ProductImage2,
      ProductImage3,
      ProductImage4,
      ProductImage5,
      ProductImage7
    ],
    category: "Sling Bags",
  },
  {
    id: 3,
    name: "Sling Bag",
    price: "₦25,000",
    description: "A compact and fashionable sling bag for your essentials.",
    images: [
      ProductImage2,
      ProductImage2,
      ProductImage3,
      ProductImage4,
      ProductImage5,
      ProductImage7
    ],
    category: "Sling Bags",
  },
  {
    id: 3,
    name: "Sling Bag",
    price: "₦45,000",
    description: "A compact and fashionable sling bag for your essentials.",
    images: [
      ProductImage3,
      ProductImage4,
      ProductImage3,
      ProductImage4,
      ProductImage5,
      ProductImage7
    ],
    category: "Sling Bags",
  },

];

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleVariationClick = (images) => {
    setSelectedProduct(images);
  };

  const handleQuoteRequest = () => {
    // Handle quote request logic here
    alert("Quote request submitted!");
  };

  return (
    <div className="py-10 mb-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-12">
      <div className="container mx-auto px-4">
        {/* Carousel Section */}
        <div className="mb-10">
          <Slider {...carouselSettings}>
            <div><img src={Image1} alt="Featured" className="w-full h-60 object-cover rounded-lg" /></div>
            <div><img src={Image2} alt="Featured" className="w-full h-60 object-cover rounded-lg" /></div>
            <div><img src={Image3} alt="Featured" className="w-full h-60 object-cover rounded-lg" /></div>
          </Slider>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Shop</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            Browse our collection of high-quality bags, explore different categories, and find the perfect one for you. All prices are in Naira.
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Categories</h2>
          <div className="flex justify-center gap-4 mb-6">
            <button onClick={() => handleCategoryClick("All")} className="bg-blue-500 text-white py-2 px-4 rounded-lg">All</button>
            <button onClick={() => handleCategoryClick("Tote Bags")} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Tote Bags</button>
            <button onClick={() => handleCategoryClick("Backpacks")} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Backpacks</button>
            <button onClick={() => handleCategoryClick("Sling Bags")} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Sling Bags</button>
            {/* Add more categories as needed */}
          </div>
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="relative">
                <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
                <div
                  className="absolute top-0 right-0 bg-blue-500 text-white p-2 rounded-bl-lg cursor-pointer"
                  onClick={() => handleVariationClick(product.images)}
                >
                  <span>View Variations</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-blue-500">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
              <p className="text-lg font-bold text-blue-600">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Product Variations Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-gray-600 dark:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Product Variations</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                {selectedProduct.map((img, index) => (
                  <img key={index} src={img} alt={`Variation ${index + 1}`} className="w-40 h-40 object-cover rounded-lg" />
                ))}
              </div>
              <button 
                onClick={handleQuoteRequest} 
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Payment Information</h2>
          <p>
            We accept various payment methods including credit/debit cards and bank transfers. For your convenience, payments are processed in Naira. If you have any questions about payment options or need assistance, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
