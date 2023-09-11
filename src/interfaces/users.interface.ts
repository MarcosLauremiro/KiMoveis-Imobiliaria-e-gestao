import { z } from "zod";
import { resultUserSchema, createUserSchema, userOmitAdm } from "../schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type UserReturnCreate = DeepPartial<User>;

type UserCreate = z.infer<typeof createUserSchema>;
type UserRead = Array<User>;
type UserRepositoy = Repository<User>;
type UserUpdate = DeepPartial<User>;
type UserResult = z.infer<typeof resultUserSchema>;
type UserAdmOmit = z.infer<typeof userOmitAdm>;


export { UserCreate, UserRepositoy, UserReturnCreate, UserRead, UserUpdate, UserResult, UserAdmOmit };
