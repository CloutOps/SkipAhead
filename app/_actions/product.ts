"use server";

import { createId } from "@paralleldrive/cuid2";
import { db } from "../db";
import { products } from "../schema";
import { auth } from "@clerk/nextjs";
import { eq } from "drizzle-orm";

export const getProducts = async (vendorId: string) => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const productsByVendorId = await db.query.products.findMany({
    where: eq(products.vendorId, vendorId),
  });

  return productsByVendorId;
};

export const setVote = async (value: string, roomId: string) => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const upsertResult = await db
    .insert(products)
    .values({
      id: createId(),
      description: "saomething",
      vendorId: "userId",
      name: "value",
      price: 0,
      stock: 0,
      date: new Date(),
      photo: "",
      waitTimeInMinutes: 0,
    })
    .execute();

  const success = upsertResult.rowCount > 0;

  return success;
};
