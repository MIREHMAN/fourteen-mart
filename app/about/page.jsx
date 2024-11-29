import Head from 'next/head';

function about() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Head>
        <title>About Us - Fourteen Mart</title>
        <meta name="description" content="Learn more about Fourteen Mart, our mission, and our values." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h2 className="text-lg font-bold mb-2">Our Mission</h2>
          <p className="text-sm">
            At Fourteen Mart, our mission is to provide the best products and services to our customers. We strive to create a seamless and enjoyable shopping experience for all.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Our Values</h2>
          <ul className="text-sm">
            <li className="mb-2">Customer satisfaction is our top priority.</li>
            <li className="mb-2">We strive for excellence in everything we do.</li>
            <li className="mb-2">We believe in building strong relationships with our customers and partners.</li>
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-20 h-20 rounded-full mb-2" />
            <h3 className="text-sm font-bold mb-1">John Doe</h3>
            <p className="text-sm">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img src="/team-member-2.jpg" alt="Team Member 2" className="w-20 h-20 rounded-full mb-2" />
            <h3 className="text-sm font-bold mb-1">Jane Smith</h3>
            <p className="text-sm">Co-Founder & CMO</p>
          </div>
          <div className="text-center">
            <img src="/team-member-3.jpg" alt="Team Member 3" className="w-20 h-20 rounded-full mb-2" />
            <h3 className="text-sm font-bold mb-1">Bob Johnson</h3>
            <p className="text-sm">CTO</p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
        <p className="text-sm">
          Have a question or need help with something? Contact us at <a href="mailto:info@fourteenmart.com" className="text-blue-600 hover:text-blue-800">info@fourteenmart.com</a> or fill out the form below.
        </p>
        <form className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm font-bold mb-1">Name:</label>
              <input type="text" id="name" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-bold mb-1">Email:</label>
              <input type="email" id="email" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-bold mb-1">Message:</label>
            <textarea id="message" className="w-full p-2 mb-4 border border-gray-300 rounded-lg" rows={5} />
          </div>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default about;