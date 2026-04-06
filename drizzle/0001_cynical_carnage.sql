ALTER TABLE "books" RENAME COLUMN "image" TO "image_url";--> statement-breakpoint
ALTER TABLE "books" ADD COLUMN "stock" integer DEFAULT 0 NOT NULL;