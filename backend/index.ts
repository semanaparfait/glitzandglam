import express from "express";
import {PrismaClient} from "@prisma/client"
const app = express();
app.use(express.json())
const prisma= new PrismaClient();


app.get("/users", async(req,res)=>{
    const users= await prisma.user.findFirst()
    res.json(users);
})
app.listen(5000, ()=>{
    console.log("server is running on port 5000")
})