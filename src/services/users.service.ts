import { User } from "../entities/index";
import { UserCreate, UserRead, UserResult, UserUpdate } from "../interfaces";
import { userRepository } from "../repository";
import { resultUserSchema } from "../schemas";

const createUser = async (body: UserCreate): Promise<UserResult> => {
 
  const user: User = userRepository.create(body);
  const result = await userRepository.save(user);

  return resultUserSchema.parse(result);
};

const readUser = async (): Promise<UserRead> => {
  const users: UserRead = await userRepository.find();
  return users;
};

const updateUser = async (
  user: User,
  body: UserUpdate
): Promise<UserResult> => {

  const update = resultUserSchema.parse(
    await userRepository.save({ ...user, ...body })
  );
  return update;
};

const deletUser = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export { createUser, readUser, updateUser, deletUser };
