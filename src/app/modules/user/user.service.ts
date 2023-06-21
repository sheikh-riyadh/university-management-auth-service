import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserID } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserID();
  user.id = id;
  if (!user.password) {
    user.password = config.default_user_password as string;
  }
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'Fail to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
