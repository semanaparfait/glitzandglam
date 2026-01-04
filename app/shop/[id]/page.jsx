import { Calendar, Package, Truck, MapPin } from "lucide-react";
import { products } from "../../components/Products";

export default async function ProductPage({ params }) {
  const { id } = await params;
  console.log(id)

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="grid md:grid-cols-2 justify-center gap-3 py-10 px-5  ">
        <div className="  flex items-center justify-center rounded-xl  ">
        <img
            src={product.image}
            alt={product.name}
            className="w-1/2 h-auto object-contain"
        />
        </div>

        <div className="flex flex-col gap-2 items-start ">

      <h1 className="font-semibold text-2xl">{product.name}</h1>
      <div>

      <p className="font-medium text-gray-400 line-through">{product.price.toLocaleString()} RWF</p>
      <p className="font-semibold text-2xl leading-tight">{product.price.toLocaleString()} RWF</p>
      </div>
      <p className="max-w-md leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi iusto tempore adipisci et, quibusdam nobis soluta. Velit, enim ducimus fuga quod culpa, in dolorum laborum deleniti quasi accusantium tempora?</p>
      <div>
        
      </div>
      <button className="bg-black text-white font-medium py-1 px-2.5 rounded-2xl">Add To Cart</button>
        <div className="border rounded-2xl border-gray-300 p-6">
        <h1 className="font-semibold mb-2">Shipping</h1>

        <div className="grid grid-cols-2 gap-4">
            
            {/* 1. Package */}
            <div className="flex items-center gap-2">
            <Package />
            <div>
                <p className="text-sm text-gray-500">Package</p>
                <h1 className="font-semibold">Regular Package</h1>
            </div>
            </div>

            {/* 2. Delivery Time */}
            <div className="flex items-center gap-2">
            <Calendar />
            <div>
                <p className="text-sm text-gray-500">Delivery Time</p>
                <h1 className="font-semibold">40 Minutes</h1>
            </div>
            </div>

            {/* 3. Shipping Fee */}
            <div className="flex items-center gap-2">
            <Truck />
            <div>
                <p className="text-sm text-gray-500">Shipping Fee</p>
                <h1 className="font-semibold">Free Delivery</h1>
            </div>
            </div>

            {/* 4. Delivery Location */}
            <div className="flex items-center gap-2">
            <MapPin />
            <div>
                <p className="text-sm text-gray-500">Delivery Area</p>
                <h1 className="font-semibold">Within Kigali</h1>
            </div>
            </div>

        </div>
        </div>

        </div>
    </div>
  );
}
