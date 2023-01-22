import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

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

const compResume = (req, res) => {
    try {
        const content = fs.readFileSync("../resume.txt").toString().split("\n");
        console.log(content);
        for (let i = 0; i < content.length; i++) {
            const split = content[i].split(":");
            if (split[0] === "Languages") {
                const splitSkills = split[1];
                const skills = splitSkills.split("•");
                res.status(200).json(skills);
            }
        }
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

app.get("/resume/compare", compResume);

