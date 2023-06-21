import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(
    academicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  academicDepartmentController.createDepartment
);
router.get('/', academicDepartmentController.getAllDepartments);
router.get('/:id', academicDepartmentController.getSingleDepartment);
router.patch(
  '/:id',
  validateRequest(
    academicDepartmentValidation.updateAcademicDepartmentZodSchema
  ),
  academicDepartmentController.updateDepartment
);
router.delete('/:id', academicDepartmentController.deleteDepartment);

export const academicDepartmentRoutes = router;
