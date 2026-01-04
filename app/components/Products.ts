// @/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4990,
    image: "/products/p1.jpg",
    description: "High-quality wireless headphones with noise-canceling feature.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 7990,
    image: "/products/p2.jpg",
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 2490,
    image: "/products/p3.png",
    description: "Precision gaming mouse with customizable DPI and RGB lights.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 5990,
    image: "https://i.pinimg.com/1200x/1a/3f/5b/1a3f5bedabd0022860e3ba9b3bf90b05.jpg",
    description: "Durable mechanical keyboard with tactile feedback.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 3990,
    image: "https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg",
    description: "Portable speaker with rich sound and long battery life.",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 1990,
    image: "/products/laptop-stand.jpg",
    description: "Ergonomic laptop stand to improve posture and cooling.",
  },
  {
    id: 7,
    name: "External Hard Drive",
    price: 6990,
    image: "/products/hard-drive.jpg",
    description: "1TB external hard drive for all your storage needs.",
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 1490,
    image: "/products/wireless-charger.jpg",
    description: "Fast wireless charger compatible with most smartphones.",
  },
  {
    id: 9,
    name: "Action Camera",
    price: 9990,
    image: "/products/action-camera.jpg",
    description: "Capture your adventures in 4K with this waterproof action camera.",
  },
  {
    id: 10,
    name: "VR Headset",
    price: 12990,
    image: "/products/vr-headset.jpg",
    description: "Immersive VR headset for gaming and virtual experiences.",
  },
];
