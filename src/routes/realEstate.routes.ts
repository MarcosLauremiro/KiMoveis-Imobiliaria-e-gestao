import { Router } from "express";
import {
  verifyAddress,
  verifyPermissionMiddleare,
  verifyTokenMiddleware,
  verityBodyMiddleare,
} from "../middleares";
import { createRealEstateSchema } from "../schemas";
import {
  ReadRealEstateControler,
  createRealEstateControler,
} from "../controller";

const realEstateRoute: Router = Router();

realEstateRoute.post(
  "",
  verifyTokenMiddleware,
  verifyPermissionMiddleare,
  verityBodyMiddleare(createRealEstateSchema),
  verifyAddress,
  createRealEstateControler
);

realEstateRoute.get("", ReadRealEstateControler);

export { realEstateRoute };
