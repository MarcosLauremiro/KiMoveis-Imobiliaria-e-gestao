import { Request, Response } from "express";
import { ReadscheduleEstates, createSchendule } from "../services";

const createScheduleControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.id;
  await createSchendule(userId, req.body);
  return res.status(201).json({ message: "Schedule created" });
};

const ReadSchenduleControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstateSchendule = await ReadscheduleEstates(id);
  return res.status(200).json(realEstateSchendule);
};

export { createScheduleControler, ReadSchenduleControler };