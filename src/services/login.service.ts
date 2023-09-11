import { compareSync } from "bcryptjs";
import { User } from "../entities";
import { AppError } from "../errors/App.Error";
import { LoginReturn, UserCreate } from "../interfaces";
import { userRepository } from "../repository";
import { sign } from "jsonwebtoken";

const loginUser = async (loginBody: UserCreate): Promise<LoginReturn> => {
  const user: User | null = await userRepository.findOne({
    where: { email: loginBody.email },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passordValid: boolean = compareSync(loginBody.password, user.password);

  if (!passordValid) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = sign(
    { userName: user.name, admin: user.admin },
    process.env.SECRET_KEY!,
    {
      subject: user.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    }
  );

  return { token };
};

export { loginUser };
