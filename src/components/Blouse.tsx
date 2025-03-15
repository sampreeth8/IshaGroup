import React from "react";
import { Link } from "react-router-dom";
import sal1 from "../images/blo1.png";
import sal2 from "../images/bol2.png";
import sal3 from "../images/bol3.png";
import sal4 from "../images/bol4.webp";

function Blouse() {
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
              <span className="block">BLOUSES</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Stylish & Customizable Blouses to Enhance Every Saree Look. A
              perfectly tailored blouse transforms the saree experience, adding
              a touch of individuality and elegance. Our blouses combine classic
              charm with modern fashion, making them a must-have for every
              wardrobe.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Blouse Collection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Our BLOUSE Collection
            </h2>
            <p className="text-gray-700 mb-4">
              Explore our exquisite range of blouses designed for every
              occasion:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Traditional Blouses</strong>: Timeless designs with rich
                embroidery and classic cuts.
              </li>
              <li className="mb-2">
                <strong>Contemporary Blouses</strong>: Featuring trendy cuts
                like off-shoulder, backless, and halter neck.
              </li>
              <li className="mb-2">
                <strong>Bridal Blouses</strong>: Ornate and embellished blouses,
                perfect for wedding sarees.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal1}
              alt="Blouse Collection"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Design & Features - Image Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={sal2}
              alt="Design & Features"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Design & Features
            </h2>
            <p className="text-gray-700 mb-4">
              Our blouses are crafted with precision, combining intricate
              handwork with premium fabrics.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Intricate Handwork</strong> – Zari, beadwork, mirror
                embroidery, and digital prints.
              </li>
              <li className="mb-2">
                <strong>Variety of Necklines & Sleeves</strong> – High neck,
                sweetheart, boat neck, cap sleeves, full sleeves, etc.
              </li>

              <li className="mb-2">
                Fabric Variety:
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Silk & Brocade</strong> – Rich textures for bridal
                    and festive wear.
                  </li>
                  <li>
                    <strong>Cotton & Linen</strong> – Breathable options for
                    everyday and formal looks.
                  </li>
                  <li>
                    <strong>Velvet & Net</strong> – Luxurious materials for
                    evening wear.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Customization & Fitting - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Latest Trends in Blouse Designs
            </h2>
            <p className="text-gray-700 mb-4">
              Our blouses are designed to perfectly complement your saree with
              customized options.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Sheer Back Blouses</strong> – Delicate sheer backs with
                tonal embroidery for an elegant look.
              </li>
              <li className="mb-2">
                <strong>Pearl-Encrusted Blouses</strong> – Sophisticated designs
                with pearl embellishments, perfect for special occasions.
              </li>
              <li className="mb-2">
                <strong>Off-Shoulder & Ruffled Sleeves</strong> – Contemporary
                cuts adding a modern twist to traditional blouses.
              </li>
              <li className="mb-2">
                <strong>Boho-Inspired Blouses</strong> – Lightweight, textured
                fabrics with a relaxed and artistic aesthetic.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal3}
              alt="Customization & Fitting"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Customization & Perfect Fit - Image Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={sal4}
              alt="Customization & Perfect Fit"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Customization & Perfect Fit
            </h2>
            <p className="text-gray-700 mb-4">
              Experience the luxury of a blouse tailored just for you, combining
              craftsmanship with individuality:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Personalized Designs</strong> – Select from a variety of
                fabrics, embroidery styles, and necklines to complement your
                saree.
              </li>
              <li className="mb-2">
                <strong>Made-to-Measure</strong> – Each blouse is expertly
                crafted to ensure a flawless fit, enhancing comfort and
                elegance.
              </li>
              <li className="mb-2">
                <strong>Bespoke Styling</strong> – Customize sleeve lengths,
                back designs, and embellishments to match your personal style.
              </li>
            </ul>
          </div>
        </div>

        {/* Global Appeal Section */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Saree-Blouse Matching Guide
          </h2>
          <p className="text-gray-700">
            🛍️ <strong>Fabric Matching Tips</strong>: Find the best blouse
            fabric for your saree.
          </p>
          <p className="text-gray-700">
            🎨 <strong>Color Combinations Guide</strong>: Get expert color
            recommendations based on saree color and embroidery.
          </p>
          <p className="text-gray-700">
            👗 <strong>Trending Styles Report</strong>: Stay updated on the
            latest blouse trends for festive and bridal wear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blouse;
