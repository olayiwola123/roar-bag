
// import React, { useState } from "react";
// import Img1 from "../../assets/women/women.png";
// import Img2 from "../../assets/women/women2.jpg";
// import Img3 from "../../assets/women/women3.jpg";
// import Img4 from "../../assets/women/women4.jpg";
// import { FaStar, FaTimes } from "react-icons/fa";
// import WhatsAppPopup from "../WhatsAppPopup";

// const ProductsData = [
//   {
//     id: 1,
//     images: [Img1, Img2, Img3],
//     title: "Women Ethnic",
//     rating: 5.0,
//     color: "white",
//     aosDelay: "0",
//   },
//   {
//     id: 2,
//     images: [Img2, Img3, Img4],
//     title: "Women Western",
//     rating: 4.5,
//     color: "Red",
//     aosDelay: "200",
//   },
//   {
//     id: 3,
//     images: [Img3, Img4, Img1],
//     title: "Goggles",
//     rating: 4.7,
//     color: "brown",
//     aosDelay: "400",
//   },
//   {
//     id: 4,
//     images: [Img4, Img1, Img2],
//     title: "Printed T-Shirt",
//     rating: 4.4,
//     color: "Yellow",
//     aosDelay: "600",
//   },
//   {
//     id: 5,
//     images: [Img2, Img3, Img4],
//     title: "Fashion T-Shirt",
//     rating: 4.5,
//     color: "Pink",
//     aosDelay: "800",
//   },
// ];

// const Products = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("yellow");

//   const handleImageClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleOrder = () => {
//     setShowPopup(true);
//   };

//   const handleColorChange = (e) => {
//     setSelectedColor(e.target.value);
//   };

//   return (
//     <div className="mt-14 mb-12">
//       <div className="container">
//         <div className="text-center mb-10 max-w-[600px] mx-auto">
//           <p data-aos="fade-up" className="text-sm text-primary">
//             Top Selling Products for you
//           </p>
//           <h1 data-aos="fade-up" className="text-3xl font-bold">
//             Products
//           </h1>
//           <p data-aos="fade-up" className="text-xs text-gray-400">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
//             asperiores modi Sit asperiores modi
//           </p>
//         </div>
//         <div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//             {ProductsData.map((data) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={data.aosDelay}
//                 key={data.id}
//                 className="space-y-3"
//               >
//                 <img
//                   src={data.images[0]}
//                   alt={data.title}
//                   className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
//                   onClick={() => handleImageClick(data)}
//                 />
//                 <div>
//                   <h3 className="font-semibold">{data.title}</h3>
//                   <p className="text-sm text-gray-600">{data.color}</p>
//                   <div className="flex items-center gap-1">
//                     <FaStar className="text-yellow-400" />
//                     <span>{data.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
//               View All Button
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Product Detail Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//               onClick={() => setSelectedProduct(null)}
//             >
//               <FaTimes size={24} />
//             </button>
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
//                 <img
//                   src={selectedProduct.images[0]}
//                   alt={selectedProduct.title}
//                   className="w-full h-80 object-cover rounded-md"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 md:pl-4">
//                 <h3 className="text-2xl font-bold mt-4 md:mt-0">{selectedProduct.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{selectedProduct.color}</p>
//                 <div className="flex items-center gap-1 mt-2">
//                   <FaStar className="text-yellow-400" />
//                   <span>{selectedProduct.rating}</span>
//                 </div>
//                 <div className="mt-6">
//                   <h4 className="text-lg font-semibold">Choose Style</h4>
//                   {/* Add options for different styles */}
//                   <div className="space-y-2">
//                     <button className="bg-green-200 p-2 rounded-md">Style 1</button>
//                     <button className="bg-green-200 p-2 rounded-md">Style 2</button>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold">Pick a Color</h4>
//                   <select
//                     value={selectedColor}
//                     onChange={handleColorChange}
//                     className="w-full p-2 border rounded-md bg-slate-400"
//                   >
//                     <option value="yellow">Yellow</option>
//                     <option value="pink">Pink</option>
//                     <option value="orange">Orange</option>
//                   </select>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold text-yellow-200">Select Size</h4>
//                   <select className="p-2 border rounded-md bg-slate-400">
//                     <option value="S">Small</option>
//                     <option value="M">Medium</option>
//                     <option value="L">Large</option>
//                   </select>
//                 </div>
//                 <div className="mt-6">
//                   <button
//                     className="bg-primary text-white py-2 px-4 rounded-md"
//                     onClick={handleOrder}
//                   >
//                     Order Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

 
//       {showPopup && selectedProduct && (
//         <WhatsAppPopup
//           showPopup={showPopup}
//           setShowPopup={setShowPopup}
//           product={selectedProduct}
//           color={selectedColor}
//           isOrder={true}
//         />
//       )}
//     </div>
//   );
// };

// export default Products;
import React, { useState } from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WhatsAppPopup from "../WhatsAppPopup";

const ProductsData = [
  {
    id: 1,
    images: [Img1, Img2, Img3],
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    images: [Img2, Img3, Img4],
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    images: [Img3, Img4, Img1],
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    images: [Img4, Img1, Img2],
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    images: [Img2, Img3, Img4],
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); 
  };

  const handleOrder = () => {
    setShowPopup(true);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProduct.images.length
    );
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.images[0]}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
                  onClick={() => handleImageClick(data)}
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-auto" style={{ maxHeight: '80%' }}>
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
              <div className="relative">
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 p-2"
                  onClick={handlePrevImage}
                >
                  <FaChevronLeft size={20} />
                </button>
                <img
                  src={selectedProduct.images[currentImageIndex]}
                  alt={selectedProduct.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 p-2"
                  onClick={handleNextImage}
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{selectedProduct.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedProduct.color}</p>
                <div className="flex items-center gap-1 mt-2">
                  <FaStar className="text-yellow-400" />
                  <span>{selectedProduct.rating}</span>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Choose Style</h4>
                  <div className="space-y-2">
                    <button className="bg-green-200 p-2 rounded-md">Style 1</button>
                    <button className="bg-green-200 p-2 rounded-md">Style 2</button>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Pick a Color</h4>
                  <select
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="w-full p-2 border rounded-md bg-slate-400"
                  >
                    <option value="yellow">Yellow</option>
                    <option value="pink">Pink</option>
                    <option value="orange">Orange</option>
                  </select>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-yellow-200">Select Size</h4>
                  <select className="w-full p-2 border rounded-md bg-slate-400 mx-auto">
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                  </select>
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="bg-primary text-white py-2 px-4 rounded-md"
                    onClick={handleOrder}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPopup && selectedProduct && (
        <WhatsAppPopup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          product={selectedProduct}
          color={selectedColor}
          isOrder={true}
        />
      )}
    </div>
  );
};

export default Products;
