import { Schema, model, models } from "mongoose";

const HeadphoneSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  type: {
    type: String,
    required: true,
    enum: ["Over-Ear", "In-Ear", "On-Ear", "Earbuds", "Noise-Canceling"],
  },
  wireless: { type: Boolean, required: true },
  noiseCancelling: { type: Boolean, required: true },
  batteryLife: { type: String },
});

export default models.Headset || model("Headset", HeadphoneSchema);
