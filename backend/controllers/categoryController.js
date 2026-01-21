import { prisma } from "../config/db.js";

const createCategory = async (req, res) => {
    const {categoryName, categoryImageUrl, categoryDescription} = req.body;
    try {
        const existingCategory = await prisma.category.findUnique({
            where: {
                categoryName: categoryName
            }
        });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }
        const newCategory = await prisma.category.create({
            data: {
                categoryName,
                categoryImageUrl,
                categoryDescription
            }
        });
        res.status(201).json({
            message: "Category created successfully",
            category: newCategory
        });
    } catch (error) {
        console.error("Error creating category:", error);
        res.status(500).json({ message: "Server error" });
    }
}
const getCategories = async (req, res) => {}
const getCategoryById = async (req, res) => {}
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const existingCategory = await prisma.category.findUnique({
            where: { id: parseInt(id) }
        });
        if (!existingCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        await prisma.category.delete({
            where: { id: parseInt(id) }
        });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        console.error("Error deleting category:", error);
        res.status(500).json({ message: "Server error" });
    }
}
const updateCategory = async (req, res) => {}
export { createCategory, getCategories, getCategoryById, deleteCategory, updateCategory };