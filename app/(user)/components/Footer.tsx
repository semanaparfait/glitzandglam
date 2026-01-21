import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer (){
        return(
                <section className="bg-neutral-50 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <div className="grid md:grid-cols-4 gap-8 md:gap-10 items-start">
                            <div>
                                <img src="/logo.png" alt="Glitz & Glam logo" width={100} className="mb-3"/>
                                <p className="text-gray-700 leading-relaxed">
                                    Inspired by African heritage, we craft timeless jewelry that celebrates beauty, culture, and elegance.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold tracking-wider text-amber-950 mb-3">SHOP</h3>
                                <ul className="space-y-2 text-sm">
                                    <li className="text-gray-700 hover:text-[#C5A367] transition-colors">Rings</li>
                                    <li className="text-gray-700 hover:text-[#C5A367] transition-colors">Bracelets</li>
                                    <li className="text-gray-700 hover:text-[#C5A367] transition-colors">Earrings</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold tracking-wider text-amber-950 mb-3">CUSTOMER SERVICE</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <Link href="/contactus" className="text-gray-700 hover:text-[#C5A367] transition-colors">Contact Us</Link>
                                    </li>
                                    <li className="text-gray-700">FAQ</li>
                                    <li>
                                        <Link href="/shippingGuide" className="text-gray-700 hover:text-[#C5A367] transition-colors">Shipping Guide</Link>
                                    </li>
                                    <li className="text-gray-700">Sizmate</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold tracking-wider text-amber-950 mb-3">NEWSLETTER</h3>
                                <form action="#" className="sm:flex sm:items-center">
                                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full sm:w-auto flex-1 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#C5A367] focus:border-[#C5A367]"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 sm:mt-0 sm:ml-0 bg-[#C5A367] text-white py-2 px-1 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-[#b08f5a] transition"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                                <div className="mt-3 space-x-4 text-xs text-gray-600">
                                    <Link href="#" className="hover:text-[#C5A367]">Privacy Policy</Link>
                                    <span className="text-gray-300">•</span>
                                    <Link href="#" className="hover:text-[#C5A367]">Terms of Service</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="border-t border-gray-200">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <span className="text-sm text-gray-600">© {new Date().getFullYear()} Glitz & Glam. All rights reserved.</span>

                                <div className="flex items-center gap-3">
                                    <img src="/payments/mtn.svg" width={40} alt="MTN" />
                                    <img src="/payments/Airtel.png" width={40} alt="Airtel" />
                                    <img src="/payments/MasterCard.png" width={40} alt="MasterCard" />
                                    <img src="/payments/PayPal.png" width={70} alt="PayPal" />
                                    <img src="/payments/Visa.svg" width={40} alt="Visa" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#C5A367] hover:text-white transition"><Instagram size={18} /></a>
                                    <a href="#" aria-label="Facebook" className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#C5A367] hover:text-white transition"><Facebook size={18} /></a>
                                    <a href="#" aria-label="TikTok" className="h-9 w-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#C5A367] hover:text-white transition"><PiTiktokLogo size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
        )
}