// backend/index.js
import express from "express";
import cors from "cors";
import { educationHistory, skills, projects } from "./data.js";
const app = express();
const PORT = 3000;
app.use(cors());

app.use(express.json());
app.get("/education", (req, res) => res.json(educationHistory));
app.get("/skills", (req, res) => res.json(skills));
app.get("/projects", (req, res) => res.json(projects));
app.listen(PORT, () => {
  console.log(` Server backend berjalan di http://localhost:${PORT}`);
});