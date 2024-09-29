import { Router } from "express";
import { getBookIssuedInDateRange, getBookIssuedToUser, getTransactionsByBookName, issueBook, returnBook, totalRent } from "../controllers/transaction.controller";

const router = Router()


router.route("/issue").post(issueBook)
router.route("/return").post(returnBook)
router.route("/book").get(getTransactionsByBookName)
router.route("/total-rent").get(totalRent)
router.route("/user/:id").get(getBookIssuedToUser)
router.route("/date-range").get(getBookIssuedInDateRange)

export default router