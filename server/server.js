import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";


dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(cors());
await connectDB();

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get("/", (req, res) => res.send("API Working very fine"));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
