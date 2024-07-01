import express, {Request,Response} from "express";
import  dotenv from "dotenv"
import AuthRoutes from "./routes/AuthRoutes";
import ConnectDatabase from "./dbconfig";
dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use("/api/auth", AuthRoutes)


app.listen(PORT,()=>{
  ConnectDatabase();
  console.log(`App is running at ${PORT}`)
})