import { Truck, Clock, MapPin, Shield } from "lucide-react";

export default function ShippingGuide() {
  const shippingInfo = [
    {
      icon: Truck,
      title: "Fast & Reliable Delivery",
      description: "We offer express shipping options to get your jewelry to you quickly and safely.",
    },
    {
      icon: Clock,
      title: "Delivery Times",
    description: "Fast delivery within Kigali — your order arrives in just 40 minutes.",

    },
    {
      icon: MapPin,
      title: "Shipping Locations",
      description: "We currently ship within Kigali and surrounding areas. International shipping coming soon.",
    },
    {
      icon: Shield,
      title: "Secure Packaging",
      description: "All items are carefully packaged to ensure they arrive in perfect condition.",
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">
            Shipping Guide
          </h1>
          <p className="text-gray-700 text-lg">
            Learn about our shipping policies and how we ensure your Glitz & Glam jewelry arrives safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {shippingInfo.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <item.icon className="text-[#C5A367] w-8 h-8 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-amber-950 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-amber-950 mb-4">Shipping Costs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Free shipping on orders over RWF 50,000 within Kigali.</li>
            <li>Standard shipping: RWF 5,000 for orders under RWF 50,000.</li>
            <li>Express shipping: RWF 2,000 (available for select locations).</li>
          </ul>

          <h2 className="text-2xl font-bold text-amber-950 mt-8 mb-4">Tracking Your Order</h2>
          <p className="text-gray-700 mb-4">
            Once your order ships, you'll receive a tracking number via email. You can track your package on our website or through the carrier's site.
          </p>

          <h2 className="text-2xl font-bold text-amber-950 mt-8 mb-4">Returns & Exchanges</h2>
          <p className="text-gray-700">
            If you're not satisfied with your purchase, you can return it within 5 days for a full refund or exchange. Contact us for return instructions.
          </p>
        </div>
      </div>
    </div>
  );
}