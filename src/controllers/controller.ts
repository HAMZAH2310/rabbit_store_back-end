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
        const { title, author, price, image, description, stock } = req.body;

        const newBook = createBooks({
            title,
            author,
            price,
            image,
            description,
            stock,
        });

        if (!title || !author || !price) {
            return res.status(400).json({
                success: false,
                message: "Title, Author, and Price are required",
            });
        }

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