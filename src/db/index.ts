import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log(`\n\nMongoDB connected!\nDB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection failed! : ${error}`);
        process.exit(1);
    }
};

export default connectDB;
