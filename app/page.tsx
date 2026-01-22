"use client"
import Image from "next/image";
import Navbar from "./(user)/components/Navbar";
import Footer from "./(user)/components/Footer";
import Hero from "@/app/(user)/components/Hero"
import Categories from '@/app/(user)/components/Categories'
import Shoping from "./(user)/components/Shoping";
import Advert from "./(user)/components/Advert";
import Hero2 from "./(user)/components/Hero2";

import {useCreateCategoryMutation,useGetCategoriesQuery} from '@/servicesApi/categorySlice'


export default function Home() {
  const { data, error, isLoading } = useGetCategoriesQuery(undefined);
  console.log("Categories Data:", data);
  return (
    <div className=" bg-zinc-50 ">
   <Navbar/>
   {/* <Hero/> */}
   <Hero2/>
   <Categories/>
   <Shoping/>
   <Advert/>
   <Footer/>
    </div>
  );
}
