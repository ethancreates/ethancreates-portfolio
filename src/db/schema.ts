import { pgEnum, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserRoles = pgEnum("UserRoles", ["ADMIN", "BASIC"]);

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  role: UserRoles("UserRoles").default("BASIC").notNull(),
});
