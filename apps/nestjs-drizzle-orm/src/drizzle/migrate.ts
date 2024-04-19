import 'dotenv/config';

import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Client } from 'pg';

export async function drizzleMigrate() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL!,
  });
  await client.connect();
  await migrate(drizzle(client, { logger: true }), {
    migrationsFolder: './src/drizzle/migrations',
  });
  await client.end();
}

drizzleMigrate();
