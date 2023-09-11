import { z } from "zod";
import { Category } from "../entities";
import { Repository } from "typeorm";
import { categoryCreateSchema, categoryResultSchema } from "../schemas";

type CategoryRepository = Repository<Category>;
type CategoryRead = Array<Category>;
type CategoryReturn = z.infer<typeof categoryResultSchema>;
type CategoryCreate = z.infer<typeof categoryCreateSchema>;

export {
  CategoryRepository,
  CategoryRead,
  CategoryReturn,
  CategoryCreate,
};
