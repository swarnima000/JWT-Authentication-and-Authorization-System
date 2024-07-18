import CustomAPIError from "../errors/CustomAPIError.js";
import jwt from 'jsonwebtoken'
import BadRequestError from "../errors/BadRequestError.js";

export const login=(req,res)=>{
  console.log(req.body);
  const {username, password}=req.body;

  if(!username|| !password){
    //return res.status(400).json({msg:"please provide email and password"});
    throw new BadRequestError('please provide email and password',400);
  }

  const id= new Date().getDate();
  const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"1d",});
  console.log(token);
  res.status(200).json({msg:'user created',token});
  //res.send("fake login/register/signup");
};

export const dashboard=(req,res)=>{
  //console.log(req.headers);

  // const authHeader=req.headers.authorization;
  // if(!authHeader || !authHeader.startsWith('Bearer '))
  //   throw new CustomAPIError("No token provided",401);
  
  // const token=authHeader.split(" ")[1]; //space ke basis pe split and store 1 index wala
  // console.log("token",token);

  // const decoded = jwt.verify(token,process.env.JWT_SECRET);
  // console.log("decoded",decoded);


  const luckyNumber= Math.floor(Math.random() * 100);
  res.status(200).json({msg:`Hello ${req.user.username}`,secret:`Here is your authorized data, Your lucky number is ${luckyNumber}`,});
};

