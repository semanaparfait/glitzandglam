import { Lock, ThumbsUp, Truck } from "lucide-react";

export default function AboutUs(){

const contents = [
  {
    icon: Truck,
    title: "Free & Fast Delivery",
    description:
      "Enjoy complimentary delivery on all Glitz & Glam jewelry within Kigali, delivered safely to your doorstep.",
  },
  {
    icon: ThumbsUp,
    title: "Premium Craftsmanship",
    description:
      "Each piece is expertly crafted using high-quality materials to ensure lasting elegance, beauty, and shine.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Shop with confidence using our fully encrypted checkout and trusted payment methods.",
  },
];

    return(
        <div className="">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10 px-5 max-w-6xl mx-auto">
  
  {/* About Text */}
  <div className="md:w-1/2">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-950">
      About Us
    </h1>
    <p className="text-gray-700 leading-relaxed text-lg">
      At <span className="font-semibold">Glitz & Glam</span>, we craft timeless jewelry 
      that celebrates elegance and sophistication. Each piece is meticulously 
      designed using premium materials, ensuring lasting beauty and shine. 
      Our mission is to make every moment unforgettable with jewelry that 
      tells your unique story.
    </p>
  </div>

  {/* About Image */}
  <div className="md:w-1/2 flex justify-center">
    <img 
      className="w-full max-w-sm h-auto object-cover rounded-xl shadow-xl"
      src="https://i.pinimg.com/736x/28/2a/c8/282ac8f7311f9e3f6d2ecd6cbcb17b7b.jpg" 
      alt="Glitz & Glam Jewelry" 
    />
  </div>

</div>



            <div className="grid md:grid-cols-3 justify-around gap-6 mt-10 md:px-12 px-5">
            {contents.map((item, index) => {
                const Icon = item.icon;
                return (
                <div
                    key={index}
                    className="flex flex-col items-start gap-3 "
                >
                    <div className="bg-amber-950 rounded-full p-2 inline-flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h1 className="font-semibold text-lg text-amber-950">{item.title}</h1>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                    </p>
                </div>
                );
            })}
            </div>
            <div className="bg-[#fcf7f1] flex flex-wrap items-center justify-evenly py-7 mt-20">
                <div className="flex gap-4 overflow-x-auto py-4">
                <img
                    src="https://i.pinimg.com/1200x/73/28/92/7328926f78de5c0df268ea1536cb521c.jpg"
                    alt="Glitz & Glam Jewelry"
                    className="w-48 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                />
                <img
                    src="https://i.pinimg.com/1200x/73/28/92/7328926f78de5c0df268ea1536cb521c.jpg"
                    alt="Glitz & Glam Jewelry"
                    className="w-48 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                />
                <img
                    src="https://i.pinimg.com/1200x/a2/c9/15/a2c915a61f8dad92c2ff0b9015bd61fd.jpg"
                    alt="Glitz & Glam Jewelry"
                    className="w-48 h-48 object-cover rounded-xl shadow-md flex-shrink-0"
                />
                </div>

                <div className="flex flex-col gap-3 items-start">
                    <h1 className="font-bold text-3xl text-amber-950">Follow Our Instagram</h1>
                    <p>@___glitzandglam</p>
                    <button className="bg-amber-950 text-white rounded-3xl py-1 px-2">Follow Now</button>
                </div>
            </div>

        </div>
    )
}