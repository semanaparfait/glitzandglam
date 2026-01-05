import Link from "next/link";
import { categories } from "./CategoriesData";

export default function Categories() {
  return (
    <section className="w-full px-6 py-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.slice(0,3)
        .map((cat, index) => {
          // Identify position: 0, 1, or 2
          const position = index % 3;

          return (
            <div
              key={cat.id}
              className={`flex items-center h-[15rem] rounded-lg overflow-hidden transition-all
                ${position === 1 ? "bg-gray-100 flex-col justify-center" : "bg-[#fdf0f0]"} 
                ${position === 2 ? "flex-row-reverse" : "flex-row"}`}
            >
              {/* Image Section */}
              <div className={`${position === 1 ? "h-1/2 w-full" : "w-1/2 h-full"}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content Section */}
              <div className={`flex flex-col gap-2 items-center justify-center text-center px-4 
                ${position === 1 ? "w-full h-1/2" : "w-1/2 h-full"}`}>
                
                <p className="text-[12px] text-gray-500 uppercase tracking-widest">
                  {cat.title || "Select from the best"}
                </p>

                <h1
                  className="font-semibold text-2xl text-gray-800"
                  style={{ fontFamily: "var(--titles-font)" }}
                >
                  {cat.name}
                </h1>
                <Link href='/shop' className="border border-black text-xs uppercase font-bold mt-2 hover:text-gray-600 py-1.5 px-2">
                shop now
                </Link>
                <button className="border border-black text-xs uppercase font-bold mt-2 hover:text-gray-600 py-1.5 px-2 hidden">
                  Shop Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}