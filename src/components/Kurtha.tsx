import React from "react";
import { Link } from "react-router-dom";
import kur1 from "../images/kur1.png";
import kur2 from "../images/kur2.png";
import kur3 from "../images/kur3.png";

function Kurtha() {
  return (
    <div className="bg-white">
      {/* Navigation */}
      <div className="bg-purple-900 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-white hover:text-purple-200 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Banner Section */}
      <div className="relative bg-purple-900">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583391733956-6c78dd99de11?auto=format&fit=crop&w=1920&q=80")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.2",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">MEN KURTHA</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              The Isha Group MFG offers a diverse collection of men's kurtas
              that blend traditional Indian aesthetics with contemporary design
              elements. Their kurta offerings cater to various styles and
              preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Design and Features - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Design and Features
            </h2>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Fabric Variety:</strong> Kurtas are crafted from
                high-quality materials including cotton, linen, and chanderi
                silk.
              </li>
              <li className="mb-2">
                <strong>Styles:</strong> The collection includes both long and
                short kurtas, catering to different occasions and preferences.
              </li>
              <li className="mb-2">
                <strong>Embellishments:</strong> Some kurtas feature intricate
                embroidery, including handwork and digital prints.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={kur1}
              alt="Kurta Designs"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Notable Offerings - Image Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={kur2}
              alt="Notable Kurta Offerings"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Notable Offerings
            </h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Handblock Printed Kurtas:</strong> The Bagru Handblock
                Printed Men's Kurta comes in different prints, showcasing
                traditional Indian craftsmanship.
              </li>
              <li className="mb-2">
                <strong>Crinkled Cotton Kurtas:</strong> Available in various
                colors like deep blue, ecru, navy blue, and sky, these kurtas
                offer a relaxed, textured look.
              </li>
              <li className="mb-2">
                <strong>Dobby Weave Kurtas:</strong> Full sleeve cotton dobby
                long kurtas are available in multiple colors, including black,
                blue, grey, and mustard.
              </li>
            </ul>
          </div>
        </div>

        {/* Sustainability and Craftsmanship - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Sustainability and Craftsmanship
            </h2>
            <p className="text-gray-700 mb-4">
              Some kurtas in the collection are made from{" "}
              <strong>100% organic cotton</strong>, appealing to environmentally
              conscious consumers. The brand incorporates traditional techniques
              like <strong>handblock printing</strong> and
              <strong> embroidery</strong>, supporting local artisans and
              preserving cultural heritage.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={kur3}
              alt="Sustainable Craftsmanship"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="bg-white-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Pricing and Availability
          </h2>
          <p className="text-gray-700">
            Prices for men's kurtas from the Isha Group MFG range from
            approximately <strong>CAD 120.00 to CAD 280.00</strong>, making them
            accessible to a wide range of customers. The kurtas are available
            through various channels, including the{" "}
            <strong>Isha Shop web store</strong> and other fashion retailers.
          </p>
        </div>

        {/* Global Appeal Section */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Our Commitment
          </h2>
          <p className="text-gray-700">
            The <strong>Isha Group MFG's men's kurta collection</strong>{" "}
            combines traditional Indian craftsmanship with modern design
            sensibilities, offering a range of options for different tastes and
            occasions. We are dedicated to providing{" "}
            <strong>
              high-quality, sustainable, and culturally rich garments
            </strong>{" "}
            that meet the diverse needs of our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kurtha;
