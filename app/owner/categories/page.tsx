"use client";

import { FormEvent, useState } from "react";
import { Pencil, Trash } from "lucide-react";
import {useCreateCategoryMutation,useGetCategoriesQuery} from '@/servicesApi/categorySlice';

type Tab = "view" | "add";

const demoCategories = [
    {
        id: 1,
        name: "Bracelets",
        description: "Elegant bracelets for every occasion.",
        image: "/newproducts/armring.jpeg",
    },
    {
        id: 2,
        name: "Earrings",
        description: "Studs, hoops, and statement pieces.",
        image: "/newproducts/bigearings.jpeg",
    },
    {
        id: 3,
        name: "Necklaces",
        description: "Minimal to bold necklace styles.",
        image: "/newproducts/neckless1.jpeg",
    },
];

export default function Categories() {
    const { data, error, isLoading } = useGetCategoriesQuery(undefined);
    // Optional debug
    console.log('Categories data:', data);
    const [activeTab, setActiveTab] = useState<Tab>("view");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageType, setImageType] = useState<"file" | "url">("file");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage(null);

        if (!name.trim()) {
            setMessage("Name is required.");
            return;
        }

        if (imageType === "file" && !imageFile) {
            setMessage("Please choose an image file.");
            return;
        }

        if (imageType === "url" && !imageUrl.trim()) {
            setMessage("Please provide an image URL.");
            return;
        }

        try {
            setIsSubmitting(true);
            // TODO: Replace with real API call to your backend (e.g., POST /api/categories)
            // Example payload:
            // const formData = new FormData();
            // formData.append("name", name);
            // formData.append("description", description);
            // if (imageType === "file" && imageFile) formData.append("image", imageFile);
            // if (imageType === "url") formData.append("imageUrl", imageUrl);
            // await fetch("/api/categories", { method: "POST", body: formData });
            await new Promise((resolve) => setTimeout(resolve, 500));

            setMessage("Category saved (mock).");
            setName("");
            setDescription("");
            setImageFile(null);
            setImageUrl("");
        } catch (error) {
            setMessage("Failed to save category.");
        } finally {
            setIsSubmitting(false);
        }
    };
   if(isLoading){
    return <p>Loading...</p>
   }
   if(error){
    return <p>Error loading categories.. :</p>
   }
    return (
        <main className="max-w-5xl mx-auto p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900">Categories</h1>
                    <p className="text-sm text-gray-600">View existing categories or add a new one.</p>
                </div>
                <div className="inline-flex rounded-md border border-gray-200 bg-white shadow-sm">
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === "view" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("view")}
                    >
                        View categories
                    </button>
                    <button
                        className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === "add" ? "bg-black text-white" : "text-gray-800"}`}
                        onClick={() => setActiveTab("add")}
                    >
                        Add category
                    </button>
                </div>
            </div>

            {activeTab === "view" && (
                <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data?.categories?.map((category: any) => (
                        <article key={category.id} className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
                            <div className="aspect-[4/3] bg-gray-100">
                                <img src={category.categoryImageUrl} alt={category.categoryName} className="h-full w-full object-cover" />
                            </div>
                            <div className="p-4 space-y-1">
                                <h3 className="text-sm font-semibold text-gray-900">{category.categoryName}</h3>
                                <p className="text-sm text-gray-600">{category.categoryDescription}</p>
                                <div className="flex gap-3 items-center justify-center">
                                    <Pencil className="h-5 w-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
                                    <Trash size={20} className="text-red-500 hover:text-gray-700 cursor-pointer" />
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            )}

            {activeTab === "add" && (
                <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-sm border border-gray-200 rounded-lg p-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="name">
                           Category Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Bracelets"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm font-medium text-gray-800">Category Image</p>
                        <div className="flex items-center gap-4 text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="file"
                                    checked={imageType === "file"}
                                    onChange={() => setImageType("file")}
                                    className="h-4 w-4"
                                />
                                Upload file
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="imageType"
                                    value="url"
                                    checked={imageType === "url"}
                                    onChange={() => setImageType("url")}
                                    className="h-4 w-4"
                                />
                                Use image URL
                            </label>
                        </div>

                        {imageType === "file" ? (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        ) : (
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://example.com/image.jpg"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                            />
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-800" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Short description (optional)"
                            rows={3}
                            className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 disabled:opacity-70"
                    >
                        {isSubmitting ? "Saving..." : "Save Category"}
                    </button>
                </form>
            )}

            {message && (
                <div className="text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-md px-3 py-2">
                    {message}
                </div>
            )}
        </main>
    );
}