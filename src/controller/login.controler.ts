import { Request, Response } from "express";
import { LoginReturn } from "../interfaces";
import { loginUser } from "../services";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: LoginReturn = await loginUser(req.body);

  return res.status(200).json(token);
};

export {loginController}