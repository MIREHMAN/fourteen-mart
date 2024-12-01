import React from 'react';

const about = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:max-w-7xl h-full sm:h-screen mx-auto">
      {/* Left Div (2/3) */}
      <div className="w-full sm:w-2/3 p-4 bg-white">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <div className="flex flex-col gap-4">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          {/* Vision */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Core Values</h3>
            <ul className="list-disc pl-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed sit amet nulla auctor</li>
            </ul>
          </div>
          {/* Policies */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Policies</h3>
            <ul className="list-disc pl-4">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed sit amet nulla auctor</li>
            </ul>
          </div>
          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Team Members</h3>
            <div className="flex flex-row gap-4">
              <div className="w-1/3">
                <img src="https://via.placeholder.com/100" alt="Team Member" />
                <h4 className="text-lg font-bold">John Doe</h4>
                <p className="text-sm">CEO</p>
              </div>
              <div className="w-1/3">
                <img src="https://via.placeholder.com/100" alt="Team Member" />
                <h4 className="text-lg font-bold">Jane Doe</h4>
                <p className="text-sm">CTO</p>
              </div>
              <div className="w-1/3">
                <img src="https://via.placeholder.com/100" alt="Team Member" />
                <h4 className="text-lg font-bold">Bob Smith</h4>
                <p className="text-sm">CMO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Div (1/3) */}
      <div className="w-full sm:w-1/3 p-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col gap-4">
          {/* Address */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Address</h3>
            <p className="text-lg">123 Main St, Anytown, USA 12345</p>
          </div>
          {/* Location Map */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Location Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838129873637!2d-122.08405108438315!3d37.38534807965468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad5%3A0xb6a462a8d52899c!2sGoogleplex!5e0!3m2!1sen!2sin!4v1636445989141!5m2!1sen!2sin"
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
                    {/* Contact Us Form */}
                    <div>
            <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
            <form>
              <div className="flex flex-col gap-2">
                <input type="text" placeholder="Name" className="p-2 border border-gray-400 rounded-lg" />
                <input type="email" placeholder="Email" className="p-2 border border-gray-400 rounded-lg" />
                <textarea placeholder="Message" className="p-2 border border-gray-400 rounded-lg"></textarea>
              </div>
              <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 mt-2">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;