import { Router } from "express";
import {
  verifyPermissionADMMiddleare,
  verifyPermissionMiddleare,
  verifyScheduleIdUser,
  verifySchendulesMiddleare,
  verifySchendulesUserMiddleare,
  verifyTokenMiddleware,
  verityBodyMiddleare,
} from "../middleares";
import { createScheduleSchema } from "../schemas";
import { ReadSchenduleControler, createScheduleControler } from "../controller";

const schendulesRoute: Router = Router();

schendulesRoute.post(
  "",
  verifyTokenMiddleware,
  verityBodyMiddleare(createScheduleSchema),
  verifySchendulesMiddleare,
  verifySchendulesUserMiddleare,
  verifyScheduleIdUser,
  createScheduleControler
);

schendulesRoute.get(
  "/realEstate/:id",
  verifyTokenMiddleware,
  verifyPermissionADMMiddleare,
  ReadSchenduleControler
);

export { schendulesRoute };
