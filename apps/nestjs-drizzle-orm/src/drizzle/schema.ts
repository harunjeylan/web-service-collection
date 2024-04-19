import {
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const userRole = pgEnum('userRole', ['ADMIN', 'USER']);

export const UserTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 28 }).notNull(),
  age: integer('age').notNull(),
  email: varchar('email', { length: 28 }).notNull().unique(),
  password: varchar('password', { length: 100 }).notNull(),
  role: userRole('role').default('ADMIN').notNull(),
});

export const AddressTable = pgTable('address', {
  id: serial('id').primaryKey(),
  state: varchar('state', { length: 28 }).notNull(),
  city: varchar('city', { length: 28 }).notNull(),
  street: varchar('street', { length: 28 }),
  userId: integer('userId')
    .references(() => UserTable.id, { onDelete: 'cascade' })
    .notNull()
});

export const PostTable = pgTable('post', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  authorId: integer('authorId')
    .references(() => UserTable.id)
    .notNull(),
});

export const CategoryTable = pgTable('category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 48 }).notNull(),
});

export const PostCategoryTable = pgTable(
  'postCategory',
  {
    postId: integer('postId')
      .references(() => PostTable.id)
      .notNull(),
    categoryId: integer('categoryId')
      .references(() => CategoryTable.id)
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.categoryId, table.postId] }),
    };
  },
);
