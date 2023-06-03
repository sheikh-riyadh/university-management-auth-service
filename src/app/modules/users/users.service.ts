import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generateUserID } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserID()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Fail to create user')
  }
  return createdUser
}

export default {
  createUser,
}
