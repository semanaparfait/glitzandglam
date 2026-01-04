"use client"
import { products } from "./Products";
import { useState, useEffect } from "react";

export default function Hero2() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play logic: Changes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === products.slice(0, 3).length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3000ms = 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section className="min-h-screen bg-white md:px-10 px-5 md:py-20 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="col-span-12 md:col-span-5 space-y-6 animate-fadeIn">
          <h1 className="md:text-6xl text-4xl font-serif text-gray-900 leading-tight">
            Your Elegant <br /> 
            <span className="italic text-[#C5A367]">{activeProduct.name}</span>
          </h1>
          <p className="text-gray-500 max-w-md leading-relaxed ">
            Get the best designed jewelry from the certificated the best craftsmen from around the world.
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-[#C5A367] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#b08f5a] transition shadow-lg">
              Explore More
            </button>

          </div>
          
          <div className="pt-10 flex items-start gap-3 opacity-80 hidden">
            <div className="p-2 border border-gray-200 rounded">⭐</div>
            <div>
              <h4 className="font-bold text-sm uppercase">Gold certificates</h4>
              <p className="text-xs text-gray-400">All jewellery are certified for represent ownership of gold</p>
            </div>
          </div>
        </div>

        {/* Center Column: Main Product Image */}
        <div className="col-span-12 md:col-span-5 flex justify-center relative ">
          {/* Added a key to the image to trigger a re-animation when the product changes */}
          <img 
            key={activeProduct.id}
            src={activeProduct.image} 
            alt={activeProduct.name} 
            style={{ WebkitBoxReflect: "below 2px linear-gradient(transparent, rgba(0,0,0,0.3))" }}
            className="w-full md:max-w-[450px] max-w-[250px] object-contain drop-shadow-2xl animate-slideUp"
          />
        </div>

        {/* Right Column: Sidebar Navigation */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col items-center gap-6 ">
          {/* <button className="text-gray-300 hover:text-gray-600 transition">↑</button> */}
          
          {products.slice(0, 3).map((product, index) => (
            <button 
              key={product.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-xl border transition-all duration-500 flex flex-col items-center w-24 ${
                activeIndex === index 
                ? 'border-[#C5A367] bg-white shadow-xl scale-110' 
                : 'border-gray-100 bg-gray-50 opacity-50 hover:opacity-100'
              }`}
            >
              <img src={product.image} alt={product.name} className="w-12 h-12 object-contain" />
              {/* <p className="text-[10px] uppercase mt-2 font-bold text-gray-600">{product.category || 'Jewelry'}</p> */}
            </button>
          ))}

          {/* <button className="text-gray-300 hover:text-gray-600 transition">↓</button> */}
        </div>

      </div>
    </section>
  );
}