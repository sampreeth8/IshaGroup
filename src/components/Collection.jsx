import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Package, Mail, Clock } from 'lucide-react';
import sal1 from "../images/sal1.png";
import leh1 from "../images/leh3.png";
import kur3 from "../images/kur3.png";
import bol2 from "../images/bol2.png";
import sar1 from "../images/sar1.png";
import hm2 from "../images/home2.jpg";
import hm3 from "../images/home3.png";
import banner from "../images/ban3.jpg";

function App() {
  const products = [
    {
      name: 'Salwar Kameez',
      description: 'Elegant and comfortable traditional suits',
      image: sal1
    },
    {
      name: 'Lehengas',
      description: 'Exquisite bridal and party wear',
      image: leh1
    },
    {
      name: 'Blouses',
      description: 'Stylish and customizable to complement sarees',
      image: bol2
    },
    {
      name: 'Sarees',
      description: 'A wide variety of fabrics and designs for every occasion',
      image: sar1
    },
    {
      name: 'Kurtha',
      description: 'A versatile and stylish traditional tunic, perfect for casual and festive wear',
      image: kur3
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative h-[70vh] flex items-center">
        {/* Darker Background Overlay for Maximum Readability */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-80"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Content Positioned to Center-Left */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start w-full">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
              <span className="block text-white-400">The Isha Group MFG</span>  
            </h1>
            <h2 className="text-2xl sm:text-3xl text-purple-400 font-semibold mt-2">
              Crafting Elegance in Every Stitch
            </h2>
            <p className="mt-6 text-lg text-gray-200 leading-relaxed drop-shadow-lg">
              A prominent Indian clothing manufacturer based in Toronto, specializing in the production 
              of traditional Indian attire. We take pride in crafting high-quality garments that blend 
              timeless elegance with contemporary designs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Our Product Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {products.map((product, index) => (
                <Link 
                  to={product.name === 'Salwar Kameez' ? '/salwar' : product.name === 'Kurtha' ? '/kurthas' : product.name === 'Lehengas' ? '/Lehangas' : product.name === 'Blouses' ? '/Blouses' : product.name === 'Sarees' ? '/Sarees' :'#'} 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-purple-900 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-700">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

{/* Contact Us Section - Moved Here */}
<div className="relative my-16 overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#6366f1,transparent)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#a855f7,transparent)]"></div>
  </div>
  <div className="relative px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
    <div className="text-center md:text-left mb-8 md:mb-0 md:mr-8">
      <h3 className="text-3xl font-bold text-white mb-4">
        Interested in Bulk Orders?
      </h3>
      <p className="text-lg text-purple-100 max-w-2xl">
        Whether you're a retailer, wholesaler, or planning a large event, we offer competitive 
        pricing and customization options for bulk orders. Let's discuss how we can meet your needs.
      </p>
    </div>
    <div className="flex-shrink-0">
      <Link 
        to="/contact-us"
        className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-purple-50"
      >
        Contact Us Now
      </Link>
    </div>
  </div>
</div>



          {/* Our Expertise Section - Text Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Expertise</h3>
              <p className="text-gray-700">
                At The Isha Group MFG, we combine traditional craftsmanship with modern manufacturing 
                techniques to create garments that cater to the diverse needs of our clientele. Our 
                team of skilled artisans and designers work meticulously to ensure each piece reflects 
                the rich heritage of Indian fashion while incorporating contemporary trends.
              </p>
              <p className="text-gray-700 mt-4">
                With decades of experience in the industry, we have perfected the art of creating 
                garments that not only look beautiful but also provide comfort and durability. Our 
                expertise extends to a wide range of traditional Indian wear, from everyday essentials 
                to elaborate ceremonial attire.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={hm2}
                alt="Artisan working"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Quality and Customer Satisfaction Section - Image Left, Text Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2">
              <img 
                src={hm3}
                alt="Quality control"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Quality and Customer Satisfaction</h3>
              <p className="text-gray-700">
                We are committed to delivering premium quality products that meet the highest standards 
                of craftsmanship. Our attention to detail and use of fine fabrics have earned us a 
                reputation for excellence in the Indian clothing industry.
              </p>
              <p className="text-gray-700 mt-4">
                Every garment undergoes rigorous quality checks at various stages of production to 
                ensure perfection. We believe in building long-lasting relationships with our customers 
                through exceptional service and consistent quality.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Location</h3>
            <p className="text-gray-700">
              Situated in the heart of Toronto, The Isha Group MFG is perfectly positioned to serve 
              the vibrant South Asian community in Canada and beyond. Our location allows us to stay 
              connected with the latest fashion trends while maintaining our cultural roots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;