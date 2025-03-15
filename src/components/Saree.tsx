import React from "react";
import { Link } from "react-router-dom";
import sal1 from "../images/sar1.png";
import sal2 from "../images/sar2.png";
import sal3 from "../images/sar3.png";
import sal4 from "../images/sar4.png";

function Sarees() {
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
              <span className="block">SAREES</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Our sarees are a perfect blend of tradition and contemporary
              elegance, ideal for festivals, weddings, office wear, and casual
              outings
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Lehenga Collection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Our Saree Collection
            </h2>
            <p className="text-gray-700 mb-4">
              Discover our exquisite range of sarees, crafted for elegance and
              comfort:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Traditional Sarees:</strong> Banarasi, Kanjivaram,
                Tussar, and Raw Silk for luxurious drapes.
              </li>
              <li className="mb-2">
                <strong>Designer Sarees:</strong> Modern cuts, abstract prints,
                and embroidered detailing.
              </li>
              <li className="mb-2">
                <strong>Handloom Sarees:</strong> Lightweight, fluid, and easy
                to carry.
              </li>
              <li className="mb-2">
                <strong>Lightweight Sarees:</strong> Easy-to-carry chiffon,
                georgette, and organza styles.
              </li>
              <li className="mb-2">
                <strong>Festive Sarees:</strong> Zari, sequins, and digital
                prints for special occasions.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal1}
              alt="Saree Collection"
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
              Our sarees showcase expert craftsmanship, blending heritage
              artistry with modern aesthetics.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Hand Embroidery & Zari Work:</strong> Featuring royal
                designs with fine detailing.
              </li>
              <li className="mb-2">
                <strong>Digital Prints & Contemporary Motifs:</strong> Modern,
                artistic designs for casual elegance.
              </li>
              <li className="mb-2">
                <strong>Intricate Borders & Pallu Designs:</strong> Unique
                finishing touches for a luxurious appeal.
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
              Our sarees are crafted from premium-quality fabrics, offering a
              perfect blend of elegance, comfort, and durability.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Silk & Brocade:</strong> Luxurious textures ideal for
                weddings and grand events.
              </li>
              <li className="mb-2">
                <strong>Cotton & Linen:</strong> Breathable fabrics for everyday
                elegance.
              </li>
              <li className="mb-2">
                <strong>Organza & Net:</strong> Sheer, lightweight, and stylish
                drapes.
              </li>
              <li className="mb-2">
                <strong>Georgette & Chiffon:</strong> Fluid, graceful fabrics
                for effortless movement.
              </li>
              <li className="mb-2">
                <strong>Velvet & Crepe:</strong> Deep hues and rich textures for
                bold styling.
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
              Customization & Personalization
            </h2>
            <p className="text-gray-700 mb-4">
              Available in <strong>customized designs</strong>, tailored
              fittings, and fabric choices.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Custom Borders & Embellishments:</strong> Hand
                embroidery, lace, and stonework.
              </li>
              <li className="mb-2">
                <strong>Pre-Stitched Sarees:</strong> Ready-to-wear styles for
                convenience.
              </li>
              <li className="mb-2">
                <strong>Bespoke Colors & Fabrics:</strong> Tailor-made designs
                to match your vision.
              </li>
              <li className="mb-2">
                <strong>Matching Blouses:</strong> Handcrafted and embroidered
                to complement your saree.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Every saree is a statement of grace, culture, and individuality.
            </p>
          </div>
        </div>

        {/* Global Appeal Section */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Bridal Styling & Consultation
          </h2>
          <p className="text-gray-700">
            🎭 <strong>Draping Styles:</strong> Classic, modern, and fusion
            drapes.
          </p>
          <p className="text-gray-700">
            🌎 <strong>Cultural Significance</strong> Discover how sarees are
            worn across different regions in India, each style carrying a unique
            heritage.
          </p>
          <p className="text-gray-700">
            💡 <strong>Accessorizing Your Saree:</strong> Get recommendations on
            matching jewelry and footwear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sarees;
