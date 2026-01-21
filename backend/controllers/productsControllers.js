import { prisma } from "../config/db.js";

const createProduct = async (req, res) => {
    const{productName,productImageUrl,productNewPrice,productOldPrice,productDescription,productInStock,categoryId} = req.body;
    try {
        const newProduct = await prisma.product.create({
            data:{
                productName,
                productImageUrl,
                productNewPrice,
                productOldPrice,
                productDescription,
                productInStock,
                categoryId
            }
        });
        res.status(201).json({
            message: "Product created successfully",
            product: newProduct
        });

        
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Server error" });
        
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include:{
                category:true,
            },
            orderBy:{
                createdAt:'desc',
            },
        });
        res.status(200).json({
            message: "Products fetched successfully",
            products: products
        })
        
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error" });
        
    }
};
const getProductById = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Server error" });
        
    }
};

export { createProduct, getProducts, getProductById, updateProduct, deleteProduct };