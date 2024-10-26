import { Link } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 shadow-lg sticky">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
        
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="/src/Asset/prince.jpg"
                alt="Prince"
              />
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
               
                {isOpen ? (
                  <CloseIcon style={{ fontSize: 30, color: 'white' }} />
                ) : (
                  <MenuIcon style={{ fontSize: 30, color: 'white' }} />
                )}
              </button>
            </div>

        
            <div className="hidden sm:flex flex-grow justify-end space-x-4">
              <Link
                to="/"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/resume"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/Education"
                className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
              >
                Education
              </Link>
            </div>
          </div>
        </div>

      
        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/skills"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                Skills
              </Link>
              <Link
                to="/resume"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                Resume
              </Link>
              <Link
                to="/projects"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
