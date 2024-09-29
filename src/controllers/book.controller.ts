import { asyncHandler } from "../utils/AsyncHandler";
import { Book } from "../models/book.model";
import { ApiResponse } from "../utils/ApiResponse";
import { Request, Response } from 'express';

interface FilterQuery {
    category?: string;
    name?: string;
    min?: string; // Query parameters are always strings
    max?: string; // Query parameters are always strings
}


const getBooks = asyncHandler(async (req,res)=>{
    const books = await Book.find();
    return res.status(200).json(new ApiResponse(200,books,"All Books!"))
})


const getBooksByName = asyncHandler(async (req,res)=> {
        const { name } = req.query ;
        if (Array.isArray(name)) {
            res.status(400).json({ message: 'Invalid book name: expected a single string' });
            return;
        }

        if (typeof name !== 'string') {
            res.status(400).json({ message: 'Invalid book name' });
            return;
        }

        console.log(name)

        const sanitizedQuery = name.replace(/"/g, '');
        const regex = new RegExp(sanitizedQuery, 'i');    
        const books = await Book.find({ bookName: regex });

        if(!books || books.length === 0){
            return res.status(400).json({message:"No Books Found!"})
        }

        return res.status(200).json(new ApiResponse(200,books))
})

const filterBooksByRent = asyncHandler(async (req,res)=>{
    const { min, max } = req.query;
    const books = await Book.find({
        rentPerDay: { $gte: min, $lte: max }
    });


    if(!books || books.length === 0){
        return res.status(400).json({message:"No Book Found!"})
    }
    
    return res.status(200).json(new ApiResponse(200,books))

})

const filterBooks = asyncHandler(async (req: Request<{}, {}, {}, FilterQuery>, res: Response)=>{
    const { category, name, min, max } = req.query;
    const filters:{[key:string]:any} = {};
    if (category) {
        filters.category = category;
    }
    if (name) {
        const sanitizedQuery = name.replace(/"/g, '');
        const regex = new RegExp(sanitizedQuery, 'i');    
        filters.bookName = regex
    }
    if (min) {
        filters.rentPerDay = { ...filters.rentPerDay, $gte: min };
    }
    if (max) {
        filters.rentPerDay = { ...filters.rentPerDay, $lte: max };
    }

    console.log(filters)

    const books = await Book.find(filters)

    if(!books || books.length === 0){
        return res.status(400).json({message:"No Book Found!"})
    }
    
    return res.status(200).json(new ApiResponse(200,books))



})


export {getBooks,getBooksByName,filterBooksByRent,filterBooks}