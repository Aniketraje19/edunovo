import { asyncHandler } from "../utils/AsyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { Request, Response } from 'express';
import { User } from "../models/user.model";

const getUsers = asyncHandler(async (req,res) =>{
    const users = await User.find()
    return res.status(200).json(new ApiResponse(200,users))
})


const getUserById = asyncHandler(async (req,res) =>{
   const userId = req.params.id
   const user = await User.findOne({userId})

   if(!user || user===undefined){
    return res.status(400).json({message:"User not Found!"})
   }


   return res.status(200).json(new ApiResponse(200,user))
})


export {getUsers,getUserById}