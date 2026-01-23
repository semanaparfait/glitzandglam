"use client"
import { Calendar, Package, Truck, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function ProductClient({ product, allProducts = [] }) {
    const [count, setCount] = useState(1);
    const images = useMemo(() => {
        if (Array.isArray(product?.productImageUrl) && product.productImageUrl.length > 0) {
            return product.productImageUrl.slice(0, 5);
        }
        return ["/products/p1.jfif"];
    }, [product]);
    const [activeIndex, setActiveIndex] = useState(0);

    // Get products from the same category
    const relatedProducts = useMemo(() => {
        return allProducts.filter(
            (p) => p.categoryId === product.categoryId && p.id !== product.id
        ).slice(0, 4);
    }, [product, allProducts]);

  return (
    <>
    <div className="grid md:grid-cols-2 justify-center gap-3 py-10 px-5  ">
                <div className="flex flex-col items-center justify-center rounded-xl">
                    <div className="w-full flex items-center justify-center">
                        <img
                            src={images[activeIndex]}
                            alt={product.productName}
                            className="w-[40%] h-auto object-contain rounded-2xl"
                        />
                    </div>
                    {images.length > 1 && (
                        <div className="flex gap-2 mt-4 flex-wrap justify-center">
                            {images.map((src, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`rounded-md p-0.5 border ${i === activeIndex ? "border-black" : "border-transparent"}`}
                                    aria-label={`View image ${i + 1}`}
                                >
                                    <img src={src} alt={`${product.productName} ${i + 1}`} className="h-16 w-16 object-cover rounded" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

        <div className="flex flex-col gap-2 items-start ">

            <h1 className="font-semibold text-2xl">{product.productName}</h1>
      <div>

            {product.productOldPrice && (
                <p className="font-medium text-gray-400 line-through">{product.productOldPrice.toLocaleString()} RWF</p>
            )}
            <p className="font-semibold text-2xl leading-tight">{product.productNewPrice.toLocaleString()} RWF</p>
      </div>
            <p className="max-w-md leading-relaxed ">{product.productDescription}</p>
        <div className="flex items-center border rounded-full px-3 py-1 w-34 justify-between" style={{ padding: "5px 10px" }}>
            <button  className="text-xl " onClick={() => setCount(prev => Math.max(1, prev - 1))}>-</button>
            <span>{count}</span>
            <button  className="text-xl" onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
      <button className="bg-black text-white font-medium py-1 px-2.5 rounded-2xl">Add To Cart</button>
        <div className="border rounded-2xl border-gray-300 p-6">
        <h1 className="font-semibold mb-2">Shipping</h1>

        <div className="grid grid-cols-2 gap-4">
            
            {/* 1. Package */}
            <div className="flex items-center gap-2">
            <Package />
            <div>
                <p className="text-sm text-gray-500">Package</p>
                <h1 className="font-semibold">Regular Package</h1>
            </div>
            </div>

            {/* 2. Delivery Time */}
            <div className="flex items-center gap-2">
            <Calendar />
            <div>
                <p className="text-sm text-gray-500">Delivery Time</p>
                <h1 className="font-semibold">40 Minutes</h1>
            </div>
            </div>

            {/* 3. Shipping Fee */}
            <div className="flex items-center gap-2">
            <Truck />
            <div>
                <p className="text-sm text-gray-500">Shipping Fee</p>
                <h1 className="font-semibold">Free Delivery</h1>
            </div>
            </div>

            {/* 4. Delivery Location */}
            <div className="flex items-center gap-2">
            <MapPin />
            <div>
                <p className="text-sm text-gray-500">Delivery Area</p>
                <h1 className="font-semibold">Within Kigali</h1>
            </div>
            </div>

        </div>
        </div>

        </div>
    </div>

    {/* Related Products Section */}
    {relatedProducts.length > 0 && (
        <div className="py-10 px-5">
            <h2 className="text-2xl font-semibold mb-6">More From This Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-300 flex flex-col">
                        
                        <Link href={`/shop/${relatedProduct.id}`} className="relative">
                            <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 aspect-square overflow-hidden">
                                
                                <img 
                                    src={relatedProduct.productImageUrl instanceof Array ? relatedProduct.productImageUrl[0] : relatedProduct.productImageUrl} 
                                    alt={relatedProduct.productName} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 flex flex-col gap-2">
                                    {relatedProduct.productOldPrice && (
                                        <span className="bg-red-500 hidden text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                                            SALE
                                        </span>
                                    )}
                                    {relatedProduct.productInStock <= 10 && relatedProduct.productInStock > 0 && (
                                        <span className="bg-[var(--hover-nav)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            {relatedProduct.productInStock} LEFT
                                        </span>
                                    )}
                                </div>
                                {relatedProduct.productOldPrice && (
                                    <div className="absolute top-3 right-3 bg-white rounded shadow-xl p-2">
                                        <div className="flex items-center justify-center w-12">
                                            <span className="text-xs font-bold text-red-600 leading-tight">
                                                {Math.round(((relatedProduct.productOldPrice - relatedProduct.productNewPrice) / relatedProduct.productOldPrice) * 100)}%
                                            </span>
                                            <span className="text-[8px] text-gray-600">OFF</span>
                                        </div>
                                    </div>
                                )}
                                {relatedProduct.productInStock <= 0 && (
                                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                                        <div className="bg-white text-gray-900 text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest shadow-2xl">
                                            Out of Stock
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </Link>

                        {/* Product Info */}
                        <div className="p-4 flex flex-col flex-grow">
                            <Link href={`/shop/${relatedProduct.id}`}>
                                <h3 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                                    {relatedProduct.productName}
                                </h3>
                            </Link>
                            
                            {/* Pricing */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    <span className="text-2xl font-bold text-gray-900">
                                        {relatedProduct.productNewPrice.toLocaleString()} 
                                    </span>
                                    <span className="text-sm text-gray-600">RWF</span>
                                </div>
                                {relatedProduct.productOldPrice && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm text-gray-400 line-through">
                                            {relatedProduct.productOldPrice.toLocaleString()} RWF
                                        </span>
                                        <span className="text-xs text-green-600 font-semibold">
                                            Save {(relatedProduct.productOldPrice - relatedProduct.productNewPrice).toLocaleString()} RWF
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-auto">
                                <button 
                                    disabled={relatedProduct.productInStock <= 0}
                                    className="flex-1 py-2.5 px-3 border-2 border-gray-900 text-gray-900 rounded-xl font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-900"
                                >
                                    Add to cart
                                </button>
                                <button 
                                    disabled={relatedProduct.productInStock <= 0}
                                    className="flex-1 py-2.5 px-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )}
    </>
  );
}