import { Inject, Injectable } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { PG_CONNECTION } from './drizzle.module';
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject(PG_CONNECTION)
    readonly db: ReturnType<typeof drizzle<typeof schema>>,
  ) {}
}
