import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer (){
    return(
        <section className="bg-white flex flex-col justify-center py-10 px-3">
            <div className="grid md:grid-cols-4 gap-5 items-center p-5">
                <div>
                    <img src="/logo.png" alt="logo on footer" width={90} className="pb-2"/>
                    <p className="text-gray-700">Inspired by African heritage, we craft timeless jewelry that celebrates beauty, culture, and elegance.</p>

                </div>
                <div>
                    <ul>
                    <li className="font-bold pb-2 text-amber-950">SHOP</li>
                        <li className="text-gray-700">Rings</li>
                        <li className="text-gray-700">Bracelets</li>
                        <li className="text-gray-700">Earrings</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li className="font-bold pb-2 text-amber-950">CUSTOMER SERVICE</li>
                        <Link href='/contactus' className="text-gray-700 hover:text-[#C5A367]">Contact Us</Link>
                        <li className="text-gray-700">FAQ</li>
                        <Link href='/shippingGuide' className="text-gray-700 hover:text-[#C5A367]">Shipping Guide</Link>
                        <li className="text-gray-700">Sizmate</li>
                    </ul>
                </div>
                <div>
                        <form action="">
                        <h1 className="font-bold pb-2 text-amber-950">NEWSLETTER</h1>
                            <input type="email" placeholder="Enter Your Email" className="border border-gray-300 rounded-l-md py-1.5 px-1.5 focus:ring-[#C5A367] focus:border-[#C5A367]" />
                            <button className="bg-[#C5A367] text-white py-1.5 px-2 rounded-r-md hover:bg-[#b08f5a] transition">Subscribe</button>
                        </form>
                        <p className="text-gray-600 mt-2">Privacy policy</p>
                        <p className="text-gray-600">Terms of Services</p>
                </div>
            </div>
            
            <footer className=" px-7">
            <div className="mx-auto w-[95%] border-t border-gray-200 mb-2"></div>

            <div className="flex items-center justify-between flex-wrap">
                <span className="text-gray-600">© {new Date().getFullYear()} Glitz & Glam. All rights reserved.</span>

                <div className="flex gap-2.5">
                <img src="/payments/mtn.svg" width={40} alt="MTN" />
                <img src="/payments/Airtel.png" width={40} alt="Airtel" />
                <img src="/payments/MasterCard.png" width={40} alt="MasterCard" />
                <img src="/payments/PayPal.png" width={80} alt="PayPal" />
                <img src="/payments/Visa.svg" width={40} alt="Visa" />
                </div>

                <div className="flex gap-2">
                <a href="#" className="text-gray-700 hover:text-[#C5A367]"><Instagram /></a>
                <a href="#" className="text-gray-700 hover:text-[#C5A367]"><Facebook /></a>
                <a href="#" className="text-gray-700 hover:text-[#C5A367]"><PiTiktokLogo size={25} /></a>
                </div>
            </div>
            </footer>

        </section>
    )
}