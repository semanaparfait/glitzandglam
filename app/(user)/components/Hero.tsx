"use client";

import { useEffect, useState } from "react";
import { products } from "./Products";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1; // how many products to show at a time
  const intervalTime = 2000; // 2 seconds
  const displayedProducts = products.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + visibleCount >= displayedProducts.length ? 0 : prevIndex + visibleCount
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden relative ">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {displayedProducts
        .map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 flex items-center justify-center w-full h-[80%] "
          >
            <div className="flex items-center justify-around w-full h-full">
            <img
            src={product.image}
            alt={product.name}
            className="object-cover rounded-md w-1/3"
            style={{ WebkitBoxReflect: "below 5px linear-gradient(transparent, rgba(0,0,0,0.3))" }}
            />

              <div className="flex flex-col items-center gap-2">

              <p className="text-[17px]">Every Piece Of JewelleyTells A Story</p>
              <h1
                className="mt-4 text-6xl font-bold "
                style={{ fontFamily: "var(--titles-font)" }}
              >
                {product.name}
              </h1>
              <button className="border-2 py-1 px-2.5">Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-3">
        {displayedProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
