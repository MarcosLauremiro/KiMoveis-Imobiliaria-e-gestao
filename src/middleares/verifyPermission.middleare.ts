import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/App.Error";

const verifyPermissionMiddleare = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { sub, admin } = res.locals.decoded;

  if (admin) {
    return next();
  }

  if (id !== sub) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

const verifyPermissionADMMiddleare = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { id } = req.params;
  const { sub, admin } = res.locals.decoded;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { verifyPermissionMiddleare, verifyPermissionADMMiddleare };
