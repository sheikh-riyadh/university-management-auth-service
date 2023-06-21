import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academisSemester.validation';
import { academicSemesterServiceController } from './academicSemester.controller';

const route = express.Router();

route.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  academicSemesterServiceController.createSemester
);

route.get('/', academicSemesterServiceController.getAllSemesters);

route.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  academicSemesterServiceController.updateSemester
);

route.delete('/:id', academicSemesterServiceController.deleteSemester);
route.get('/:id', academicSemesterServiceController.getSingleSemester);

export const academicSemesterRoutes = route;
