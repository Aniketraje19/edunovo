import { Router } from "express";
import { getBooks,getBooksByName,filterBooksByRent,filterBooks } from "../controllers/book.controller";


const router = Router()

router.route("/").get(getBooks)
router.route("/search").get(getBooksByName)
router.route("/rent").get(filterBooksByRent)
router.route("/filter").get(filterBooks)


export default router