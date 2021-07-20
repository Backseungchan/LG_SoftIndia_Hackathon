import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import dataRoutes from "./routes/data.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/data", dataRoutes);

app.get("/", (req, res) => {
  res.send("Server running...");
});

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running or port: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);