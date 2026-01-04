import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "@/app/components/Hero"
import Categories from '@/app/components/Categories'
import Shoping from "./components/Shoping";
import Advert from "./components/Advert";
import Hero2 from "./components/Hero2";


export default function Home() {
  return (
    <div className=" bg-zinc-50 ">
   {/* <Navbar/> */}
   {/* <Hero/> */}
   <Hero2/>
   <Categories/>
   <Shoping/>
   <Advert/>
   {/* <Footer/> */}
    </div>
  );
}
