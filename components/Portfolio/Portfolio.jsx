import React from 'react';
import bag1 from '../../assets/hero/hero.jpg';
import bag2 from '../../assets/hero/hero.jpg';
import bag3 from '../../assets/hero/hero.jpg';

const Portfolio = () => {
  const collections = [
    {
      title: 'Classic Collection',
      description: 'Timeless designs with a modern twist. Perfect for every occasion.',
      images: [bag1, bag2, bag3],
    },
    {
      title: 'Luxury Leather',
      description: 'Crafted from the finest leather, combining style and durability.',
      images: [bag1, bag2, bag3],
    },
    {
      title: 'Eco-Friendly Line',
      description: 'Sustainable bags made with environmentally-friendly materials.',
      images: [bag1, bag2, bag3],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wider text-gray-900">Our Portfolio</h1>
        <p className="text-xl mt-4 text-gray-600">Explore our curated collections</p>
      </header>

      {collections.map((collection, index) => (
        <section key={index} className="mb-20">
          <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">{collection.title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">{collection.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {collection.images.map((image, idx) => (
              <div key={idx} className="relative group">
                <img src={image} alt={`${collection.title} ${idx + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium text-lg">View Details</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8 text-gray-800">Our Craftsmanship</h2>
        <p className="text-xl text-gray-700 text-center">
          At [Your Company Name], we believe in quality and detail. Each bag is crafted with precision and care, ensuring a product that is as durable as it is stylish. Our portfolio reflects the artistry and dedication that go into every piece.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-800">Customer Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-700">
              "The Classic Collection bag I purchased is simply stunning. The quality is unmatched, and it quickly became my go-to accessory."
            </p>
            <p className="mt-4 text-right text-gray-600 font-medium">- Jessica R.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-700">
              "I love the eco-friendly line! It's so refreshing to find a brand that cares about the environment without compromising on style."
            </p>
            <p className="mt-4 text-right text-gray-600 font-medium">- Alex M.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-lg text-gray-700">
              "The luxury leather bag I bought is absolutely gorgeous. The craftsmanship is evident, and I've received so many compliments."
            </p>
            <p className="mt-4 text-right text-gray-600 font-medium">- Sarah L.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
