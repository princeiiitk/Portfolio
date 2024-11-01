import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Resume
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                    : "text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Education
              </NavLink>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Resume
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                    : "text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
