import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.Error";

const verifyScheduleIdUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userId = res.locals.decoded.sub;

  if (userId !== res.locals.decoded.sub) {
    throw new AppError("Permissão insuficiente", 403);
  }

  res.locals.id = Number(userId);

  return next();
};

export { verifyScheduleIdUser };	
