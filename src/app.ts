import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import BookRouter from "./routes/book.routes";
import UserRouter from "./routes/user.routes"
import TransactionRouter from "./routes/transaction.routes"
import { User } from "./models/user.model";
const app: Express = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN as string,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());


app.get('/', (req, res) => {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Routes Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            overflow-x: auto;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <h1>API Routes Documentation</h1>

    <h2>Books Routes</h2>
    <ul>
        <li>
            <strong>Get All Books</strong><br>
            <pre>Endpoint: GET /books</pre>
            <p>Description: Retrieves a list of all books.</p>
        </li>
        <li>
            <strong>Search Books by Name</strong><br>
            <pre>Endpoint: GET /books/search</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>name:</strong> The name of the book to search for.</li>
            </ul>
        </li>
        <li>
            <strong>Filter Books by Rent</strong><br>
            <pre>Endpoint: GET /books/rent</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>min:</strong> Minimum rent value.</li>
                <li><strong>max:</strong> Maximum rent value.</li>
            </ul>
        </li>
        <li>
            <strong>Filter Books</strong><br>
            <pre>Endpoint: GET /books/filter</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>category:</strong> Category of the book.</li>
                <li><strong>name:</strong> Name of the book.</li>
                <li><strong>min:</strong> Minimum price.</li>
                <li><strong>max:</strong> Maximum price.</li>
            </ul>
        </li>
        <li>
            <strong>Issue a Book</strong><br>
            <pre>Endpoint: POST /books/issue</pre>
            <p>Request Body:</p>
            <ul>
                <li><strong>bookId:</strong> ID of the book to issue.</li>
                <li><strong>userId:</strong> ID of the user to whom the book is issued.</li>
                <li><strong>issueDate:</strong> Date when the book is issued.</li>
            </ul>
        </li>
        <li>
            <strong>Return a Book</strong><br>
            <pre>Endpoint: POST /books/return</pre>
            <p>Request Body:</p>
            <ul>
                <li><strong>bookId:</strong> ID of the book to return.</li>
                <li><strong>userId:</strong> ID of the user returning the book.</li>
                <li><strong>returnDate:</strong> Date when the book is returned.</li>
            </ul>
        </li>
        <li>
            <strong>Get Transactions by Book Name</strong><br>
            <pre>Endpoint: GET /books/book</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>name:</strong> The name of the book to get transactions for.</li>
            </ul>
        </li>
        <li>
            <strong>Get Total Rent</strong><br>
            <pre>Endpoint: GET /books/total-rent</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>name:</strong> The name of the book to calculate total rent.</li>
            </ul>
        </li>
        <li>
            <strong>Get Books Issued to a User</strong><br>
            <pre>Endpoint: GET /books/user/:id</pre>
            <p>URL Parameters:</p>
            <ul>
                <li><strong>id:</strong> ID of the user to get issued books for.</li>
            </ul>
        </li>
        <li>
            <strong>Get Books Issued in a Date Range</strong><br>
            <pre>Endpoint: GET /books/date-range</pre>
            <p>Query Parameters:</p>
            <ul>
                <li><strong>start:</strong> Start date of the range.</li>
                <li><strong>end:</strong> End date of the range.</li>
            </ul>
        </li>
    </ul>

    <h2>User Routes</h2>
    <ul>
        <li>
            <strong>Get All Users</strong><br>
            <pre>Endpoint: GET /users</pre>
            <p>Description: Retrieves a list of all users.</p>
        </li>
        <li>
            <strong>Get User by ID</strong><br>
            <pre>Endpoint: GET /users/:id</pre>
            <p>URL Parameters:</p>
            <ul>
                <li><strong>id:</strong> ID of the user to retrieve.</li>
            </ul>
        </li>
    </ul>

</body>
</html>
`

  res.send(content)

})


app.use("/book",BookRouter)
app.use("/user",UserRouter)
app.use("/transaction",TransactionRouter)

export { app };
