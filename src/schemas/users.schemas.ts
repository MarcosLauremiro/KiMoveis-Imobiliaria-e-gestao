import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45).nonempty(),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.date().nullable().or(z.string()),
});

const createUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const resultUserSchema = userSchema.omit({
  password: true,
});
const userOmitAdm = userSchema.omit({
  admin: true,
});
const updateUserSchema = userSchema.omit({ id: true, admin: true }).partial();

export {
  userSchema,
  createUserSchema,
  resultUserSchema,
  userOmitAdm,
  updateUserSchema,
};
