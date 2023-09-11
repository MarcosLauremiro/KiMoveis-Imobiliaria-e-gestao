import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entities";
import { scheduleRepository } from "../repository";
import { AppError } from "../errors/App.Error";

const verifySchendulesMiddleare = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour, realEstateId } = req.body;

  const verify: Schedule | null = await scheduleRepository.findOne({
    where: { realEstate: { id: realEstateId }, date, hour },
  });

  if (verify) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export {verifySchendulesMiddleare}