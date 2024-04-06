const express = require("express");
const addData = require("../controllers/addData");
const showData = require("../controllers/showData");
const sendData = require("../controllers/sendData");
const updateData = require("../controllers/updateData");
const deleteData = require("../controllers/deleteData");

const router = express.Router();

router.post("/api/addData", addData);
router.get("/api/showData", showData);
router.post("/api/sendData", sendData);
router.post("/api/updateData", updateData);
router.delete("/api/deleteData/:id", deleteData);


module.exports = router;