import dotenv from 'dotenv'
dotenv.config()

import express from "express";
const app = express();

(async () => await connection())();

app.use(express.json());

app.use("/api/user", user);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
