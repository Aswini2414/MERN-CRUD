const Data = require("../models/DataSchema");


const addData = async (req, res) => {
    const { name, phone, email, hobbies } = req.body;
    try {
        if (!name || !phone || !email || !hobbies) {
            res.status(400).json({ message: "Please provide all the details" });
        }
        const preData = await Data.findOne({ email });
        if (preData) {
            res.status(400).json({ message: "Email already exists" });
        }
        const newData = await Data.create({ name, phone, email, hobbies });
        await newData.save();
        res.status(201).json(newData);

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = addData ;