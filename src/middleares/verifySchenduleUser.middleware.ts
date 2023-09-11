import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepository } from "../repository";
import { AppError } from "../errors/App.Error";

const verifySchendulesUserMiddleare = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId, realEstateId, date, hour } = req.body;

  const schendule: Schedule | null = await scheduleRepository.findOne({
    where: { user: { id: userId }, date, hour },
  });

  if (schendule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  return next();
};

export {verifySchendulesUserMiddleare}
