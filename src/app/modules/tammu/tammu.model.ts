import mongoose, { Schema } from "mongoose";
import { ITammu } from "./tammu.interface";

const TammuSchema = new Schema<ITammu>(
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

export const Tammu = mongoose.model<ITammu>(
  "Tammu",
  TammuSchema
);
