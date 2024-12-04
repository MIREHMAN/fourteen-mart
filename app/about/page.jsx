import React from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:max-w-7xl h-full sm:h-screen mx-auto">
      {/* Left Div (2/3) */}
     <div className="w-full sm:w-2/3 p-8 bg-white rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">About Fourteen Mart</h2>
  
  <div className="space-y-12">
    {/* Story Section */}
    <div>
      <h3 className="text-2xl font-bold mb-4 text-gray-700">Our Story</h3>
      <p className="text-lg leading-relaxed text-gray-600">
        Founded in 2020, ShopStyle has grown from a small online boutique to a leading fashion destination. We curate the finest collections to bring you the latest trends and timeless classics.
      </p>
    </div>

    {/* Why Choose Us */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 border rounded-xl hover:shadow-md transition duration-300">
        <div className="relative w-16 h-16 mb-4">
          <Image 
            src="/LED.png"
            alt="Fast Shipping"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">Fast Shipping</h4>
        <p className="text-gray-600">2-3 day delivery nationwide</p>
      </div>
      <div className="p-6 border rounded-xl hover:shadow-md transition duration-300">
        <div className="relative w-16 h-16 mb-4">
          <Image 
            src="/camera.png"
            alt="Quality"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h4>
        <p className="text-gray-600">Curated high-quality products</p>
      </div>
    </div>

    {/* Featured Collections */}
    <div>
 
    </div>
  </div>
</div>

      {/* Right Div (1/3) */}
      <div className="w-full sm:w-1/3 p-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <div className="flex flex-col gap-6">
          {/* Customer Service Hours */}
          <div>
            <h3 className="text-xl font-bold mb-2">Customer Service</h3>
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Weekend: 10AM - 4PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Info</h3>
            <p>Email: support@shopstyle.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" 
            />
            <textarea 
              placeholder="Message" 
              rows="4" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default about;