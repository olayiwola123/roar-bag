import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = ({ handleWhatsAppPopup }) => {
  return (
    <button 
      onClick={handleWhatsAppPopup}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg focus:outline-none"
      aria-label="WhatsApp"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsappButton;
