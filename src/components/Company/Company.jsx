import React from "react";
import Image1 from "../../assets/hero/women.png";

const Company = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white dark:bg-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          About Our Company
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Welcome to our company! We are dedicated to providing exceptional
          services and products to our valued customers. Our mission is to
          deliver high-quality solutions that meet the needs and exceed the
          expectations of our clients.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Meet the Founder
          </h2>
          <div className="mt-6 flex flex-col items-center md:flex-row md:items-start">
            <img
              src={Image1}
              alt="Founder"
              className="w-32 h-32 rounded-full ring-4 ring-gray-300 dark:ring-gray-600"
            />
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                John Doe is the visionary behind our company, with over 20 years
                of experience in the industry. His dedication to innovation and
                excellence drives our team to deliver top-notch solutions and
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Our Values
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg
                className="h-6 w-6 flex-shrink-0 text-green-500 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
                Integrity: We uphold the highest standards of integrity in all
                our actions.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 flex-shrink-0 text-green-500 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
                Innovation: We embrace creativity and innovation to drive
                progress.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                className="h-6 w-6 flex-shrink-0 text-green-500 dark:text-green-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="ml-3 text-lg text-gray-600 dark:text-gray-300">
                Excellence: We strive for excellence in everything we do.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
