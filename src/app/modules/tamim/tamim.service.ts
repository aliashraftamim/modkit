import mongoose from "mongoose";
import { ITamim } from "./tamim.interface";
import { Tamim } from "./tamim.model";

const createTamim = async (payload: ITamim) => {
  return await Tamim.create(payload);
};

const getAllTamim = async () => {
  return await Tamim.find({ isDeleted: { $ne: true } });
};

const getTamimById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tamim.findOne({ _id: id, isDeleted: { $ne: true } });
};

const updateTamim = async (
  id: string,
  updateData: Partial<ITamim>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tamim.findByIdAndUpdate(id, updateData, { new: true });
};

const softDeleteTamim = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tamim.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const tamimService = {
  createTamim,
  getAllTamim,
  getTamimById,
  updateTamim,
  softDeleteTamim,
};
