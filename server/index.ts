import express from "express"
import "dotenv/config";
import connectDB from "./db.ts";
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json())

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})