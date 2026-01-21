
import {prisma} from '../config/db.js'

const  subscribeNewsletter = async(req,res)=>{
    const {email} = req.body;
    try {
        const existingEmail = await prisma.newsletter.findFirst({
            where:{
                email
            }
        })
        if(existingEmail){
            return res.status(409).json({
                message: "Email already subscribed to newsletter"
            })
        }
        const createNewsletter = await prisma.newsletter.create({
            data:{
                email,
            }
        });
        res.status(201).json({
            message: "Subscribed to newsletter successfully",
            subscriber: createNewsletter
        })
        
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({ message: "Server error" });
        
    }
}
const  getNewsletterSubscribers = async(req,res)=>{
    try {
        const getSubscribed = await prisma.newsletter.findMany({
            orderBy:{
                createdAt:'desc',
            }
        });
        res.status(200).json({
            subscribers: getSubscribed
        })
        
    } catch (error) {
        console.error("Error getting subscribed to newsletter:", error);
        res.status(500).json({ message: "Server error" });
        
    }
}

export {subscribeNewsletter,getNewsletterSubscribers}