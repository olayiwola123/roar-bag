import React, { useState } from "react";
import Banner from "../../assets/hero/bg-img.jpg";
import toast from "react-hot-toast";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccessMessage("Thank you for subscribing! We'll keep you updated.");
      toast.success("Thank you for subscribing! We'll keep you updated.")
      setEmail("");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-500 text-center mb-4">{successMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
              className="w-full p-3 text-black rounded-lg"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
