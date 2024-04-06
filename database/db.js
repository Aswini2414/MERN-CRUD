const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log(`Error while connecting with database: ${error}`);
    }
}
module.exports = connection;