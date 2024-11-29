import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-700 text-white  py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <p className="text-sm">
            Fourteen Mart is an e-commerce store dedicated to providing the best products to our customers.
          </p>
          <ul className="flex space-x-4 mt-4">
            <li>
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook text-lg">fb icon</i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-lg">insta icon</i>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter text-lg">tiktok icon</i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">Customer Service</h5>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="mb-2">
              <Link href="/returns">Returns & Refunds</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <h5 className="text-lg font-bold mb-2">Payment & Shipping</h5>
          <ul className="text-sm">
            <li className="mb-2">
              <Link href="/payment-methods">Payment Methods</Link>
            </li>
            <li className="mb-2">
              <Link href="/shipping-policy">Shipping Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-300 text-gray-600 py-2 text-center">
        &copy; 2024 Fourteen Mart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;