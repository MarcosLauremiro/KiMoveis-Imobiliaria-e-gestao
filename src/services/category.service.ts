import { Category } from "../entities";
import { CategoryCreate, CategoryRead, CategoryReturn } from "../interfaces";
import { categoryRespository } from "../repository";

const createCategory = async (
  body: CategoryCreate
): Promise<CategoryReturn> => {
  const category: Category = categoryRespository.create(body);
  return await categoryRespository.save(category);
};

const readCategory = async (): Promise<CategoryRead> => {
  return await categoryRespository.find();
};

const categoryId = async (category: Category): Promise<Category | null> => {
  const categoryForId: Category | null = await categoryRespository.findOne({
    where: { id: category.id }, 
    relations: { realEstate: true },
  });

  return categoryForId;
};

export { createCategory, readCategory, categoryId };
