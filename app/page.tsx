import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "@/app/components/Hero"
import Categories from '@/app/components/Categories'
import Shoping from "./components/Shoping";


export default function Home() {
  return (
    <div className=" bg-zinc-50 ">
   <Navbar/>
   <Hero/>
   <Categories/>
   <Shoping/>
   <Footer/>
    </div>
  );
}
