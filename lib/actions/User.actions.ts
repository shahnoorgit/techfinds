import { connectToMongodb } from "../database";
import { Iuser } from "../database/models/User.model";
import User from "../database/models/User.model";
import { handleError } from "../utils";

export async function createUser(user: Iuser) {
  const { first_name, last_name, email, username, clerkid, photo } = user;
  await connectToMongodb();
  try {
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      username,
      clerkid: clerkid,
      photo,
      wishlist: [],
      orders: [],
      role: "customer",
    });

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
    handleError(error);
  }
}

export async function deleteUser(id: string) {
  await connectToMongodb();
  try {
    const deletedUser = await User.deleteOne({ clerkId: id });
    return JSON.parse(JSON.stringify(deletedUser));
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(id: string, user: ClerkUserUpdateProps) {
  const { name, email, photo } = user;
  await connectToMongodb();
  try {
    const updatedUser = await User.updateOne({
      clerkId: id,
      name: name,
      email: email,
      photo: photo,
    });
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

export async function updateRole(_id: string, role: string) {
  await connectToMongodb();
  try {
    const updatedUser = await User.updateOne({
      _id: _id,
      role: role,
    });
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    console.log(error);
  }
}

export async function addproduct({
  name,
  price,
  description,
  category,
  condition,
  usedSpan,
  image,
  creatorId,
}: AddProductsProps) {}
