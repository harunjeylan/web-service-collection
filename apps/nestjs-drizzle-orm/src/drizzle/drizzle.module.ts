import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { Client } from 'pg';

export const PG_CONNECTION = 'PG_CONNECTION';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const client = new Client({
          connectionString: config.get('DATABASE_URL'),
        });
        await client.connect();
        return drizzle(client, {
          schema,
          logger: config.get('NODE_ENV') !== 'production',
        });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule {}
