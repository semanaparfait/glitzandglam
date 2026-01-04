import { products } from "../../components/Products";
import ProductClient from "./ProductClient";

export default async function ProductPage({ params }) {
  const { id } = await params;

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return <ProductClient product={product} />;
}
