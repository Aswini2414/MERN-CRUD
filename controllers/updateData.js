const Data = require("../models/DataSchema");

const updateData = async (req, res) => {
    const { name, phone, email, hobbies } = req.body;
    try {
        if (!name || !phone || !email || !hobbies) {
            res.status(400).json({ message: "Invalid Data" });
        }

        const preData = await Data.findOne({ email });
        if (preData) {
            const updatedData = await Data.findByIdAndUpdate({_id:preData._id},{name,phone,email,hobbies},{new:true});
            await updatedData.save();
            res.status(200).json(updatedData);
        }
        
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = updateData;