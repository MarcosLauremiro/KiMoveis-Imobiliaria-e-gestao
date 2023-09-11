import { z } from "zod";
import { addressSchema, createAddressSchema } from './addresses.schemas';

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
});

const createRealEstateSchema = realEstateSchema
  .omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
  .extend({ categoryId: z.number(), address: createAddressSchema });

  export { createRealEstateSchema, realEstateSchema };
