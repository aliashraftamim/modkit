import mongoose from "mongoose";
import { ITammu } from "./tammu.interface";
import { Tammu } from "./tammu.model";

const createTammu = async (payload: ITammu) => {
  return await Tammu.create(payload);
};

const getAllTammu = async () => {
  return await Tammu.find({ isDeleted: { $ne: true } });
};

const getTammuById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tammu.findOne({ _id: id, isDeleted: { $ne: true } });
};

const updateTammu = async (
  id: string,
  updateData: Partial<ITammu>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tammu.findByIdAndUpdate(id, updateData, { new: true });
};

const softDeleteTammu = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Tammu.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const tammuService = {
  createTammu,
  getAllTammu,
  getTammuById,
  updateTammu,
  softDeleteTammu,
};
