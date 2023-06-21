import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const route = express.Router();

route.post(
  '/create-user',
  validateRequest(UserValidation.createdUserZodSchema),
  UserController.createUser
);

export const UserRoutes = route;
