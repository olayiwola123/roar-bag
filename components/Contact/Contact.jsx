import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-sm text-blue-600">Get in Touch</p>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-xs text-gray-400">
            We’d love to hear from you! Fill out the form below or use the contact details to reach out to us.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700 dark:text-gray-300">123 Main Street, City, Country</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700 dark:text-gray-300">+123 456 7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-2xl mr-3" />
              <p className="text-gray-700 dark:text-gray-300">contact@yourdomain.com</p>
            </div>
          </div>

          <div className="flex-1 h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1560022929054!2d-74.00597408468129!3d40.71277627933184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17e0bdbb0d%3A0x6cbbdbde22f48e25!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1612345678900!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
