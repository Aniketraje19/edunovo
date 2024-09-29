import { asyncHandler } from "../utils/AsyncHandler";
import { ApiResponse } from "../utils/ApiResponse";
import { Transaction } from "../models/transaction.model";
import { Request, Response } from 'express';
import { User } from "../models/user.model";
import { Book } from "../models/book.model";


const issueBook = asyncHandler(async (req,res)=>{
    const {bookId,userId,issueDate} = req.body

    if (!userId || !bookId || !issueDate) {
        return res.status(400).json({ message: 'Please provide userId, bookId, and issueDate.' });
    }

    const newTransaction = new Transaction({
        transactionId: `TRANSACTION_${Date.now()}`,
        userId: userId,
        bookId: bookId,
        issueDate: new Date(issueDate), 
        status:"issued"
    });

    const savedTransaction = await newTransaction.save();

    if(!savedTransaction || savedTransaction === undefined){
        return res.status(500).json({message:"Something went Wrong!"})
    }

    return res.status(200).json(new ApiResponse(200,savedTransaction))

})

const returnBook = asyncHandler(async (req,res)=>{
    const {bookId,userId,returnDate} = req.body

    if (!userId || !bookId || !returnDate) {
        return res.status(400).json({ message: 'Please provide userId, bookId, and returnDate.' });
    }

    const transaction = await Transaction.findOne({
        bookId: bookId,
        userId: userId,
        status: 'issued',
    });

    if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found or already returned.' });
    }
    
    const book = await Book.findOne({bookId});
        if (!book) {
            return res.status(404).json({ message: 'Book not found.' });
        }

        console.log(book)

    const issueDate = transaction.issueDate;
    const daysIssued = Math.ceil((new Date(returnDate).getTime() - new Date(issueDate).getTime()) / (1000 * 60 * 60 * 24)); 
    const rentPerDay = book.rentPerDay;
    const totalRent = rentPerDay * daysIssued;

    transaction.returnDate = new Date(returnDate); 
    transaction.totalRent = totalRent; 
    transaction.status = 'returned'; 

    const updatedTransaction = await transaction.save();

    if(!updatedTransaction || updatedTransaction === undefined){
        return res.status(500).json({message:"Something went Wrong!"})
    }

    return res.status(200).json(new ApiResponse(200,updatedTransaction))
    

})

const getTransactionsByBookName = asyncHandler(async (req,res)=>{
    const { name } = req.query;

    if (Array.isArray(name)) {
        res.status(400).json({ message: 'Invalid book name: expected a single string' });
        return;
    }

    if (typeof name !== 'string') {
        res.status(400).json({ message: 'Invalid book name' });
        return;
    }

    if (!name) {
        return res.status(400).json({ message: 'Please provide a book name.' });
    }

    const sanitizedQuery = name.replace(/"/g, '');
    const regex = new RegExp(sanitizedQuery, 'i');    
    const book = await Book.findOne({ bookName: regex });

    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    const pastTransactions = await Transaction.find({ bookId: book.bookId, status: 'returned' });
    const currentTransaction = await Transaction.findOne({ bookId: book.bookId, status: 'issued' });

    const issuers = pastTransactions.map(transaction => ({
        userId: transaction.userId,
        issueDate: transaction.issueDate,
        returnDate: transaction.returnDate,
        totalRent: transaction.totalRent,
    }));

    const response = {
        totalCount: issuers.length,
        pastIssuers: issuers,
        currentStatus: currentTransaction ? {
            userId: currentTransaction.userId,
            issueDate: currentTransaction.issueDate,
        } : 'Not currently issued',
    };

    return res.status(200).json(new ApiResponse(200,response))

})

const totalRent = asyncHandler(async (req,res)=>{
    const { name } = req.query;
    if (Array.isArray(name)) {
        res.status(400).json({ message: 'Invalid book name: expected a single string' });
        return;
    }

    if (typeof name !== 'string') {
        res.status(400).json({ message: 'Invalid book name' });
        return;
    }

    if (!name) {
        return res.status(400).json({ message: 'Please provide a book name.' });
    }

    const sanitizedQuery = name.replace(/"/g, '');
    const regex = new RegExp(sanitizedQuery, 'i');    
    const book = await Book.findOne({ bookName: regex });

    if (!book) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    const transactions = await Transaction.find({ bookId: book.bookId, status: 'returned' });

    const totalRent = transactions.reduce((acc, transaction) => acc + (transaction.totalRent || 0), 0);

    return res.status(200).json(new ApiResponse(200,{totalRent}))

})

const getBookIssuedToUser = asyncHandler(async(req,res)=>{
    const userId = req.params.id

    if (!userId) {
        return res.status(400).json({ message: 'Please provide a userId.' });
    }

    const transactions = await Transaction.find({ userId, status: 'issued' })

    if (transactions.length === 0) {
        return res.status(404).json({ message: 'No books found for this user.' });
    }

    const issuedBooksPromises = transactions.map(async (transaction) => {
        const book = await Book.findOne({bookId:transaction.bookId});

        return {
            bookId: transaction.bookId,
            bookName: book ? book.bookName : 'Unknown',
            issueDate: transaction.issueDate,
            returnDate: transaction.returnDate,
            totalRent: transaction.totalRent,
            status: transaction.status,
        };
    });

    const issuedBooks = await Promise.all(issuedBooksPromises);

    return res.status(200).json(new ApiResponse(200,issuedBooks))

})


const getBookIssuedInDateRange = asyncHandler(async(req,res)=>{
    const { start, end } = req.query;

    if (Array.isArray(start) || Array.isArray(end)) {
        res.status(400).json({ message: 'Invalid start or date: expected a single string' });
        return;
    }

    if (typeof start !== 'string' || typeof end !== 'string' ) {
        res.status(400).json({ message: 'Invalid start or end date' });
        return;
    }

    if (!start || !end) {
        return res.status(400).json({ message: 'Please provide both start and end dates.' });
    }
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return res.status(400).json({ message: 'Invalid date format. Please use yyyy-mm-dd format.' });
    }

    const transactions = await Transaction.find({
        issueDate: {
            $gte: startDate,
            $lte: endDate,
        },
    });

    if (transactions.length === 0) {
        return res.status(404).json({ message: 'No transactions found in the given date range.' });
    }

    const issuedBooksPromises = transactions.map(async (transaction) => {
        const book = await Book.findOne({bookId:transaction.bookId}); 
        
        return {
            transactionId: transaction._id,
            bookId: transaction.bookId,
            bookName: book ? book.bookName : 'Unknown', // Fallback if the book is not found
            issueDate: transaction.issueDate,
            returnDate: transaction.returnDate,
            totalRent: transaction.totalRent,
            status: transaction.status,
        };
    });

    const issuedBooks = await Promise.all(issuedBooksPromises);

    return res.status(200).json(new ApiResponse(200,issuedBooks))


})

export {issueBook,returnBook,getTransactionsByBookName,totalRent,getBookIssuedToUser,getBookIssuedInDateRange}