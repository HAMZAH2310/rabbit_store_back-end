import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});

export const books = pgTable("books", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    price: integer("price").notNull(),
    image_url: text("image_url"),
    stock: integer("stock").notNull().default(0),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow(),
});
