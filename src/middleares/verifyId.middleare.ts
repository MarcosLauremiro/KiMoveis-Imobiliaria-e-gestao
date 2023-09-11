import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repository";
import { AppError } from "../errors/App.Error";

const verifyIdMiddleare = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser: User | null = await userRepository.findOne({
    where: { id: Number(req.params.id) },
  });

  if (!idUser) {
    throw new AppError("User not found", 404);
  }

  res.locals = {
    ...res.locals,
    idUser,
  };

  return next();
};

export { verifyIdMiddleare };
