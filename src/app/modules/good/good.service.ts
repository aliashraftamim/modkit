import mongoose from "mongoose";
import { IGood } from "./good.interface";
import { Good } from "./good.model";

const createGood = async (payload: IGood) => {
  return await Good.create(payload);
};

const getAllGood = async () => {
  return await Good.find({ isDeleted: { $ne: true } });
};

const getGoodById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Good.findOne({ _id: id, isDeleted: { $ne: true } });
};

const updateGood = async (
  id: string,
  updateData: Partial<IGood>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Good.findByIdAndUpdate(id, updateData, { new: true });
};

const softDeleteGood = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Good.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const goodService = {
  createGood,
  getAllGood,
  getGoodById,
  updateGood,
  softDeleteGood,
};
