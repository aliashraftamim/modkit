import mongoose, { Schema } from "mongoose";
import { IAshraf } from "./ashraf.interface";

const AshrafSchema = new Schema<IAshraf>(
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

export const Ashraf = mongoose.model<IAshraf>(
  "Ashraf",
  AshrafSchema
);
