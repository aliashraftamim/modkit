/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { goodService } from "./good.service";

const createGood = catchAsync(async (req: Request, res: Response) => {
  const result = await goodService.createGood(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Good created successfully",
    data: result,
  });
});

const getAllGood = catchAsync(async (req: Request, res: Response) => {
  const result = await goodService.getAllGood();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Goods retrieved successfully",
    data: result,
  });
});

const getGoodById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await goodService.getGoodById(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Good not found",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Good retrieved successfully",
    data: result,
  });
});

const updateGood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await goodService.updateGood(id, updateData);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Good not found to update",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Good updated successfully",
    data: result,
  });
});

const softDeleteGood = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await goodService.softDeleteGood(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Good not found to delete",
      data: undefined,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Good deleted successfully",
    data: result,
  });
});

export const good_controller = {
  createGood,
  getAllGood,
  getGoodById,
  updateGood,
  softDeleteGood,
};
