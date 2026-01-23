"use client";

import { use } from "react";
import ProductClient from "./ProductClient";
import { useGetProductsQuery } from "@/servicesApi/Productslice";

export default function ProductPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams ?? {};
  const { data: productsData, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading product... by id</p>;
  if (error) return <p>Failed to load product.</p>;

  const product = productsData?.products?.find((item) => String(item.id) === String(id));
  

  if (!product) return <p>Product not found.</p>;

  return <ProductClient product={product} allProducts={productsData?.products || []} />;
}
