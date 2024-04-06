const Data = require("../models/DataSchema");

const deleteData = async (req, res) => {
    const { id} = req.params;
    console.log(id);

    try {
        const deleteData = await Data.deleteOne({ _id: id });
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(400).json(error.message);
    }

}

module.exports = deleteData;