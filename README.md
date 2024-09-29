# edunovo
Edunova Fullstack Development Internship assignment

# API Documentation

## Books Routes

1. **Get All Books**
   - **Endpoint:** `GET /books`
   - **Description:** Retrieves a list of all books.

2. **Search Books by Name**
   - **Endpoint:** `GET /books/search`
   - **Query Parameters:**
     - `name`: The name of the book to search for.

3. **Filter Books by Rent**
   - **Endpoint:** `GET /books/rent`
   - **Query Parameters:**
     - `min`: Minimum rent value.
     - `max`: Maximum rent value.

4. **Filter Books**
   - **Endpoint:** `GET /books/filter`
   - **Query Parameters:**
     - `category`: Category of the book.
     - `name`: Name of the book.
     - `min`: Minimum price.
     - `max`: Maximum price.

## Transaction Routes

5. **Issue a Book**
   - **Endpoint:** `POST /books/issue`
   - **Request Body:**
     - `bookId`: ID of the book to issue.
     - `userId`: ID of the user to whom the book is issued.
     - `issueDate`: Date when the book is issued.

6. **Return a Book**
   - **Endpoint:** `POST /books/return`
   - **Request Body:**
     - `bookId`: ID of the book to return.
     - `userId`: ID of the user returning the book.
     - `returnDate`: Date when the book is returned.

7. **Get Transactions by Book Name**
   - **Endpoint:** `GET /books/book`
   - **Query Parameters:**
     - `name`: The name of the book to get transactions for.

8. **Get Total Rent**
   - **Endpoint:** `GET /books/total-rent`
   - **Query Parameters:**
     - `name`: The name of the book to calculate total rent.

9. **Get Books Issued to a User**
   - **Endpoint:** `GET /books/user/:id`
   - **URL Parameters:**
     - `id`: ID of the user to get issued books for.

10. **Get Books Issued in a Date Range**
    - **Endpoint:** `GET /books/date-range`
    - **Query Parameters:**
      - `start`: Start date of the range.
      - `end`: End date of the range.

## User Routes

11. **Get All Users**
    - **Endpoint:** `GET /users`
    - **Description:** Retrieves a list of all users.

12. **Get User by ID**
    - **Endpoint:** `GET /users/:id`
    - **URL Parameters:**
      - `id`: ID of the user to retrieve.
