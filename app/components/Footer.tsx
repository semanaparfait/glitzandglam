import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer (){
    return(
        <section className="  flex flex-col  justify-center pt-20 px-3">
            <div className="grid md:grid-cols-4 gap-5 items-center p-5">
                <div>
                    <img src="/logo.png" alt="logo on footer" width={90} className="pb-2"/>
                    <p>Inspired by African heritage, we craft timeless jewelry that celebrates beauty, culture, and elegance.</p>

                </div>
                <div>
                    <ul>
                    <li className="font-bold pb-2">SHOP</li>
                        <li>Rings</li>
                        <li>Bracelets</li>
                        <li>Earrings</li>
                    </ul>
                </div>
                <div>
                    <ul>
                    <li className="font-bold pb-2">CUSTOMER SERVICE</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Shipping Guide</li>
                        <li>Sizmate</li>
                    </ul>
                </div>
                <div>
                        <form action="">
                        <h1 className="font-bold pb-2">NEWSLETTER</h1>
                            <input type="email" placeholder="Enter Your Email" className="border rounded-l-md py-1.5 px-1.5" />
                            <button className="border py-1.5 px-2">Subscribe</button>
                        </form>
                        <p>Privacy policy</p>
                        <p>Terms of Services</p>
                </div>
            </div>
            
            <footer className="py-5 px-7">
            <div className="mx-auto w-[95%] border-t border-gray-200 mb-2"></div>

            <div className="flex items-center justify-between flex-wrap">
                <span>© {new Date().getFullYear()} Glitz & Glam. All rights reserved.</span>

                <div className="flex gap-2.5">
                <img src="/payments/mtn.svg" width={40} />
                <img src="/payments/Airtel.png" width={40} />
                <img src="/payments/MasterCard.png" width={40} />
                <img src="/payments/PayPal.png" width={80} />
                <img src="/payments/Visa.svg" width={40} />
                </div>

                <div className="flex gap-2">
                <Instagram />
                <Facebook />
                <PiTiktokLogo size={25} />
                </div>
            </div>
            </footer>

        </section>
    )
}