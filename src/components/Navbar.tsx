import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCollectionOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const collections = [
    { name: "Salwar Kameez", path: "/salwar" },
    { name: "Lehengas", path: "/Lehangas" },
    { name: "Blouses", path: "/Blouses" },
    { name: "Sarees", path: "/Sarees" },
    { name: "Kurtha", path: "/kurthas" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-purple-800">
              THE ISHA GROUP MFG
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-800 px-3 py-2 rounded-md transition-colors"
              >
                Home
              </Link>

              {/* Collection Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  className={`flex items-center text-gray-700 hover:text-purple-800 px-3 py-2 rounded-md transition-colors ${
                    isCollectionOpen ? "text-purple-800" : ""
                  }`}
                  onClick={() => setIsCollectionOpen(!isCollectionOpen)}
                >
                  Collection
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isCollectionOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transform transition-all duration-200 origin-top ${
                    isCollectionOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="py-1">
                    {collections.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-colors"
                        onClick={() => setIsCollectionOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-800 px-3 py-2 rounded-md transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
