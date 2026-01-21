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
    name: "Arm & Earring Combo",
    price: 4990,
    onSale:true,
    outOfStock:false,
    oldPrice:7000,
    image: [
      "/newproducts/arm&ear.jpeg",
      "/newproducts/arm&earing.jpeg",
      "/newproducts/arm1.jpeg",
      "/newproducts/armring.jpeg",
    ],
    description: "Elegant arm and earring combination for the perfect look.",
    category: "Combos",
  },
  {
    id: 2,
    name: "Arm & Necklace Combo",
    price: 7990,
    onSale:false,
    outOfStock:false,
    oldPrice:10000,
    image: [
      "/newproducts/arm&neckless.jpeg",
      "/newproducts/arm&neckopt2.jpeg",
      "/newproducts/neckless1.jpeg",
      "/newproducts/neckless2.jpeg",
    ],
    description: "Stunning arm and necklace set for special occasions.",
    category: "Combos",
  },
  {
    id: 3,
    name: "Arm Ring Collection",
    price: 2490,
    oldPrice:4000,
    outOfStock:false,
    onSale:true,
    image: [
      "/newproducts/armring.jpeg",
      "/newproducts/armring1.jpeg",
      "/newproducts/arm.jpeg",
      "/newproducts/arm1.jpeg",
    ],
    description: "Beautiful arm ring collection with various designs.",
    category: "Arm Rings",
  },
  {
    id: 4,
    name: "Wrist Collection",
    price: 5990,
    outOfStock:false,
    onSale:false,
    oldPrice:7000,
    image: [
      "/newproducts/armwrest1.jpeg",
      "/newproducts/armwrest2.jpeg",
      "/newproducts/armring1.jpeg",
      "/newproducts/armring.jpeg",
    ],
    description: "Elegant wrist jewelry collection for everyday wear.",
    category: "Wrist",
  },
  {
    id: 5,
    name: "Big Earrings",
    price: 3990,
    onSale:true,
    outOfStock:false,
    oldPrice:5000,
    image: [
      "/newproducts/bigearings.jpeg",
      "/newproducts/earing.jpeg",
      "/newproducts/midearings.jpeg",
      "/newproducts/smearings.jpeg",
    ],
    description: "Statement big earrings to enhance your style.",
    category: "Earrings",
  },
  {
    id: 6,
    name: "Small Earrings",
    price: 1990,
    oldPrice:3000,
    outOfStock:false,
    onSale:false,
    image: [
      "/newproducts/smearings.jpeg",
      "/newproducts/earing.jpeg",
      "/newproducts/midearings.jpeg",
      "/newproducts/bigearings.jpeg",
    ],
    description: "Delicate small earrings perfect for any occasion.",
    category: "Earrings",
  },
  {
    id: 7,
    name: "Mid-size Earrings",
    price: 6990,
    oldPrice:8000,
    onSale:true,
    outOfStock:false,
    image: [
      "/newproducts/midearings.jpeg",
      "/newproducts/bigearings.jpeg",
      "/newproducts/earing.jpeg",
      "/newproducts/smearings.jpeg",
    ],
    description: "Mid-size earrings for a balanced, elegant look.",
    category: "Earrings",
  },
  {
    id: 8,
    name: "Necklace Essentials",
    price: 1490,
    oldPrice:2500,
    onSale:true,
    outOfStock:false,
    image: [
      "/newproducts/neckless1.jpeg",
      "/newproducts/neckless2.jpeg",
      "/newproducts/necklessother.jpeg",
      "/newproducts/arm&neckless.jpeg",
    ],
    description: "Essential necklace pieces for your jewelry collection.",
    category: "Necklaces",
  },
  {
    id: 9,
    name: "Necklace Premium",
    price: 9990,
    oldPrice:12000,
    onSale:true,
    outOfStock:false,
    image: [
      "/newproducts/necklessother.jpeg",
      "/newproducts/neckless1.jpeg",
      "/newproducts/neckless2.jpeg",
      "/newproducts/arm&neckopt2.jpeg",
    ],
    description: "Premium necklace collection for sophisticated style.",
    category: "Necklaces",
  },
  {
    id: 10,
    name: "Complete Jewelry Set",
    price: 12990,
    oldPrice:16890,
    onSale:true,
    outOfStock:false,
    image: [
      "/newproducts/arm&ear.jpeg",
      "/newproducts/arm&neckless.jpeg",
      "/newproducts/armring.jpeg",
      "/newproducts/bigearings.jpeg",
      "/newproducts/neckless1.jpeg",
    ],
    description: "Complete jewelry set with arms, necklaces, and earrings.",
    category: "Sets",
  },
];
