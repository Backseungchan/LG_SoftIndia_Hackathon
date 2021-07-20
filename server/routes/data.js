import express from "express";
import { createData, deleteData, getData } from "../controllers/data.js";

const router = express.Router();

router.get('/', getData);

router.post('/', createData);

router.delete('/:id', deleteData);

export default router;