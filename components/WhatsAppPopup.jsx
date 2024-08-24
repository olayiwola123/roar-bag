
// import React, { useState, useEffect } from 'react';
// import { FaTimes, FaPaperPlane } from 'react-icons/fa';

// const WhatsAppPopup = ({ showPopup, setShowPopup, product, isOrder }) => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     if (isOrder && product) {
//       // Format the images as URLs
//       const imageUrls = product.images.join(' '); // Join URLs with spaces
//       setMessage(`Product: ${product.title}\nColor: ${product.color}\nRating: ${product.rating}\nImages: ${imageUrls}\n\nMessage: `);
//     } else {
//       setMessage('Hello, how can we help you?');
//     }
//   }, [product, isOrder]);

//   const handleSendMessage = () => {
//     const whatsappNumber = '+2349085371174';
//     const productDetails = isOrder ? `
//       Product: ${product.title}
//       Color: ${product.color}
//       Rating: ${product.rating}
//       Images: ${product.images.join(' ')}
      
//       Message: ${message}
//     ` : message;


//     const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(productDetails)}`;
//     window.open(url, '_blank');
//     setShowPopup(false);
//   };

//   if (!showPopup) return null;

//   return (
//     <div className="fixed bottom-16 right-4 flex items-end justify-end z-50 mb-10">
//       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-72">
//         <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
//           {isOrder ? 'Order Details' : 'Contact Us'}
//         </h2>
//         <textarea
//           className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
//           rows="3"
//           placeholder="Type your message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <div className="flex justify-end space-x-3">
//           <button
//             className="text-green-500 hover:text-green-600 transition-all duration-300"
//             onClick={handleSendMessage}
//             title="Send"
//           >
//             <FaPaperPlane size={20} />
//           </button>
//           <button
//             className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300"
//             onClick={() => setShowPopup(false)}
//             title="Cancel"
//           >
//             <FaTimes size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatsAppPopup;


import React, { useState, useEffect } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';

const WhatsAppPopup = ({ showPopup, setShowPopup, product, color, width, isOrder }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOrder && product) {
      setMessage(`
        Product: ${product.name}
        Color: ${color}
        Width: ${width}
        
        Please provide additional details or images if needed.
        
        Message: 
      `);
    } else {
      setMessage('Hello, how can we help you?');
    }
  }, [product, color, width, isOrder]);

  const handleSendMessage = () => {
    const whatsappNumber = '+2349085371174';
    const productDetails = isOrder ? `
      Product: ${product.name}
      Color: ${color}
      Width: ${width}
      
      Please provide additional details or images if needed.
      
      Message: ${message}
    ` : message;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(productDetails)}`;
    window.open(url, '_blank');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-16 right-4 flex items-end justify-end z-50 mb-10">
      <div className="relative bg-white dark:bg-gray-800 p-4 shadow-lg rounded-lg max-w-[90vw] md:max-w-[700px] lg:max-w-[800px] w-full">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200 text-2xl"
          title="Close"
        >
          <FaTimes />
        </button>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">
          {isOrder ? 'Order Details' : 'Contact Us'}
        </h3>
        {isOrder && product && (
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-800 dark:text-white mb-2">Product Details</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Name:</strong> {product.name}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Color:</strong> {color}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Width:</strong> {width}</p>
          </div>
        )}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          placeholder="Write your message here..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300 flex items-center justify-center w-full"
          title="Send"
        >
          <FaPaperPlane className="mr-2" size={20} />
          <span className="text-lg font-semibold">Send Message</span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
