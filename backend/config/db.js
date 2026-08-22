const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    if (process.env.MONGO_URL) {
        try {
            console.log("Attempting connection to configured MongoDB...");
            await mongoose.connect(process.env.MONGO_URL, {
                serverSelectionTimeoutMS: 4000,
            });
            console.log("✅ MongoDB Connected to provided MONGO_URL");
            return;
        } catch (error) {
            console.warn("⚠️ Configured MongoDB connection failed:", error.message);
            console.log("🔄 Starting local in-memory MongoDB server as fallback for localhost...");
        }
    }

    try {
        const { MongoMemoryServer } = require("mongodb-memory-server");
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose.connect(uri);
        console.log("✅ In-Memory MongoDB Connected at", uri);
    } catch (fallbackError) {
        console.error("❌ MongoDB Connection Failed:", fallbackError.message);
        process.exit(1);
    }
};

module.exports = connectDB;