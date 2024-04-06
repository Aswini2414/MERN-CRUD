const express = require("express");
const connection = require("./database/db.js");
const cors = require("cors");
const router = require("./routes/route");


const app = express();
const PORT = 5000;

//middleware
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT, () => {
    connection();
    console.log(`Server is running on the port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("CRUD OPERATION APP");
})