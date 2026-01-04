// @/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice:number;
  image: string;
  onSale:boolean,
  outOfStock:boolean,
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4990,
    onSale:true,
    outOfStock:false,
    oldPrice:7000,
    image: "/products/p11.png",
    description: "High-quality wireless headphones with noise-canceling feature.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 7990,
    onSale:false,
    outOfStock:true,
    oldPrice:10000,
    image: "/products/p22.png",
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 2490,
    oldPrice:4000,
    outOfStock:false,
    onSale:true,
    image: "/products/p3.png",
    description: "Precision gaming mouse with customizable DPI and RGB lights.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 5990,
    outOfStock:true,
    onSale:false,
    oldPrice:7000,
    image: "https://i.pinimg.com/1200x/1a/3f/5b/1a3f5bedabd0022860e3ba9b3bf90b05.jpg",
    description: "Durable mechanical keyboard with tactile feedback.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 3990,
    onSale:true,
    outOfStock:false,
    oldPrice:5000,
    image: "https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg",
    description: "Portable speaker with rich sound and long battery life.",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 1990,
    oldPrice:3000,
    outOfStock:true,
    onSale:false,
    image: "/products/laptop-stand.jpg",
    description: "Ergonomic laptop stand to improve posture and cooling.",
  },
  {
    id: 7,
    name: "External Hard Drive",
    price: 6990,
    oldPrice:8000,
    onSale:true,
    outOfStock:false,
    image: "/products/hard-drive.jpg",
    description: "1TB external hard drive for all your storage needs.",
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 1490,
    oldPrice:2500,
    onSale:true,
    outOfStock:false,
    image: "/products/wireless-charger.jpg",
    description: "Fast wireless charger compatible with most smartphones.",
  },
  {
    id: 9,
    name: "Action Camera",
    price: 9990,
    oldPrice:12000,
    onSale:true,
    outOfStock:false,
    image: "/products/action-camera.jpg",
    description: "Capture your adventures in 4K with this waterproof action camera.",
  },
  {
    id: 10,
    name: "VR Headset",
    price: 12990,
    oldPrice:16890,
    onSale:true,
    outOfStock:false,
    image: "/products/vr-headset.jpg",
    description: "Immersive VR headset for gaming and virtual experiences.",
  },
];
