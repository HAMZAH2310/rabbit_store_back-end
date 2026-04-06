import { db } from "../db/index.js"
import { books } from "../db/schema.js"

export const getAllBooks = async () => {
    return await db.select().from(books);
};

export const createBooks = async (data: {
    title: string,
    author: string,
    price: number,
    image_url: string,
    description: string,
    stock: number,
}) => {
    return await db.insert(books).values(data);
}