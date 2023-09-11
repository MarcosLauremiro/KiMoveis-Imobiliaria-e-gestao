import { Request, Response } from "express";
import { ReadRealEstates, createRealState } from "../services";
import { ReadRealEstate } from "../interfaces";
import { RealEstate } from "../entities";

const createRealEstateControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstate: RealEstate = await createRealState(req.body);

  return res.status(201).json(realEstate);
};

const ReadRealEstateControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const read: ReadRealEstate = await ReadRealEstates();

  return res.status(200).json(read);
};

export { createRealEstateControler, ReadRealEstateControler };
