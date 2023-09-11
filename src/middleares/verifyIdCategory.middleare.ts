import { Category } from "../entities";
import { AppError } from "../errors/App.Error";
import { categoryRespository } from "../repository";
import { NextFunction, Request, Response } from "express";

const verifyIdCategoryMiddleare = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const category: Category | null = await categoryRespository.findOneBy({
    id: Number(req.params.id),
  });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  res.locals = { ...res.locals, category };
  return next();
};

export {verifyIdCategoryMiddleare}
