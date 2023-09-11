import { z } from 'zod';

const categorySchema = z.object({
    id: z.number().positive(),
  name: z
    .string()
    .max(45, "String must contain at most 45 character(s)")
    .nonempty(),
})

const categoryCreateSchema = categorySchema.omit({id: true});
const categoryResultSchema = categoryCreateSchema

export {categorySchema, categoryCreateSchema, categoryResultSchema};