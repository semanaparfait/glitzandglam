
export default function Shoping(){
    return(
        <div className="">
            <div className="text-center py-10">
            <h2 className="text-xl font-bold  uppercase mb-2">
                Trending Products
            </h2>
            <p className="text-gray-500 text-sm italic mb-6">
                One Girl's Journey To Making Her Fashion Dreams Come True In Elements Jewellers
            </p>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-8 text-xs font-bold tracking-widest border-b border-gray-100 pb-4 max-w-xs mx-auto">
                <button className="text-black border-b-2 border-black pb-4 -mb-4">FEATURED</button>
                <button className="text-gray-400 hover:text-black transition-colors">BEST SELLERS</button>
                <button className="text-gray-400 hover:text-black transition-colors">NEW ARRIVALS</button>
            </div>
            </div>
        </div>
    )
}