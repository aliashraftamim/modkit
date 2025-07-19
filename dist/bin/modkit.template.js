"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicTemplates = void 0;
exports.dynamicTemplates = {
    controller: `/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync, sendResponse } from "../utils/utils";
import { __CAMEL__Service } from "./__NAME__.service";

const create__PASCAL__ = catchAsync(async (req: Request, res: Response) => {
  const result = await __CAMEL__Service.create__PASCAL__(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "__PASCAL__ created successfully",
    data: result,
  });
});

const getAll__PASCAL__ = catchAsync(async (req: Request, res: Response) => {
  const result = await __CAMEL__Service.getAll__PASCAL__();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "__PASCAL__s retrieved successfully",
    data: result,
  });
});

const get__PASCAL__ById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await __CAMEL__Service.get__PASCAL__ById(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "__PASCAL__ not found",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "__PASCAL__ retrieved successfully",
    data: result,
  });
});

const update__PASCAL__ = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await __CAMEL__Service.update__PASCAL__(id, updateData);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "__PASCAL__ not found to update",
      data: result,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "__PASCAL__ updated successfully",
    data: result,
  });
});

const softDelete__PASCAL__ = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await __CAMEL__Service.softDelete__PASCAL__(id);
  if (!result) {
    return sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "__PASCAL__ not found to delete",
      data: undefined,
    });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "__PASCAL__ deleted successfully",
    data: result,
  });
});

export const __CAMEL___controller = {
  create__PASCAL__,
  getAll__PASCAL__,
  get__PASCAL__ById,
  update__PASCAL__,
  softDelete__PASCAL__,
};
`,
    interface: `export interface I__PASCAL__ {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
}
`,
    model: `import mongoose, { Schema } from "mongoose";
import { I__PASCAL__ } from "./__NAME__.interface";

const __PASCAL__Schema = new Schema<I__PASCAL__>(
  {
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const __PASCAL__Model = mongoose.model<I__PASCAL__>(
  "__PASCAL__",
  __PASCAL__Schema
);
`,
    route: `import { Router } from "express";
import { __CAMEL___controller } from "./__NAME__.controller";

const router = Router();

router.post("/", __CAMEL___controller.create__PASCAL__);
router.get("/", __CAMEL___controller.getAll__PASCAL__);
router.get("/:id", __CAMEL___controller.get__PASCAL__ById);
router.patch("/:id", __CAMEL___controller.update__PASCAL__);
router.delete("/:id", __CAMEL___controller.softDelete__PASCAL__);

export const __CAMEL__route = router;
`,
    service: `import mongoose from "mongoose";
import { I__PASCAL__ } from "./__NAME__.interface";
import { __PASCAL__Model } from "./__NAME__.model";

const create__PASCAL__ = async (payload: I__PASCAL__) => {
  return await __PASCAL__Model.create(payload);
};

const getAll__PASCAL__ = async () => {
  return await __PASCAL__Model.find({ isDeleted: { $ne: true } });
};

const get__PASCAL__ById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await __PASCAL__Model.findOne({ _id: id, isDeleted: { $ne: true } });
};

const update__PASCAL__ = async (
  id: string,
  updateData: Partial<I__PASCAL__>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await __PASCAL__Model.findByIdAndUpdate(id, updateData, { new: true });
};

const softDelete__PASCAL__ = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await __PASCAL__Model.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const __CAMEL__Service = {
  create__PASCAL__,
  getAll__PASCAL__,
  get__PASCAL__ById,
  update__PASCAL__,
  softDelete__PASCAL__,
};
`,
    validation: `import z from "zod";

const create__PASCAL__ = z.object({
  body: z.object({}).strict(),
});

const update__PASCAL__ = z.object({
  body: z.object({}).strict(),
});

export const __CAMEL__Validation = {
  create__PASCAL__,
  update__PASCAL__,
};
`,
};
