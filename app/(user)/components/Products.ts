// @/data/products.ts

export type ImageArrayMax5 =
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string];

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice:number;
  image: string | ImageArrayMax5;
  onSale:boolean,
  outOfStock:boolean,
  description: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 4990,
    onSale:true,
    outOfStock:false,
    oldPrice:7000,
    image: [
      "https://picsum.photos/seed/wireless-headphones-a/800/600",
      "https://picsum.photos/seed/wireless-headphones-b/800/600",
      "https://picsum.photos/seed/wireless-headphones-c/800/600",
      "https://picsum.photos/seed/wireless-headphones-d/800/600",
      "https://picsum.photos/seed/wireless-headphones-e/800/600",
    ],
    description: "High-quality wireless headphones with noise-canceling feature.",
    category: "Wireless Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 7990,
    onSale:false,
    outOfStock:true,
    oldPrice:10000,
    image: [
      "https://picsum.photos/seed/smart-watch-a/800/600",
      "https://picsum.photos/seed/smart-watch-b/800/600",
      "https://picsum.photos/seed/smart-watch-c/800/600",
      "https://picsum.photos/seed/smart-watch-d/800/600",
      "https://picsum.photos/seed/smart-watch-e/800/600",
    ],
    description: "Track your fitness and notifications on the go.",
    category: "Smart Watch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 2490,
    oldPrice:4000,
    outOfStock:false,
    onSale:true,
    image: [
      "https://picsum.photos/seed/gaming-mouse-a/800/600",
      "https://picsum.photos/seed/gaming-mouse-b/800/600",
      "https://picsum.photos/seed/gaming-mouse-c/800/600",
      "https://picsum.photos/seed/gaming-mouse-d/800/600",
      "https://picsum.photos/seed/gaming-mouse-e/800/600",
    ],
    description: "Precision gaming mouse with customizable DPI and RGB lights.",
    category: "Gaming Mouse",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 5990,
    outOfStock:true,
    onSale:false,
    oldPrice:7000,
    image: [
      "https://picsum.photos/seed/mechanical-keyboard-a/800/600",
      "https://picsum.photos/seed/mechanical-keyboard-b/800/600",
      "https://picsum.photos/seed/mechanical-keyboard-c/800/600",
      "https://picsum.photos/seed/mechanical-keyboard-d/800/600",
      "https://picsum.photos/seed/mechanical-keyboard-e/800/600",
    ],
    description: "Durable mechanical keyboard with tactile feedback.",
    category: "Mechanical Keyboard",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 3990,
    onSale:true,
    outOfStock:false,
    oldPrice:5000,
    image: [
      "https://picsum.photos/seed/bluetooth-speaker-a/800/600",
      "https://picsum.photos/seed/bluetooth-speaker-b/800/600",
      "https://picsum.photos/seed/bluetooth-speaker-c/800/600",
      "https://picsum.photos/seed/bluetooth-speaker-d/800/600",
      "https://picsum.photos/seed/bluetooth-speaker-e/800/600",
    ],
    description: "Portable speaker with rich sound and long battery life.",
    category: "Bluetooth Speaker",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 1990,
    oldPrice:3000,
    outOfStock:true,
    onSale:false,
    image: [
      "https://picsum.photos/seed/laptop-stand-a/800/600",
      "https://picsum.photos/seed/laptop-stand-b/800/600",
      "https://picsum.photos/seed/laptop-stand-c/800/600",
      "https://picsum.photos/seed/laptop-stand-d/800/600",
      "https://picsum.photos/seed/laptop-stand-e/800/600",
    ],
    description: "Ergonomic laptop stand to improve posture and cooling.",
    category: "Laptop Stand",
  },
  {
    id: 7,
    name: "External Hard Drive",
    price: 6990,
    oldPrice:8000,
    onSale:true,
    outOfStock:false,
    image: [
      "https://picsum.photos/seed/external-hard-drive-a/800/600",
      "https://picsum.photos/seed/external-hard-drive-b/800/600",
      "https://picsum.photos/seed/external-hard-drive-c/800/600",
      "https://picsum.photos/seed/external-hard-drive-d/800/600",
      "https://picsum.photos/seed/external-hard-drive-e/800/600",
    ],
    description: "1TB external hard drive for all your storage needs.",
    category: "External Hard Drive",
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 1490,
    oldPrice:2500,
    onSale:true,
    outOfStock:false,
    image: [
      "https://picsum.photos/seed/wireless-charger-a/800/600",
      "https://picsum.photos/seed/wireless-charger-b/800/600",
      "https://picsum.photos/seed/wireless-charger-c/800/600",
      "https://picsum.photos/seed/wireless-charger-d/800/600",
      "https://picsum.photos/seed/wireless-charger-e/800/600",
    ],
    description: "Fast wireless charger compatible with most smartphones.",
    category: "Accessories",
  },
  {
    id: 9,
    name: "Action Camera",
    price: 9990,
    oldPrice:12000,
    onSale:true,
    outOfStock:false,
    image: [
      "https://picsum.photos/seed/action-camera-a/800/600",
      "https://picsum.photos/seed/action-camera-b/800/600",
      "https://picsum.photos/seed/action-camera-c/800/600",
      "https://picsum.photos/seed/action-camera-d/800/600",
      "https://picsum.photos/seed/action-camera-e/800/600",
    ],
    description: "Capture your adventures in 4K with this waterproof action camera.",
    category: "Cameras",
  },
  {
    id: 10,
    name: "VR Headset",
    price: 12990,
    oldPrice:16890,
    onSale:true,
    outOfStock:false,
    image: [
      "https://picsum.photos/seed/vr-headset-a/800/600",
      "https://picsum.photos/seed/vr-headset-b/800/600",
      "https://picsum.photos/seed/vr-headset-c/800/600",
      "https://picsum.photos/seed/vr-headset-d/800/600",
      "https://picsum.photos/seed/vr-headset-e/800/600",
    ],
    description: "Immersive VR headset for gaming and virtual experiences.",
    category: "Gaming",
  },
];
