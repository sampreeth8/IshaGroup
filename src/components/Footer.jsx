import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@indianelegance.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Location</h3>
            <p className="text-gray-400">123 Fashion Street</p>
            <p className="text-gray-400">New Delhi, India 110001</p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">© 2023 Indian Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;