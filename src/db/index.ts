import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);

export const testConnection = async () => {
    try {
        const result = await pool.query('SELECT 1');
        console.log(`✅ DATABASE CONNECTED SUCCESSFULLY! Result:`, result.rows);
    } catch (error) {
        console.error('❌ Database connection failed:', error);
        throw error;
    }
}