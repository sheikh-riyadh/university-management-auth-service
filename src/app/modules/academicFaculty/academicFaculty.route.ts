import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { academicFacultyController } from './academicFaculty.controller';
const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  academicFacultyController.createFaculty
);
router.get('/', academicFacultyController.getAllFaculties);
router.get('/:id', academicFacultyController.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema)
);
router.delete('/:id', academicFacultyController.deleteFaculty);

export const academicFacultyRoutes = router;
