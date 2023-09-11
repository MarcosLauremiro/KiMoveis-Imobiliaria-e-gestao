import { z } from "zod";
import { resultUserSchema } from './users.schemas';
import { categoryResultSchema } from './category.schemas';
import { addressSchema } from './addresses.schemas';

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
});

const createScheduleSchema = scheduleSchema
  .omit({ id: true })
  .extend({ realEstateId: z.number() });

const scheduleResultSchema = scheduleSchema.extend({
    user: resultUserSchema,
    category:categoryResultSchema,
    address:addressSchema
})

export { scheduleSchema, createScheduleSchema, scheduleResultSchema };