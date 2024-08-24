import React from 'react';

const Contact = () => {
  return (
    <div className="py-10 mb-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-24">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300">
            We’d love to hear from you! Fill out the form below or get in touch through our contact details.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <p className="mb-4">
              <strong className="text-gray-600 dark:text-gray-300">Email:</strong> 
              <a href="mailto:info@example.com" className="text-blue-500 hover:underline">bag@gmail.com</a>
            </p>
            <p className="mb-4">
              <strong className="text-gray-600 dark:text-gray-300">Phone:</strong> 
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>
            </p>
            <p className="mb-4">
              <strong className="text-gray-600 dark:text-gray-300">Address:</strong> 
             123 main str ikeja 
            </p>
          </div>

          {/* Map */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Location</h2>
            <div className="relative h-60 w-full">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.702031494944!2d-122.40107768468124!3d37.79098027975782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d603e36ab%3A0x6a69dce0e6b8a8a6!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094111!5e0!3m2!1sen!2sus!4v1618179000475!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Send Us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
