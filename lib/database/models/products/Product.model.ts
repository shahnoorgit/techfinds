import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Laptop", "Smartphone", "Headset"],
  },
  condition: { type: String, required: true, enum: ["New", "Used"] },
  usedSpan: { type: Number, default: 0 },
  isApproved: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
