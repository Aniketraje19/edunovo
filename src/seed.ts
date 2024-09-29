import mongoose from "mongoose";
import { Book } from "./models/book.model";
import { User } from "./models/user.model";
import { users,books } from "./data";
import * as dotenv from "dotenv";


dotenv.config({
    path:"./.env"
})


const seedDatabase = async () => {
    try {
        console.log('MongoDB URI:', process.env.MONGODB_URI); // Log the URI
        await mongoose.connect(process.env.MONGODB_URI as string);

        // Clear existing data
        await User.deleteMany({});
        await Book.deleteMany({});

        // Insert new data
        await User.insertMany(users);
        await Book.insertMany(books);

    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase()
.then(()=>console.log("Database seeded Successfully!"))
.catch(error => console.error('Seeding failed:', error));