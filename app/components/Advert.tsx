import Link from "next/link";

export default function Advert(){
    return(
        <div className="mt-7 flex items-center justify-center bg-[#f7eff0] gap-7">
            <div>

            <img src="/sample1.png" alt="" width={200}/>
            </div>
            <div className="flex flex-col items-start gap-1.5">
                <h1 className="font-bold text-[#fddde1]">STAND OUT IN STYLE</h1>
                <p className="text-4xl">Silver And Diamonds Earings</p>
                <Link href='/shop' className="border py-1.5 px-2">
                See More
                </Link>
                {/* <button className="border py-1.5 px-2">See More</button> */}
            </div>
        </div>
    )
}