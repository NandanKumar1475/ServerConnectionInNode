import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
});

const DbConnect =() =>{
    mongoose.connect(process.env.MONGODB_URI,{}).then(()=>{
        console.log("DB CONNECTED")
    }).catch((error)=>{
        console.error(error);
        console.log(error);
        process.exit(1)
});

}

export default DbConnect;

