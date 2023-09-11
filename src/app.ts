import "reflect-metadata";
import "express-async-errors";
import express from "express";
import {
  categoryRoute,
  loginRoute,
  realEstateRoute,
  schendulesRoute,
  usersRouter,
} from "./routes";
import { handleErrors } from "./middleares";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/login", loginRoute);
app.use("/categories", categoryRoute);
app.use("/realEstate", realEstateRoute);
app.use("/schedules", schendulesRoute);

app.use(handleErrors);

export default app;
