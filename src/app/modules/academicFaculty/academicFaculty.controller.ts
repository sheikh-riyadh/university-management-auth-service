import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { academicFacultyFilterableFields } from './academicFaculty.constant';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicFaculty } from './academicFaculty.interface';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body;
  const result = await AcademicFacultyService.createFaculty(
    academicFacultyData
  );

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    sucess: true,
    message: 'Faculty created successfully',
    data: result,
  });
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicFacultyService.getAllFaculties(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    sucess: true,
    message: 'Faculty retrieved success',
    meta: result?.meta,
    data: result?.data,
  });
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.getSingleFaculty(id);
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    sucess: true,
    message: 'Faculty retrieved success',
    data: result,
  });
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await AcademicFacultyService.updateFaculty(id, updatedData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    sucess: true,
    message: 'Faculty update successfully',
    data: result,
  });
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicFacultyService.deleteFaculty(id);
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    sucess: true,
    message: 'Faculty deleted successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
};
