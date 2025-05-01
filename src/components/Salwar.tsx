import React from "react";
import { Link } from "react-router-dom";
import sal1 from "../images/salnew1.jpg";
import sal2 from "../images/salnew2.jpg";
import sal3 from "../images/salnew3.jpg";
import sal4 from "../images/sal4.webp";

function Salwar() {
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
              <span className="block">SALWAR</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              At The Isha Group MFG, we take pride in our exquisite collection
              of Salwar Kameez, a timeless symbol of cultural elegance that we
              expertly craft for our discerning clientele.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Salwar Kameez Collection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Our Salwar Kameez Collection
            </h2>
            <p className="text-gray-700 mb-4">
              Our Salwar Kameez ensemble consists of three main components:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li className="mb-2">
                <strong>Kameez:</strong> A long, elegantly designed tunic or top
              </li>
              <li className="mb-2">
                <strong>Salwar:</strong> Comfortable, loose-fitting trousers
              </li>
              <li className="mb-2">
                <strong>Dupatta:</strong> A beautifully complementing scarf or
                shawl
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={sal1}
              alt="Salwar Kameez Collection"
              className="rounded-lg shadow-lg w-full h-[450px] object-cover"
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
              Craftsmanship and Quality
            </h2>
            <p className="text-gray-700 mb-4">
              The Isha Group MFG combines traditional artistry with modern
              manufacturing techniques to create Salwar Kameez that exemplify
              the rich heritage of South Asian fashion. Our skilled artisans pay
              meticulous attention to detail, ensuring each piece reflects both
              cultural authenticity and contemporary style.
            </p>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Versatile Styles
            </h3>
            <p className="text-gray-700 mb-4">
              We offer a diverse range of Salwar Kameez styles to cater to
              various preferences:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Anarkali Style:</strong> Featuring a long, flowing
                kameez
              </li>
              <li className="mb-2">
                <strong>Patiala Style:</strong> Known for its loose, pleated
                salwars
              </li>
              <li className="mb-2">
                <strong>Churidar Style:</strong> With tightly fitted salwars
              </li>
              <li className="mb-2">
                <strong>Palazzo Style:</strong> Incorporating wide-legged pants
              </li>
            </ul>
          </div>
        </div>

        {/* Fabric Selection - Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Fabric Selection
            </h2>
            <p className="text-gray-700 mb-4">
              Our Salwar Kameez are crafted using premium fabrics, with a focus
              on comfort and elegance. We often use{" "}
              <strong>high-quality cotton lawn</strong>, known for its silky
              texture and high thread count, providing excellent breathability
              and moisture-wicking properties.
            </p>
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
              Customization Options
            </h2>
            <p className="text-gray-700 mb-4">
              The Isha Group MFG offers <strong>customization services</strong>{" "}
              to ensure a perfect fit for every customer. We provide a range of
              sizes from <strong>XS to XL</strong> and can accommodate special requests for
              fabric types and designs.
            </p>
          </div>
        </div>

        {/* Global Appeal Section */}
        <div className="bg-purple-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Global Appeal
          </h2>
          <p className="text-gray-700 mb-4">
            While deeply rooted in South Asian tradition, our Salwar Kameez
            designs have gained <strong>international recognition</strong>. We
            pride ourselves on creating garments that bridge cultural
            boundaries, making them suitable for various occasions and settings
            worldwide.
          </p>
          <p className="text-gray-700">
            At The Isha Group MFG, we are committed to preserving the{" "}
            <strong>cultural significance</strong> of the Salwar Kameez while
            innovating to meet modern fashion demands. Our creations are more
            than just garments; they are a testament to the{" "}
            <strong>rich cultural heritage</strong> we represent and the <strong>quality craftsmanship</strong> we deliver.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Salwar;
