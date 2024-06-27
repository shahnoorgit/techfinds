import { Schema, model, models } from "mongoose";

const LaptopSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  processor: {
    type: String,
    required: true,
    enum: [
      "Intel i3",
      "Intel i5",
      "Intel i7",
      "Intel i9",
      "AMD Ryzen 3",
      "AMD Ryzen 5",
      "AMD Ryzen 7",
      "AMD Ryzen 9",
    ],
  },
  ram: { type: String, required: true, enum: ["4GB", "8GB", "16GB", "32GB"] },
  storage: {
    type: String,
    required: true,
    enum: ["128GB", "256BB", "512GB", "1TB", "1TB+"],
  },
  storageType: { type: String, required: true, enum: ["SSD", "DDR", "other"] },
  screenSize: { type: String, required: true },
  batteryLife: { type: String },
});

export default models.Laptop || model("Laptop", LaptopSchema);
