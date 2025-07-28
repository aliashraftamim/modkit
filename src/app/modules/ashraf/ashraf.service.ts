import mongoose from "mongoose";
import { IAshraf } from "./ashraf.interface";
import { Ashraf } from "./ashraf.model";

const createAshraf = async (payload: IAshraf) => {
  return await Ashraf.create(payload);
};

const getAllAshraf = async (query: Record<string, any>) => {

  const ashrafQuery = new QueryBuilder(
    Ashraf.find({
       isDeleted: { $ne: true },
    }),
    query
  )
    .search([])
    .sort()
    .paginate()
    .fields();

  const meta = await ashrafQuery.countTotal();
  const data = await ashrafQuery.modelQuery;

  return { meta, data };
};

const getAshrafById = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Ashraf.findOne({ _id: id, isDeleted: { $ne: true } });
};

const updateAshraf = async (
  id: string,
  updateData: Partial<IAshraf>
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Ashraf.findByIdAndUpdate(id, updateData, { new: true });
};

const softDeleteAshraf = async (id: string) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return await Ashraf.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
};

export const ashraf_service = {
  createAshraf,
  getAllAshraf,
  getAshrafById,
  updateAshraf,
  softDeleteAshraf,
};
