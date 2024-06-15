import React from "react";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import MobileSheet from "./MobileSheet";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Menu = () => {
  return (
    <header className=" sticky max-sm:h-14 w-full h-20 items-center max-sm:gap-3 max-sm:p-1 px-5 bg-white flex justify-evenly gap-5">
      <div className=" flex gap-2 justify-center items-center">
        <MobileSheet />
        <div className="text-gray-900 font-bold max-sm:text-sm text-2xl">
          Tech<span className=" text-blue-800">Finds</span>
        </div>
      </div>
      <div className=" flex items-center w-[800px] h-12">
        <input
          className=" bg-blue-100 w-full border-black border-1 rounded-lg shadow-md max-sm:h-8 h-12 px-4 text-gray-900 placeholder-gray-500"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className=" flex justify-center items-center gap-3">
        <div className=" flex max-sm:hidden gap-2 cursor-pointer hover:border-2 hover:border-blue-800 transition-all ease-out  p-2 rounded-lg items-center justify-center">
          <SignedOut>
            <FaRegUserCircle className=" text-gray-900 text-2xl" />
            <Link
              href={"/sign-in"}
              className=" font-semibold text-lg text-gray-900 max-sm:text-lg"
            >
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className=" flex gap-2 hover:border-2 hover:border-blue-800 transition-all ease-out cursor-pointer p-2 rounded-lg items-center justify-center">
          <FaShoppingCart className=" max-sm:text-lg text-gray-900 text-2xl" />
          <span className=" max-sm:hidden max-md:hidden font-semibold text-lg text-gray-900">
            Cart
          </span>
        </div>
        <div className=" max-sm:hidden max-md:hidden flex gap-2 hover:border-2 hover:border-blue-800 transition-all ease-out cursor-pointer p-2 rounded-lg items-center justify-center">
          <GiShop className=" text-gray-900 text-2xl" />
          <span className=" font-semibold text-lg text-gray-900">
            Become Seller
          </span>
        </div>
      </div>
    </header>
  );
};

export default Menu;
