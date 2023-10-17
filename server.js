import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// configure env
dotenv.config();
// rest object
const app = express();
// rest api
app.get("/", (req,res) => {
    res.send("<h1>Welcome to Ecommerce app</h1>")
});

// port
const PORT= process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(
        `server Running on ${process.env.DEV_MODE} mode on port${PORT}`.bgCyan.white);
});