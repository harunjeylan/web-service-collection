import { Injectable } from '@nestjs/common';
import { DrizzleService } from './drizzle/drizzle.service';
import { AddressTable, UserTable } from './drizzle/schema';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { asc } from 'drizzle-orm';

const insertUserSchema = createInsertSchema(UserTable, {
  email: (schema) => schema.email.email(),
});
const selectUserSchema = createSelectSchema(UserTable);

@Injectable()
export class AppService {
  constructor(private readonly dbService: DrizzleService) {}

  async getUsers() {

    const users = await this.dbService.db
      .select({
        name: UserTable.name,
      })
      .from(UserTable)
      .orderBy(asc(UserTable.name));

    return users;
  }

  async createUser(data: z.infer<typeof insertUserSchema>) {
    const userData = insertUserSchema.safeParse(data);

    if (!userData.success) {
      return userData.error;
    }
    const user = await this.dbService.db
      .insert(UserTable)
      .values(userData.data)
      .returning();

    return user;
  }
}
