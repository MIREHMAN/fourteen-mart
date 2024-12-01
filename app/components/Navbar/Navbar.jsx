import Link from 'next/link';
import Search from "../Search/Search"

const pages = ['Home', 'Products', 'Stores', 'About', 'Login'];

function Navbar() {
  return (
    <nav className="bg-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-white">
          Fourteen Mart
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {pages.map((page) => (
            <Link
            key={page}
            href={page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`}
            className="text-white hover:text-gray-300 transition duration-300"
          >
           
              {page}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Search/>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;