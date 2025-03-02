import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaShoppingBag, FaHeart, FaSearch, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

// Fake API data for bags
const bagData = [
  {
    id: 1,
    name: "Pastel Backpack",
    price: 79.99,
    description: "Cute pastel backpack with multiple compartments. Perfect for school or travel!",
    colors: ["Pink", "Blue", "Lavender"],
    widths: ["Small", "Medium", "Large"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Cute Tote Bag",
    price: 49.99,
    description: "Stylish tote bag with adorable cat pattern. Spacious interior with inner pockets.",
    colors: ["White", "Beige", "Yellow"],
    widths: ["Standard", "Large"],
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954555-5dbd21112c3d?w=800&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Mini Crossbody Bag",
    price: 39.99,
    description: "Adorable mini crossbody bag with adjustable strap. Perfect for carrying essentials.",
    colors: ["Pink", "Blue", "Green", "Black"],
    widths: ["Mini", "Standard"],
    images: [
      "https://images.unsplash.com/photo-1599374903859-881ff7e098c4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548863227-3af567fc3b27?w=800&auto=format&fit=crop"
    ],
    featured: false
  },
  {
    id: 4,
    name: "Plush Shoulder Bag",
    price: 50000.99,
    description: "Fuzzy plush shoulder bag with cute bunny ears. The perfect statement piece!",
    colors: ["Pink", "White", "Brown"],
    widths: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: 5,
    name: "Kawaii Messenger Bag",
    price: 60000.99,
    description: "Fun and colorful messenger bag with rainbow strap. Water-resistant and durable.",
    colors: ["Rainbow", "Pastel", "Black"],
    widths: ["Medium", "Large"],
    images: [
      "https://images.unsplash.com/photo-1575844264771-892081089af5?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631856954857-1cf3d8d24642?w=800&auto=format&fit=crop"
    ],
    featured: false
  },
  {
    id: 6,
    name: "Floral Handbag",
    price: 80000.99,
    description: "Elegant handbag with delicate floral pattern. Features gold-tone hardware and inner compartments.",
    colors: ["Floral Pink", "Floral Blue", "Floral Green"],
    widths: ["Standard"],
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop"
    ],
    featured: true
  }
];

// Main App Component
const BagShopApp = () => {
  const [whatsappPopup, setWhatsappPopup] = useState(false);
  const [selectedBag, setSelectedBag] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedWidth, setSelectedWidth] = useState('');
  const [isOrderPopup, setIsOrderPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBags, setFilteredBags] = useState(bagData);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState(100);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const filteredResults = bagData.filter(bag => 
      bag.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
      bag.price <= priceRange
    );
    setFilteredBags(filteredResults);
  }, [searchTerm, priceRange]);

  const handleWhatsAppPopup = () => {
    setIsOrderPopup(false);
    setWhatsappPopup(true);
  };

  const handleOrderDetails = (bag) => {
    setSelectedBag(bag);
    setSelectedColor(bag.colors[0]);
    setSelectedWidth(bag.widths[0]);
    setIsOrderPopup(true);
    setWhatsappPopup(true);
  };

  const toggleFavorite = (bagId) => {
    if (favorites.includes(bagId)) {
      setFavorites(favorites.filter(id => id !== bagId));
    } else {
      setFavorites([...favorites, bagId]);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className=" p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <FaShoppingBag className="text-pink-600 text-3xl mr-2" />
            <h1 className="text-3xl font-bold text-pink-600">CutieBags</h1>
          </div>
          
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for cute bags..."
              className="w-full py-2 px-4 rounded-full border-2 border-pink-300 focus:outline-none focus:border-pink-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-3 text-pink-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-pink-600 mb-6">Featured Bags</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bagData.filter(bag => bag.featured).map(bag => (
              <div key={bag.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img src={bag.images[0]} alt={bag.name} className="w-full h-full object-cover" />
                  <button 
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                    onClick={() => toggleFavorite(bag.id)}
                  >
                    <FaHeart className={favorites.includes(bag.id) ? "text-pink-500" : "text-gray-300"} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">{bag.name}</h3>
                  <p className="text-pink-500 font-bold my-2">₦{bag.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{bag.description}</p>
                  <button 
                    className="w-full py-2 px-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center"
                    onClick={() => handleOrderDetails(bag)}
                  >
                    <FaShoppingBag className="mr-2" /> Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-pink-600">All Bags</h2>
            <button 
              className="flex items-center py-2 px-4 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition"
              onClick={() => setShowFilters(!showFilters)}
            >
              <MdFilterList className="mr-2" /> Filters
            </button>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Price Range: ₦{priceRange}</h3>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBags.map(bag => (
              <div key={bag.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img src={bag.images[0]} alt={bag.name} className="w-full h-full object-cover" />
                  <button 
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                    onClick={() => toggleFavorite(bag.id)}
                  >
                    <FaHeart className={favorites.includes(bag.id) ? "text-pink-500" : "text-gray-300"} />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{bag.name}</h3>
                      <p className="text-pink-500 font-bold my-1">₦{bag.price}</p>
                    </div>
                    <button 
                      className="py-1 px-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-sm"
                      onClick={() => handleOrderDetails(bag)}
                    >
                      Order
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Colors:</span> {bag.colors.join(", ")}
                    </p>
                    <p className="text-xs text-gray-500">
                      <span className="font-semibold">Sizes:</span> {bag.widths.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-pink-100 p-6 text-center">
        <p className="text-yellow-600">© 2025 CutieBags - All Rights Reserved</p>
        <p className="text-sm text-yellow-500 mt-2">Contact us via WhatsApp for custom orders!</p>
      </footer>

      {/* WhatsApp Button */}
      <WhatsappButton handleWhatsAppPopup={handleWhatsAppPopup} />

      {/* WhatsApp Popup */}
      <WhatsAppPopup 
        showPopup={whatsappPopup} 
        setShowPopup={setWhatsappPopup} 
        product={selectedBag} 
        color={selectedColor}
        width={selectedWidth}
        isOrder={isOrderPopup}
      />
    </div>
  );
};

// WhatsApp Button Component
const WhatsappButton = ({ handleWhatsAppPopup }) => {
  return (
    <button 
      onClick={handleWhatsAppPopup}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg focus:outline-none animate-bounce"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

// Redesigned WhatsApp Popup Component
const WhatsAppPopup = ({ showPopup, setShowPopup, product, color, width, isOrder }) => {
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState(color || '');
  const [selectedWidth, setSelectedWidth] = useState(width || '');

  useEffect(() => {
    if (isOrder && product) {
      setSelectedColor(color || product.colors[0]);
      setSelectedWidth(width || product.widths[0]);
      setMessage(`Hi! I'm interested in ordering the ${product.name}! Could you provide more details?`);
    } else {
      setMessage('Hello! I have a question about your cute bags!');
    }
  }, [product, color, width, isOrder]);

  const handleSendMessage = () => {
    const whatsappNumber = '+2349085371174';
    const productDetails = isOrder ? `
🛍️ *ORDER DETAILS* 🛍️

*Product:* ${product.name}
*Price:* ₦${product.price}
*Color:* ${selectedColor}
*Size:* ${selectedWidth}

*Customer Message:* 
${message}
    ` : message;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(productDetails)}`;
    window.open(url, '_blank');
    setShowPopup(false);
    setStep(1);
  };

  const handleNextStep = () => {
    setStep(2);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 pt-20">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 text-white">
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-white hover:text-gray-200 text-xl"
            title="Close"
          >
            <FaTimes />
          </button>
          <div className="flex items-center">
            <FaWhatsapp className="text-3xl mr-3" />
            <div>
              <h3 className="text-xl font-bold">
                {isOrder ? 'Order via WhatsApp' : 'Contact via WhatsApp'}
              </h3>
              <p className="text-sm opacity-90">We'll respond as soon as possible!</p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {isOrder && product && step === 1 && (
            <div className="mb-5">
              <div className="flex mb-4">
                <div className="w-1/3 mr-4">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800">{product.name}</h4>
                  <p className="text-green-600 font-bold my-1">${product.price}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Color:</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedColor === c 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Width/Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Size:</label>
                <div className="flex flex-wrap gap-2">
                  {product.widths.map(w => (
                    <button
                      key={w}
                      onClick={() => setSelectedWidth(w)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedWidth === w 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={handleNextStep}
                className="w-full py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-all duration-300"
              >
                Continue
              </button>
            </div>
          )}
          
          {(!isOrder || step === 2) && (
            <>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your message here..."
              />
              
              <button
                onClick={handleSendMessage}
                className="w-full py-3 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send via WhatsApp
              </button>
            </>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 p-3 text-center text-xs text-gray-500">
          By sending this message, you agree to our Terms of Service.
        </div>
      </div>
    </div>
  );
};

export default BagShopApp;