import React from 'react';
import { motion } from 'framer-motion';

const PromoCard = ({ title, discount, category, image, bgColor }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`${bgColor} rounded-lg overflow-hidden relative`}
    >
      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <span className="text-2xl font-bold">{discount}%</span>
          <h3 className="text-xl font-semibold mb-2">OFF</h3>
          <p className="text-lg mb-4">{category}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-4 py-2 rounded-full w-fit"
        >
          Shop Now
        </motion.button>
      </div>
      <img 
        src={image} 
        alt={title} 
        className="absolute right-0 bottom-0 h-3/4 object-contain"
      />
    </motion.div>
  );
};

const PromoBanners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PromoCard
          title="Leather Bag"
          discount={60}
          category="Leather Bag"
          image="/bags/leather-promo.png"
          bgColor="bg-[#FFE5D9]"
        />
        <PromoCard
          title="Woman Belt Bag"
          discount={34}
          category="Woman Belt Bag"
          image="/bags/belt-promo.png"
          bgColor="bg-[#E3F2FD]"
        />
        <PromoCard
          title="Shopping Bag"
          discount={40}
          category="Shopping Bag"
          image="/bags/shopping-promo.png"
          bgColor="bg-[#424242]"
        />
      </div>
    </div>
  );
};

export default PromoBanners; 