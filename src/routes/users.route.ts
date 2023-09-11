import { Router } from "express";
import {
  verifyEmailMiddleare,
  verifyIdMiddleare,
  verifyPermissionMiddleare,
  verifyTokenMiddleware,
  verityBodyMiddleare,
} from "../middleares";
import { createUserSchema, updateUserSchema } from "../schemas";
import {
  createUserControler,
  deleteUserControler,
  readUsersControler,
  updateUserControler,
} from "../controller";

const usersRouter: Router = Router();

usersRouter.post(
  "",
  verityBodyMiddleare(createUserSchema),
  verifyEmailMiddleare,
  createUserControler,
);
usersRouter.get(
  "",
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  readUsersControler,
);
usersRouter.patch(
  "/:id",
  verityBodyMiddleare(updateUserSchema),
  verifyIdMiddleare,
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  updateUserControler
);
usersRouter.delete(
  "/:id",
  verifyIdMiddleare,
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  deleteUserControler,
);

export { usersRouter };
