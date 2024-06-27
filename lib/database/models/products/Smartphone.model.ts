import { model, models, Schema } from "mongoose";

const SmartphoneSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  processor: { type: String, required: true },
  ram: {
    type: String,
    required: true,
    enum: ["4GB", "6GB", "8GB", "12GB", "16GB"],
  },
  storage: {
    type: String,
    required: true,
    enum: ["64GB", "128GB", "256GB", "512GB", "1TB"],
  },
  screenSize: {
    type: String,
    required: true,
    enum: ["4 inch", "5 inch", "5.5 inch", "6.1 inch", "6.5 inch", "6.7 inch"],
  },
  batteryLife: { type: String },
  camera: { type: String, required: true },
});

export default models.smartphone || model("Smartphone", SmartphoneSchema);
