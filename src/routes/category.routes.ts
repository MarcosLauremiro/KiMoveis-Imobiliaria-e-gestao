import { Router } from "express";
import {
  verifyIdCategoryMiddleare,
  verifyNameCategoryMiddleware,
  verifyPermissionMiddleare,
  verifyTokenMiddleware,
} from "../middleares";
import { categoryIdControler, createCategoryControler, readCreategoryControler } from "../controller";
import { readCategory } from "../services";

const categoryRoute: Router = Router();

categoryRoute.post(
  "",
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  verifyNameCategoryMiddleware,
  createCategoryControler
);
categoryRoute.get("", readCreategoryControler);
categoryRoute.get(
  "/:id/realEstate",
  verifyIdCategoryMiddleare,
  categoryIdControler
);

export { categoryRoute };
