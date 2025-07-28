import mongoose from "mongoose";
import { ITamim } from "./tamim.interface";
import { Tamim } from "./tamim.model";

const createTamim = async (payload: ITamim) => {
  return await Tamim.create(payload);
};

const getAllTamim = async (query: Record<string, any>) => {

  const tamimQuery = new QueryBuilder(
    Tamim.find({
       isDeleted: { $ne: true },
    }),
    query
  )
    .search([])
    .sort()
    .paginate()
    .fields();

  const meta = await tamimQuery.countTotal();
  const data = await tamimQuery.modelQuery;

  return { meta, data };
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

export const tamim_service = {
  createTamim,
  getAllTamim,
  getTamimById,
  updateTamim,
  softDeleteTamim,
};
