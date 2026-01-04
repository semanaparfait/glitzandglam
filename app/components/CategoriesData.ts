// @/data/products.ts

export interface Category {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    title: "Select from the best",
    image: "/products/p11.png",
    description: "High-quality wireless headphones with noise-canceling feature.",
  },
  {
    id: 2,
    name: "Smart Watch",
    title: "Up to 20% off today",
    image: "/products/p22.png",
    description: "Track your fitness and notifications on the go.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    title: "Never go out of style",
    image: "/products/p33.png",
    description: "Precision gaming mouse with customizable DPI and RGB lights.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    title: "Built for performance",
    image:
      "https://i.pinimg.com/1200x/1a/3f/5b/1a3f5bedabd0022860e3ba9b3bf90b05.jpg",
    description: "Durable mechanical keyboard with tactile feedback.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    title: "Feel the sound",
    image:
      "https://i.pinimg.com/736x/74/f1/3b/74f13b8705ddf22f9dee9848004491d4.jpg",
    description: "Portable speaker with rich sound and long battery life.",
  },
  {
    id: 6,
    name: "Laptop Stand",
    title: "Work smarter",
    image: "/products/laptop-stand.jpg",
    description: "Ergonomic laptop stand to improve posture and cooling.",
  },
  {
    id: 7,
    name: "External Hard Drive",
    title: "Extra space, extra speed",
    image: "/products/hard-drive.jpg",
    description: "1TB external hard drive for all your storage needs.",
  },
];
