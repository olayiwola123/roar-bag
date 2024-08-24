
import React, { useState } from 'react';
import BagImage1 from "../../assets/hero/hero1.avif";
import BagImage2 from "../../assets/hero/hero.jpg";
import BagImage3 from "../../assets/hero/hero2.avif";
import BagImage4 from "../../assets/hero/hero1.avif";
import WhatsAppPopup from '../WhatsAppPopup'

const bags = [
  {
    id: 1,
    name: "Classic Leather Bag",
    image: BagImage1,
    variations: [BagImage1, BagImage2, BagImage3, BagImage4],
  },
  {
    id: 2,
    name: "Stylish Tote Bag",
    image: BagImage2,
    variations: [BagImage1, BagImage2, BagImage3, BagImage4],
  },
  {
    id: 3,
    name: "Elegant Handbag",
    image: BagImage3,
    variations: [BagImage1, BagImage2, BagImage3, BagImage4],
  },
  {
    id: 4,
    name: "Modern Backpack",
    image: BagImage4,
    variations: [BagImage1, BagImage2, BagImage3, BagImage4],
  },
];

const BagsSection = () => {
  const [selectedBag, setSelectedBag] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const openWhatsAppPopup = () => {
    setShowWhatsAppPopup(true);
  };

  const closeSidebar = () => {
    setSelectedBag(null);
    setMainImage(null);
  };

  return (
    <section className="bg-gray-100 py-20">
      <div data-aos="zoom-up"  className="container mx-auto px-6 flex flex-col lg:flex-row">
        <div className="flex-1 lg:mr-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
            Our Featured Bags
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bags.map((bag) => (
              <div key={bag.id} className="bg-white rounded-lg shadow-lg p-4">
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-64 object-cover rounded-lg mb-4 transform hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {bag.name}
                </h3>
                <button
                  onClick={() => {
                    setSelectedBag(bag);
                    setMainImage(bag.image);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 flex items-center justify-center"
                >
                  View Variations
                </button>
                {/* <button
                  onClick={openWhatsAppPopup}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 flex items-center justify-center mt-2"
                >
                  Get Quote
                </button> */}
              </div>
            ))}
          </div>
        </div>

        {/* Bag Details Sidebar/Modal for All Screens */}
        {selectedBag && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg bg-white p-4 rounded-lg overflow-y-auto shadow-lg">
              <button
                onClick={closeSidebar}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {selectedBag.name} - Variations
              </h3>
              <div className="flex flex-col">
                {/* Main Image */}
                <div className="mb-4">
                  <img
                    src={mainImage}
                    alt={selectedBag.name}
                    className="w-full h-36 object-cover rounded-lg mb-2"
                  />
                </div>
                
                {/* Variations and Options */}
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Variations
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedBag.variations.map((variation, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-1 rounded-lg cursor-pointer"
                        onClick={() => handleImageClick(variation)}
                      >
                        <img
                          src={variation}
                          alt={`${selectedBag.name} Variation ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg mb-1"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Select Options
                  </h4>
                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-2">
                      Width:
                      <input type="range" min="0" max="100" className="w-full mt-1" />
                    </label>
                    <label className="text-gray-700 mb-2">
                      Color:
                      <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg">
                        <option>Black</option>
                        <option>Brown</option>
                        <option>Red</option>
                        <option>Blue</option>
                      </select>
                    </label>
                  </div>
                </div>
                
                <button onClick={openWhatsAppPopup} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 w-full mb-2">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Popup */}
        <WhatsAppPopup
          showPopup={showWhatsAppPopup}
          setShowPopup={setShowWhatsAppPopup}
          product={selectedBag}
          isOrder={true}
        />
      </div>
    </section>
  );
};

export default BagsSection;
