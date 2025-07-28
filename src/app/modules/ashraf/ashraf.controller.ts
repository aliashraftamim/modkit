/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { ashraf_service } from "./ashraf.service";

const createAshraf = catchAsync(async (req: Request, res: Response) => {
  const result = await ashraf_service.createAshraf(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Ashraf created successfully",
    data: result,
  });
});

const getAllAshraf = catchAsync(async (req: Request, res: Response) => {
  const result = await ashraf_service.getAllAshraf(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ashrafs retrieved successfully",
    data: result,
  });
});

const getAshrafById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ashraf_service.getAshrafById(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Ashraf not found",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ashraf retrieved successfully",
    data: result,
  });
});

const updateAshraf = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await ashraf_service.updateAshraf(id, updateData);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Ashraf not found to update",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ashraf updated successfully",
    data: result,
  });
});

const softDeleteAshraf = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ashraf_service.softDeleteAshraf(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Ashraf not found to delete",
      data: undefined,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Ashraf deleted successfully",
    data: result,
  });
});

export const ashraf_controller = {
  createAshraf,
  getAllAshraf,
  getAshrafById,
  updateAshraf,
  softDeleteAshraf,
};
