/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { tammuService } from "./tammu.service";

const createTammu = catchAsync(async (req: Request, res: Response) => {
  const result = await tammuService.createTammu(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Tammu created successfully",
    data: result,
  });
});

const getAllTammu = catchAsync(async (req: Request, res: Response) => {
  const result = await tammuService.getAllTammu();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tammus retrieved successfully",
    data: result,
  });
});

const getTammuById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await tammuService.getTammuById(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tammu not found",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tammu retrieved successfully",
    data: result,
  });
});

const updateTammu = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await tammuService.updateTammu(id, updateData);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tammu not found to update",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tammu updated successfully",
    data: result,
  });
});

const softDeleteTammu = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await tammuService.softDeleteTammu(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tammu not found to delete",
      data: undefined,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tammu deleted successfully",
    data: result,
  });
});

export const tammu_controller = {
  createTammu,
  getAllTammu,
  getTammuById,
  updateTammu,
  softDeleteTammu,
};
