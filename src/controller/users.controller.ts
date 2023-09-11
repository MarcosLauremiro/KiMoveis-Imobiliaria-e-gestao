import { Request, Response } from "express";
import { createUser, deletUser, readUser, updateUser } from "../services";
import { User } from "../entities";
import { resultUserSchema } from "../schemas";
import { UserResult } from "../interfaces";

const createUserControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201).json(await createUser(req.body));
};

const readUsersControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = (user: User) => {
    return resultUserSchema.parse(user);
  };
  const readUsers = (await readUser()).map(users);
  return res.status(200).json(readUsers);
};

const updateUserControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const update: UserResult = await updateUser(res.locals.idUser, req.body);
  return res.status(200).json(update);
};

const deleteUserControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deletUser(res.locals.idUser);
  return res.status(204).json();
};

export {
  createUserControler,
  readUsersControler,
  updateUserControler,
  deleteUserControler,
};
