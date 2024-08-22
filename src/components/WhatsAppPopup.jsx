
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

const WhatsAppPopup = ({ showPopup, setShowPopup, product, isOrder }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOrder && product) {
      
      setMessage(`Product: ${product.title}\nColor: ${product.color}\nRating: ${product.rating}\n\nPlease manually attach the images below when sending the message.\n\nMessage: `);
    } else {
      setMessage('Hello, how can we help you?');
    }
  }, [product, isOrder]);

  const handleSendMessage = () => {
    const whatsappNumber = '+2349085371174';
    const productDetails = isOrder ? `
      Product: ${product.title}
      Color: ${product.color}
      Rating: ${product.rating}
      
      Please manually attach the images below when sending the message.
      
      Message: ${message}
    ` : message;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(productDetails)}`;
    window.open(url, '_blank');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-16 right-4 flex items-end justify-end z-50 mb-10">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-72">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          {isOrder ? 'Order Details' : 'Contact Us'}
        </h2>
        {isOrder && product && (
          <div className="mb-4">
            <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Product Images:</h3>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product Image ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border border-gray-300"
                />
              ))}
            </div>
          </div>
        )}
        <textarea
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          rows="3"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-end space-x-3">
          <button
            className="text-green-500 hover:text-green-600 transition-all duration-300"
            onClick={handleSendMessage}
            title="Send"
          >
            <FaPaperPlane size={20} />
          </button>
          <button
            className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 transition-all duration-300"
            onClick={() => setShowPopup(false)}
            title="Cancel"
          >
            <FaTimes size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;


