import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import TopProducts from '../components/TopProducts/TopProducts';
import Banner from '../components/Banner/Banner';
import Subscribe from '../components/Subscribe/Subscribe';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import WhatsappButton from '../components/WhatsappButton';
import WhatsAppPopup from '../components/WhatsAppPopup';
import About from './About/About';

const LandingPage = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [whatsappPopup, setWhatsappPopup] = useState(false);

  const handleOrderPopup = () => setOrderPopup(!orderPopup);
  const handleWhatsAppPopup = () => setWhatsappPopup(!whatsappPopup);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      {/* <Products /> */}
      <About />
      <Testimonials />
      <Contact />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <WhatsappButton handleWhatsAppPopup={handleWhatsAppPopup} />
      <WhatsAppPopup showPopup={whatsappPopup} setShowPopup={setWhatsappPopup} />
    </div>
  );
};

export default LandingPage;
