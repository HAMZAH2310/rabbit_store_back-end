import { Router } from "express";
import { addBook, getBooks } from "../controllers/controller.js";

const router = Router();

router.get("/", getBooks);
router.post("/", addBook);

export default router;