/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { tamim_service } from "./tamim.service";

const createTamim = catchAsync(async (req: Request, res: Response) => {
  const result = await tamim_service.createTamim(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Tamim created successfully",
    data: result,
  });
});

const getAllTamim = catchAsync(async (req: Request, res: Response) => {
  const result = await tamim_service.getAllTamim(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tamims retrieved successfully",
    data: result,
  });
});

const getTamimById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await tamim_service.getTamimById(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tamim not found",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tamim retrieved successfully",
    data: result,
  });
});

const updateTamim = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await tamim_service.updateTamim(id, updateData);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tamim not found to update",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tamim updated successfully",
    data: result,
  });
});

const softDeleteTamim = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await tamim_service.softDeleteTamim(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Tamim not found to delete",
      data: undefined,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Tamim deleted successfully",
    data: result,
  });
});

export const tamim_controller = {
  createTamim,
  getAllTamim,
  getTamimById,
  updateTamim,
  softDeleteTamim,
};
