import { List } from "lucide-react"
import { Product, products } from "../components/Products"
import Link from "next/link";
export default function Shop(){
   
    return(
        <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-64  rounded-lg md:overflow-hidden ">
        {/* Background Image */}
        <img
            src="/shop/shop.jfif"
            alt="Shop"
            className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <p className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 text-white text-9xl md:text-[250px]  font-bold drop-shadow-lg">
            Shop
        </p>

        {/* Optional: Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/25"></div> */}
                <div className="bg-white flex flex-wrap items-center justify-between md:w-[80%] w-[90%] py-3 px-5 rounded-t-2xl absolute md:bottom-[-10] top-50 z-50 left-1/2 transform -translate-x-1/2 ">
                    <h1 className="text-2xl font-semibold leading-relaxed">Get All You Need</h1>
                    <div>
                        <form action="">
                        <input type="search" placeholder="Search for any stuff..." className="border py-1.5 px-5 rounded-2xl" />
                        <button className=" hidden">Search</button>

                        </form>
                    </div>

                </div>
        </div>

            {/* -----------shoping------------items */}
            <div className="flex gap-5 w-full px-2">

                <div className=" px-5 md:mt-0 mt-10">
                    <List/>

                </div>
            <div className="grid grid-cols-1 md:grid-cols-3  justify-around  mt-7  w-full">
            {products.map((product) => (
                <div key={product.id} className="group flex flex-col items-center relative">
                
                {/* Container for Image and Badges */}
                <Link href={`/shop/${product.id}`}>

                <div className="relative bg-[#f7eff0] md:w-[17rem] md:h-[22rem] rounded-2xl  flex items-center justify-center overflow-hidden mt-2.5">
                    
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
                </Link>


                <div className=" flex flex-col items-start gap-1">
                    <h3 className=" text-[20px] font-semibold leading-tight  overflow-hidden">
                    {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2">
                    {product.oldPrice && (
                        <span className="text-gray-400 text-xs line-through">
                        {product.oldPrice.toLocaleString()} RWF
                        </span>
                    )}
                    <span className="text-gray-800 text-[14px] font-semibold">
                        {product.price.toLocaleString()} RWF
                    </span>
                    </div>
                    <div className="flex gap-2">
                        <button className="border py-1.5 px-2 rounded-2xl font-semibold">Add to cart</button>
                        <button className="border py-1.5 px-2 bg-black rounded-2xl text-white font-semibold">Buy Now</button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}