import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressesRepository } from "../repository";
import { AppError } from "../errors/App.Error";

const verifyAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { zipCode, street, number, state, city } = req.body.address;

  const verify: Address | null = await addressesRepository.findOne({
    where: { zipCode, street, number, state, city },
  });

  if (!verify) {
    return next();
  }

  if (verify) {
    throw new AppError("Address already exists", 409);
  }
};

export {verifyAddress}
