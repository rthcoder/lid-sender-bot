import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
    origin: "*"
}));

import botRouter from "./routes/route.js";

app.use(botRouter);

app.listen(PORT, () => console.log(`🚀 BackEnd server is running http://localhost:` + PORT));