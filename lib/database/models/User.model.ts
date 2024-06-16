import { Schema, model, models } from "mongoose";

export interface Iuser {
  first_name: string;
  last_name: string;
  username: string;
  photo: String;
  email: string;
  wishlist?: string[];
  clerkid?: string;
  orders?: string[];
  role?: string;
  vendorProfile?: {
    shopName: string;
    shopDescription: string;
    myproducts: string[];
  };
}

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    photo: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    clerkid: { type: String, required: true, unique: true },
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
    role: {
      type: String,
      enum: ["customer", "vendor", "admin"],
      default: "customer",
    },
    vendorProfile: {
      shopName: { type: String },
      shopDescription: { type: String },
      myproducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    },
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);
