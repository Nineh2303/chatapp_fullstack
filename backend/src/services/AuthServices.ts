import  {Request,Response} from "express";

const AuthServices = {
  SignUp : (req: Request, res:Response)=>{
    const  {fullName,username,password,confirmPassword,gender}  = req.body
  },
  Login : (req: Request, res:Response)=>{
    return res.send("Login")
  }
}

export default  AuthServices