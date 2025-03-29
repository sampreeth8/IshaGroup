import { useState, FormEvent } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-purple-900 text-white p-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Connect With Us</h1>
          <p className="mt-4 text-lg">
            Your trusted partner for authentic Indian traditional wear in Canada
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-8">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FiMail className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900">Email</p>
              <p className="text-gray-600 mt-2">info@ishagroupmfg.com</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FiPhone className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900">Phone</p>
              <p className="text-gray-600 mt-2">+1 (437) 907-1895</p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FiMapPin className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900">Location</p>
              <p className="text-gray-600 mt-2">
                15-3601 LAWRENCE AVE EAST
                <br />
                SCARBOROUGH, ON M1G 1P5
                <br />
                TORONTO, CANADA
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FiClock className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <p className="text-xl font-semibold text-gray-900">
                Business Hours
              </p>
              <p className="text-gray-600 mt-2">
                Monday - Saturday:
                <br />
                11:00 AM - 08:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-10">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reach Out to Us
              </h2>
              <p className="text-gray-600">
                Have questions about our products or interested in placing a
                bulk order? Fill out the form below, and we'll get back to you
                promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email in One Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-4 h-14"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-4 h-14"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-4 h-14"
                  placeholder="+1 (437) 907-1895"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-4 h-28"
                  placeholder="Please describe what you're looking for..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400 transition duration-150 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
