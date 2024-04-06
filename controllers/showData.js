const Data = require("../models/DataSchema");

const showData = async (req, res) => {
    try {
        const completeData = await Data.find();
        res.status(200).json(completeData);
        
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = showData;