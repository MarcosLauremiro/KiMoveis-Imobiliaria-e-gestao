import { userSchema } from "./users.schemas";

const loginCreateSchema = userSchema.pick({
  email: true,
  password: true,
});

export { loginCreateSchema };