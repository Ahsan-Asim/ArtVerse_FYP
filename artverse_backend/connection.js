const mongoose = require("mongoose");

async function connectMongoDb(url) {
    try {
        await mongoose.connect(url); // Removed deprecated options
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = {
    connectMongoDb
};
