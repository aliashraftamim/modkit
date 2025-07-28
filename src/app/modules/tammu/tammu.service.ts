import mongoose from "mongoose";
import { ITammu } from "./tammu.interface";
import { Tammu } from "./tammu.model";

const createTammu = async (payload: ITammu) => {
  return await Tammu.create(payload);
};

const getAllTammu = async (query: Record<string, any>) => {

  const tammuQuery = new QueryBuilder(
    Tammu.find({
       isDeleted: { $ne: true },
    }),
    query
  )
    .search([])
    .sort()
    .paginate()
    .fields();

  const meta = await tammuQuery.countTotal();
  const data = await tammuQuery.modelQuery;

  return { meta, data };
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

export const tammu_service = {
  createTammu,
  getAllTammu,
  getTammuById,
  updateTammu,
  softDeleteTammu,
};
