import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRouter from './routes/auth.js'

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        await mongoose.connection.useDb('kabi-shopping')
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

dotenv.config()
const app = express();
app.use(express.json())
app.use(cors({origin:true}))

app.use('/auth', authRouter)


app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started");
    connectDB()
})