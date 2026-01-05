import Link from "next/link"
import { products } from "./Products"

export default function Shoping(){
    return(
        <div className="flex flex-col items-center">
            <div className="text-center py-10">
            <h2 className="text-xl font-bold  uppercase mb-2">
                Trending Products
            </h2>
            <p className="text-gray-500 text-sm italic mb-6">
                One Girl's Journey To Making Her Fashion Dreams Come True In Elements Jewellers
            </p>

            <div className="flex justify-center gap-8 text-xs font-bold tracking-widest border-b border-gray-100 pb-4 max-w-xs mx-auto">
                <button className="text-black border-b-2 border-black pb-4 -mb-4">FEATURED</button>
                <button className="text-gray-400 hover:text-black transition-colors">BEST SELLERS</button>
                <button className="text-gray-400 hover:text-black transition-colors">NEW ARRIVALS</button>
            </div>
            </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
    {products.slice(0, 6).map((product) => (
        <Link href='/shop'>
        <div key={product.id} className="group flex flex-col items-center relative">
        
        {/* Container for Image and Badges */}
        <div className="relative bg-[#f7eff0] w-[17rem] h-[22rem]  flex items-center justify-center overflow-hidden ">
            
            {/* Sale Badge (Top Left) */}
            {product.onSale && (
            <span className="absolute top-2 left-2 bg-white text-[10px] px-2 py-0.5 shadow-sm uppercase text-gray-400">
                sale
            </span>
            )}

            <img 
            src={product.image} 
            alt={product.name} 
            className=" object-contain group-hover:scale-110 transition-transform duration-500"
            />

            {/* Out of Stock Overlay */}
            {product.outOfStock && (
            <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                <div className="bg-[#f8d7da] text-[#721c24] text-[10px] font-bold px-4 py-2 uppercase tracking-widest shadow-sm">
                Out of Stock
                </div>
            </div>
            )}
        </div>

        {/* Product Details */}
        <div className="text-center flex flex-col gap-1">
            <h3 className="text-gray-500 text-[13px] font-medium leading-tight  overflow-hidden">
            {product.name}
            </h3>
            
            <div className="flex items-center justify-center gap-2">
            {/* Old Price (Strikethrough) */}
            {product.oldPrice && (
                <span className="text-gray-400 text-xs line-through">
                {product.oldPrice} RWF
                </span>
            )}
            {/* Current Price */}
            <span className="text-gray-800 text-[14px] font-semibold">
                {product.price} RWF
            </span>
            </div>
        </div>
        </div>
        </Link>
    ))}
    </div>
    <div className="mt-5">
        <Link href='/shop' className="border-2 py-1.5 p-2 ">
        SHOP MORE
        </Link>

    {/* <button >SHOP MORE</button> */}
    </div>
        </div>
    )
}