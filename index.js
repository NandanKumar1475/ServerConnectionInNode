import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv' ;
import DbConnect from './config/todoConnection.js'
import userRoute from './routes/todoRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000
app.use(express.json());

DbConnect();

app.get('/',(req,res)=>{
    res.send("hii you are in home page")

});
app.use('/api/v1',userRoute);


app.listen(PORT,()=>{
    console.log(`Server started Succesfuly at port ${PORT}`);

})


