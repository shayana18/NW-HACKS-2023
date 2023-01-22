import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6001;
try {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
} catch (err) {
    console.log(err.message);
}