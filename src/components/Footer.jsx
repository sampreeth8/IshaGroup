import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@ishagroupmfg.com</p>
            <p className="text-gray-400">Phone: +1 (437) 907-1895</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-400">15-3601 LAWRENCE AVE EAST SCARBOROUGH, ON M1G 1P5</p>
            <p className="text-gray-400">TORONTO, CANADA</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Saturday: 6:00 AM - 10:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;