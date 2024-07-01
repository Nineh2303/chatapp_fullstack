import express, {Router, Request,Response} from "express";
import AuthServices from "../services/AuthServices";
const AuthRoutes:Router = express.Router()

AuthRoutes
  .get("/signup",(req:Request, res:Response)=> AuthServices.SignUp(req,res))
  .get("/login", (req:Request, res:Response)=> AuthServices.Login(req,res))

export default AuthRoutes