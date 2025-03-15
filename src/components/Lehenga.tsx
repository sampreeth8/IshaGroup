import React from "react";
import { Link } from "react-router-dom";
import sal1 from "../images/leh1.png";
import sal2 from "../images/leh2.png";
import sal3 from "../images/leh3.png";
import sal4 from "../images/leh4.png";

function Lehanga() {
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
              <span className="block">LEHANGAS</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Lehengas by The Isha Group MFG are crafted to celebrate grandeur
              and tradition, making them ideal for weddings, festive occasions,
              and special celebrations. Each lehenga is a work of art,
              reflecting timeless craftsmanship and modern design elements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Lehenga Collection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Our LEHENGA Collection
            </h2>
            <p className="text-gray-700 mb-4">
              Explore our exquisite range of lehengas designed for every
              occasion:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Bridal Lehengas:</strong> Luxurious, heavily embroidered
                designs for wedding ceremonies.
              </li>
              <li className="mb-2">
                <strong>Party Wear Lehengas:</strong> Elegant and lightweight,
                featuring stylish embellishments.
              </li>
              <li className="mb-2">
                <strong>Contemporary Lehengas:</strong> Fusion-inspired cuts,
                pastel hues, and modern silhouettes.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal1}
              alt="Lehenga Collection"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Craftsmanship and Quality - Image Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={sal2}
              alt="Craftsmanship"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Design & Craftsmanship
            </h2>
            <p className="text-gray-700 mb-4">
              Our lehengas are designed with precision, combining traditional
              techniques with contemporary styles.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Lehenga (Skirt):</strong> Flowing, flared, and
                intricately embroidered.
              </li>
              <li className="mb-2">
                <strong>Choli (Blouse):</strong> A structured, fitted top with
                stylish detailing.
              </li>
              <li className="mb-2">
                <strong>Dupatta:</strong> A beautifully adorned scarf to
                complete the look.
              </li>
              <li className="mb-2">
                <strong>Intricate Embroidery:</strong> Zardozi, mirror work,
                sequins, and hand-beaded detailing.
              </li>
            </ul>
          </div>
        </div>

        {/* Fabric Selection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Fabric & Comfort
            </h2>
            <p className="text-gray-700 mb-4">
              Our lehengas are crafted from high-quality materials, ensuring
              luxury, comfort, and durability.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Silk:</strong> Rich, royal textures.
              </li>
              <li className="mb-2">
                <strong>Velvet:</strong> Deep, regal shades.
              </li>
              <li className="mb-2">
                <strong>Georgette & Organza:</strong> Lightweight, flowy
                silhouettes.
              </li>
              <li className="mb-2">
                <strong>Net & Chiffon:</strong> Delicate, dreamy fabrics for a
                modern touch.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal3}
              alt="Fabric Selection"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Customization Options - Image Left, Text Right */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src={sal4}
              alt="Customization Options"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Customization & Sizing
            </h2>
            <p className="text-gray-700 mb-4">
              Available in <strong>customized designs</strong>, tailored
              fittings, and fabric choices.
            </p>
            <p className="text-gray-700 mb-4">
              🔹 Sizes from <strong>XS to XL</strong>, with made-to-order
              options.
            </p>
          </div>
        </div>

        {/* Global Appeal Section */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Bridal Styling & Consultation
          </h2>
          <p className="text-gray-700">
            👰 <strong>Personalized Bridal Styling Sessions:</strong> Book an
            appointment with our experts.
          </p>
          <p className="text-gray-700">
            🎨 <strong>Mix & Match Options:</strong> Customize your
            lehenga-blouse combination.
          </p>
          <p className="text-gray-700">
            💍 <strong>Bridal Accessories Pairing:</strong> Get recommendations
            on matching jewelry and footwear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lehanga;
