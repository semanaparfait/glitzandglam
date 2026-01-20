import {config} from 'dotenv'
config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { connectDB, disconnectDB } from './config/db.js';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.75:3000'],
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.use('/auth', authRoutes);

// connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// handle unhandled promise rejection eg db
process.on("unhandleRejection", (err)=>{
    console.error("Unhandle Rejection",err)
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

// handle uncought exception
process.on("uncaughtException", async(err)=>{
    console.error("uncaught exception", err)
    await disconnectDB();
    process.exit(1);
})

// graceful shutdown
process.on("SIGTERM", async() =>{
    console.log("SIGTERM received ,shutting down graceful")
    server.close(async ()=>{
        await disconnectDB();
        process.exit(0)
    });
});

