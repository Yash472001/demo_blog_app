const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./db/connectTodb");
const config = require("./config/development.json");
const router = require("./routes/index");


const PORT = config.PORT || 8080;
const FRONTEND_URL = config.FRONTEND_URL;

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.use(router);

app.listen(PORT,() => {
    console.log(`Started Running On Port No: ${PORT}`);
    connectToDb();
})