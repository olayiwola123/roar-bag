import React from "react";


const AboutUs = () => {
  return (
    <div className="py-10 mb-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
         
            <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
       
    
    
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Discover the story behind our passion for bags and the people who make it all possible.
            </p>
         
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Story</h2>
              <p>
                Founded with a love for quality craftsmanship and unique designs, we are dedicated to creating bags that blend functionality with style. Our journey began with a simple idea to provide high-quality, fashionable bags that meet the needs of modern individuals.
              </p>
            </div>
      
     
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">Our Mission</h2>
              <p>
                Our mission is to craft exceptional bags that offer both beauty and durability. We are committed to using the finest materials and techniques to ensure that each bag stands out as a testament to our dedication to quality.
              </p>
            </div>
         
        </div>

        {/* Our Values Section */}
        <div className="mt-10">
      
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Quality</h3>
                <p>
                  We believe in uncompromising quality, ensuring that every bag we produce meets our high standards and exceeds customer expectations.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-500">Innovation</h3>
                <p>
                  Our team is dedicated to innovating new designs and materials to keep up with the latest trends and customer needs.
                </p>
              </div>
            </div>
   
        </div>

        {/* Our Process Section */}
        <div className="mt-10">
        
        
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Our Process</h2>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>
                From conceptual design to final product, our process involves meticulous planning, skilled craftsmanship, and rigorous quality checks to ensure that each bag meets our exacting standards. We take pride in our transparent process and our commitment to delivering the best.
              </p>
            </div>
         
        </div>

        {/* Team Section */}
        <div className="mt-10">
    
    
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src="https://picsum.photos/100/100" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center text-blue-500">Mr Olatech</h3>
                <p className="text-center">Head Designer</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src="https://picsum.photos/100/100" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center text-blue-500">Mr Kamal</h3>
                <p className="text-center">Co-Designer</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src="https://picsum.photos/100/100" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center text-blue-500">Mr Kamirl</h3>
                <p className="text-center">Director</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img src="https://picsum.photos/100/100" alt="Team Member" className="rounded-full w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center text-blue-500">Mr Olatech</h3>
                <p className="text-center">Designer</p>
              </div>
              {/* Add more team members here */}
            </div>
    
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
