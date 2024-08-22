import React from "react";

const Contact = () => {
  return (
    <div data-aos="zoom-in" className=" py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question or just want
            to say hi, our team is here to help.
          </p>
        </div>

        <div className="mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093723!2d144.9537353154082!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b4f3085e6e9d!2sBag%20Shop!5e0!3m2!1sen!2sau!4v1629284559075!5m2!1sen!2sau"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="Our Location"
          ></iframe>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-2">
              123 Bag Street, Fashion City, USA
            </p>
            <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-600 mb-2">Email: support@bagshop.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Business Hours
            </h3>
            <p className="text-gray-600 mb-2">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-600 mb-2">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600 mb-2">Sunday: Closed</p>
          </div>
        </div>

        {/* Feedback Form */}
        <div data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg ">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Send Us a Message
          </h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
