import { timestamp, pgTable, varchar, numeric } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const vendors = pgTable("Vendor", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  date: timestamp("date").defaultNow(),
  email: varchar("email", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  photo: varchar("photo", { length: 255 }),
});

export const vendorRelations = relations(vendors, ({ many }) => ({
  products: many(products),
}));

export const products = pgTable("Product", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  date: timestamp("created_at").defaultNow(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  vendorId: varchar("vendorId", { length: 255 })
    .notNull()
    .references(() => vendors.id, { onDelete: "cascade" }),
  price: numeric("price").notNull(),
  photo: varchar("photo", { length: 255 }),
  stock: numeric("stock").notNull(),
  waitTimeInMinutes: numeric("waitTimeInMinutes"),
});

export const productsRelation = relations(products, ({ one }) => ({
  vendor: one(vendors, {
    fields: [products.vendorId],
    references: [vendors.id],
  }),
}));
