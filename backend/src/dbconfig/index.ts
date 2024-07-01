import * as mongoose from "mongoose";

const ConnectDatabase =async()=>{
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database is connected")
  }  catch (error){
    console.log("Something went wrong when connect to DB", error)
  }
}
export default  ConnectDatabase;