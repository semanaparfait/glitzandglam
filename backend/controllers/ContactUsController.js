import { prisma } from "../config/db.js";

const submitContactForm = async (req, res) => {
    const { name, email, message, phoneNumber } = req.body;
    try {
        const newSubmission = await prisma.contactUs.create({
            data: {
                name,
                email,
                message,
                phoneNumber,
            },
        });
        res.status(201).json({
            message: "Contact form submitted successfully",
            submission: newSubmission,
        });

        
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Server error" });
        
    }
}
const getContactSubmissions = async (req, res) => {
    try {
        const submissions = await prisma.contactUs.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json({
            submissions,
        });
    } catch (error) {
        console.error("Error fetching contact submissions:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export { submitContactForm, getContactSubmissions };