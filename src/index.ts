
import dotenv from "dotenv";
import connectDB from "./db/index"
import {app} from "./app"

dotenv.config({
    path:"./.env"
})

const port = process.env.PORT || 8000

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at Port : ${port}`)
    })
})
.catch((error) => {
    console.error(`MongDB connection failed! : ${error}`)
})