import { Request, Response } from 'express'
import usersService from './users.service'

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      sucess: true as boolean,
      message: 'User created sucessfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      sucess: false as boolean,
      message: 'Failed to create user' as string,
    })
  }
}
