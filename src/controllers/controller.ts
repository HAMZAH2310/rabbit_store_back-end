import type { Request, Response } from "express";
import { createBooks, getAllBooks } from "../services/service.js";

export const getBooks = async (req: Request, res: Response) => {
    try {
        const data = await getAllBooks();
        res.json(data);

    } catch (error) {
        res.status(500).json({
            message: "Failed to get Books",
            error
        })
    }
}


export const addBook = async (req: Request, res: Response) => {
    try {
        const { title, author, price, image_url, description, stock } = req.body;

        // Validation - ensure required fields are present
        if (!title || !author || price === undefined) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: title, author, and price are mandatory.",
            });
        }

        const newBook = await createBooks({
            title,
            author,
            price,
            image_url,
            description,
            stock,
        });

        res.status(201).json({
            success: true,
            message: "Book added successfully",
            data: newBook,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add book",
            error: error,
        });
    }
}