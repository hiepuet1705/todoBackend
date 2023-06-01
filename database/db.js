import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
 const Connection = async () => {
   
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zdncmb4.mongodb.net/mern-todo?retryWrites=true&w=majority`
  try{

    
    const connection = await mongoose.connect(MONGODB_URI,{useNewUrlParser:true})

    console.log("Database connect successfully")
  }
  catch(error){
    console.log('Error while connecting with database',error.message)
  }

    
        
    
}
export default Connection