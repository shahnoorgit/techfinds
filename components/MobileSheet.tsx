import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlOptionsVertical } from "react-icons/sl";
import { TfiPackage } from "react-icons/tfi";

const MobileSheet = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className=" text-3xl" />
        </SheetTrigger>
        <SheetContent className=" bg-gray-100">
          <aside className=" flex flex-col gap-5 w-full h-full">
            <span className=" border-b border-gray-400 text-gray-900 font-light text-2xl max-sm:text-lg">
              TechFinds
            </span>
            <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-10 w-full">
              <TfiPackage className=" text-2xl" />
              <span className=" text-lg font-semibold">Orders</span>
            </div>
            <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-10 w-full">
              <CiHeart className="text-3xl" />
              <span className=" text-lg font-semibold">Wishlist</span>
            </div>
            <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-10 w-full">
              <CiHeart className="text-3xl" />
              <span className=" text-lg font-semibold">Wishlist</span>
            </div>
          </aside>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSheet;
