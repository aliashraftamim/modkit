import mongoose, { Schema } from "mongoose";
import { ITamim } from "./tamim.interface";

const TamimSchema = new Schema<ITamim>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },  
    content: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "inactive", "archived", "pending"],
      default: "active",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Tamim = mongoose.model<ITamim>(
  "Tamim",
  TamimSchema
);
