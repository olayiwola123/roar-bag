// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// import handbag1 from '../../assets/hero/hero.jpg';
// import handbag2 from '../../assets/hero/hero.jpg';
// import handbag3 from '../../assets/hero/hero.jpg';
// import handbag4 from '../../assets/hero/hero.jpg';
// import backpack1 from '../../assets/hero/hero.jpg';
// import backpack2 from '../../assets/hero/hero.jpg';
// import clutch1 from '../../assets/hero/hero.jpg';
// import clutch2 from '../../assets/hero/hero.jpg';
// import newArrival1 from '../../assets/hero/hero.jpg';
// import newArrival2 from '../../assets/hero/hero.jpg';
// import sampleVideo from '../../assets/hero/video.mp4';

// const MediaCenter = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <header className="mb-12 text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Bag Media Center</h1>
//         <nav>
//           <ul className="flex justify-center space-x-4">
//             <li>
//               <a href="#handbags" className="btn btn-blue" data-aos="fade-up">Handbags</a>
//             </li>
//             <li>
//               <a href="#backpacks" className="btn btn-blue" data-aos="fade-up">Backpacks</a>
//             </li>
//             <li>
//               <a href="#clutches" className="btn btn-blue" data-aos="fade-up">Clutches</a>
//             </li>
//             <li>
//               <a href="#new-arrivals" className="btn btn-blue" data-aos="fade-up">New Arrivals</a>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <section id="handbags" className="mb-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">Handbags</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             { src: handbag1, alt: 'Elegant Handbag', title: 'Elegant Handbag', description: 'A description of the elegant handbag.' },
//             { src: handbag2, alt: 'Chic Handbag', title: 'Chic Handbag', description: 'A description of the chic handbag.' },
//             { src: handbag3, alt: 'Chic Handbag', title: 'Chic Handbag', description: 'A description of the chic handbag.' },
//             { src: handbag4, alt: 'Chic Handbag', title: 'Chic Handbag', description: 'A description of the chic handbag.' },
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
//               <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="backpacks" className="mb-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">Backpacks</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             { src: backpack1, alt: 'Stylish Backpack', title: 'Stylish Backpack', description: 'A description of the stylish backpack.' },
//             { src: backpack2, alt: 'Durable Backpack', title: 'Durable Backpack', description: 'A description of the durable backpack.' },
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
//               <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="clutches" className="mb-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">Clutches</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             { src: clutch1, alt: 'Chic Clutch', title: 'Chic Clutch', description: 'A description of the chic clutch.' },
//             { src: clutch2, alt: 'Elegant Clutch', title: 'Elegant Clutch', description: 'A description of the elegant clutch.' },
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
//               <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="new-arrivals" className="mb-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">New Arrivals</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[
//             { src: newArrival1, alt: 'New Trendy Bag', title: 'New Trendy Bag', description: 'A description of the new trendy bag.' },
//             { src: newArrival2, alt: 'Latest Fashion Bag', title: 'Latest Fashion Bag', description: 'A description of the latest fashion bag.' },
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
//               <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="videos" className="mb-12">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center" data-aos="fade-up">Media Videos</h2>
//         <div className="flex justify-center">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="zoom-in-up">
//             <video className="w-full h-64 object-cover" controls>
//               <source src={sampleVideo} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//             <div className="p-4">
//               <h3 className="text-lg font-medium text-gray-900">Sample Video</h3>
//               <p className="text-gray-600">A description of the sample video.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MediaCenter;



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import { FaHeart, FaStar, FaShoppingBag } from 'react-icons/fa';
import handbag1 from '../../assets/hero/hero.jpg';
import handbag2 from '../../assets/hero/hero.jpg';
import handbag3 from '../../assets/hero/hero.jpg';
import handbag4 from '../../assets/hero/hero.jpg';
import backpack1 from '../../assets/hero/hero.jpg';
import backpack2 from '../../assets/hero/hero.jpg';
import clutch1 from '../../assets/hero/hero.jpg';
import clutch2 from '../../assets/hero/hero.jpg';
import newArrival1 from '../../assets/hero/hero.jpg';
import newArrival2 from '../../assets/hero/hero.jpg';
import sampleVideo from '../../assets/hero/video.mp4';

const MediaCenter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen  p-4 sm:p-8 overflow-hidden">
      <header className="mb-12 sm:mb-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider" data-aos="fade-down">
          Bag Media Center
        </h1>
        <nav className="mt-4 sm:mt-8">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-6">
            <li>
              <a
                href="#handbags"
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-primary rounded-full hover:bg-yellow-500 transition duration-300"
                data-aos="fade-up"
              >
                <FaShoppingBag />
                <span>Handbags</span>
              </a>
            </li>
            <li>
              <a
                href="#backpacks"
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-primary rounded-full hover:bg-yellow-500 transition duration-300"
                data-aos="fade-up"
              >
                <FaStar />
                <span>Backpacks</span>
              </a>
            </li>
            <li>
              <a
                href="#clutches"
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-primary rounded-full hover:bg-yellow-500 transition duration-300"
                data-aos="fade-up"
              >
                <FaHeart />
                <span>Clutches</span>
              </a>
            </li>
            <li>
              <a
                href="#new-arrivals"
                className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-primary rounded-full hover:bg-yellow-500 transition duration-300"
                data-aos="fade-up"
              >
                <FaShoppingBag />
                <span>New Arrivals</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Handbags Section */}
      <section id="handbags" className="mb-12 sm:mb-16 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Handbags
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {[handbag1, handbag2, handbag3, handbag4].map((handbag, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 relative group"
              data-aos="zoom-in-up"
            >
              <img src={handbag} alt={`Handbag ${index + 1}`} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium">Handbag {index + 1}</h3>
                <p className="mt-2">A description of this handbag.</p>
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-red-500 transform scale-0 group-hover:scale-100 transition duration-500"
                  aria-label="Like this handbag"
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 bg-yellow-500 w-24 sm:w-32 h-24 sm:h-32 rounded-full transform rotate-45 opacity-25"
          data-aos="fade-in"
        ></div>
      </section>

      {/* Backpacks Section */}
      <section id="backpacks" className="mb-12 sm:mb-16 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Backpacks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {[backpack1, backpack2].map((backpack, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 relative group"
              data-aos="zoom-in-up"
            >
              <img src={backpack} alt={`Backpack ${index + 1}`} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium">Backpack {index + 1}</h3>
                <p className="mt-2">A description of this backpack.</p>
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-yellow-500 transform scale-0 group-hover:scale-100 transition duration-500"
                  aria-label="Like this backpack"
                >
                  <FaStar />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 bg-yellow-500 w-24 sm:w-32 h-24 sm:h-32 rounded-full transform rotate-45 opacity-25"
          data-aos="fade-in"
        ></div>
      </section>

      {/* Clutches Section */}
      <section id="clutches" className="mb-12 sm:mb-16 relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Clutches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {[clutch1, clutch2].map((clutch, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 relative group"
              data-aos="zoom-in-up"
            >
              <img src={clutch} alt={`Clutch ${index + 1}`} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium">Clutch {index + 1}</h3>
                <p className="mt-2">A description of this clutch.</p>
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-pink-500 transform scale-0 group-hover:scale-100 transition duration-500"
                  aria-label="Like this clutch"
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute -top-8 sm:-top-10 -left-8 sm:-left-10 bg-yellow-500 w-24 sm:w-32 h-24 sm:h-32 rounded-full transform rotate-45 opacity-25"
          data-aos="fade-in"
        ></div>
      </section>

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12" data-aos="fade-up">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
          {[newArrival1, newArrival2].map((newArrival, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 relative group"
              data-aos="zoom-in-up"
            >
              <img src={newArrival} alt={`New Arrival ${index + 1}`} className="w-full h-48 sm:h-64 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-medium">New Arrival {index + 1}</h3>
                <p className="mt-2">A description of this new arrival.</p>
                <button
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md text-yellow-500 transform scale-0 group-hover:scale-100 transition duration-500"
                  aria-label="Like this new arrival"
                >
                  <FaStar />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute -bottom-8 sm:-bottom-10 -right-8 sm:-right-10 bg-yellow-500 w-24 sm:w-32 h-24 sm:h-32 rounded-full transform rotate-45 opacity-25"
          data-aos="fade-in"
        ></div>
      </section>
      
      {/* Sample Video Section */}
      <section className="relative mt-12 sm:mt-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 sm:mb-12" data-aos="fade-up">
          Promotional Video
        </h2>
        <div className="flex justify-center items-center">
          <video className="rounded-lg shadow-lg" controls>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default MediaCenter;
