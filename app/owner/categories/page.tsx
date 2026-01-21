"use client";

import { FormEvent, useState } from "react";

export default function Categories() {
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

    return (
        <main className="max-w-2xl mx-auto p-6 space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Add Category</h1>
                <p className="text-sm text-gray-600">Create a new product category for the catalog.</p>
            </div>

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

            {message && (
                <div className="text-sm text-gray-800 bg-gray-100 border border-gray-200 rounded-md px-3 py-2">
                    {message}
                </div>
            )}
        </main>
    );
}