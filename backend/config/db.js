const mongoose = require("mongoose");
require("dotenv").config(); // This loads the variables from your .env file

const connectDB = async () => {
    try {
        // Now uses the URL from your .env file
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;