"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Link from "next/link";

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { FaHeadphones, FaHeart, FaLaptop } from "react-icons/fa";
import { GiHamburgerMenu, GiShop } from "react-icons/gi";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
  IoMdLogIn,
} from "react-icons/io";
import { LuSmartphone } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { TbCategory } from "react-icons/tb";
import { TfiPackage } from "react-icons/tfi";

const MobileSheet = () => {
  const [expandcat, setExpandcat] = useState(false);
  const { session } = useSession();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className=" text-3xl" />
        </SheetTrigger>
        <SheetContent className=" bg-gray-100">
          <aside className=" flex flex-col justify-between w-full h-full">
            <div className="flex flex-col gap-2 w-full h-full">
              <span className=" border-b border-gray-400 text-gray-900 font-light text-2xl max-sm:text-lg">
                TechFinds
              </span>
              {session?.user.username == "admin" && (
                <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm">
                  <MdDashboard className=" text-2xl" />
                  <span className=" text-lg font-semibold">Dashboard</span>
                </div>
              )}
              <div className="hover:bg-blue-400 transition-all ease-in rounded-xl hover:text-white flex flex-col p-5">
                <div
                  onClick={() => setExpandcat(!expandcat)}
                  className=" flex gap-2 cursor-pointer items-center justify-start"
                >
                  <TbCategory className=" text-2xl" />
                  <span className=" text-lg font-semibold">Categories</span>
                  {expandcat ? (
                    <IoIosArrowDropupCircle className=" text-xl" />
                  ) : (
                    <IoIosArrowDropdownCircle className=" text-xl" />
                  )}
                </div>
                {expandcat && (
                  <div className=" flex gap-2 flex-col mt-2">
                    <Link
                      href={"/category/laptop"}
                      className="flex hover:bg-blue-700 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-8 w-full"
                    >
                      <FaLaptop className=" text-xl" />
                      <span className=" text-base font-medium">Laptops</span>
                    </Link>
                    <Link
                      href={"/category/smartpone"}
                      className="flex hover:bg-blue-700 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-8 w-full"
                    >
                      <LuSmartphone className=" text-xl" />
                      <span className="text-base font-medium">Smartphones</span>
                    </Link>
                    <Link
                      href={"/category/headsets"}
                      className="flex hover:bg-blue-700 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-8 w-full"
                    >
                      <FaHeadphones className=" text-xl" />
                      <span className=" text-base font-medium">Headsets</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm">
                <CgProfile className=" text-2xl" />
                <span className=" text-lg font-semibold">My Profile</span>
              </div>
              <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm">
                <TfiPackage className=" text-2xl" />
                <span className=" text-lg font-semibold">Orders</span>
              </div>
              <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm">
                <FaHeart className="text-2xl" />
                <span className=" text-lg font-semibold">Wishlist</span>
              </div>
              <div className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm">
                <GiShop className=" text-gray-900 text-2xl" />
                <span className=" text-lg font-semibold">Become a Seller</span>
              </div>
            </div>
            <div className=" w-full h-64 border-t justify-end border-gray-400 flex flex-col gap-2">
              <SignedIn>
                <li className=" bg-gray-200 rounded-lg shadow-xl flex justify-center items-center cursor-pointer gap-2 p-4">
                  <UserButton showName afterSignOutUrl="/" />
                </li>
              </SignedIn>
              <SignedOut>
                <Link
                  href={"/sign-in"}
                  className="flex hover:bg-blue-400 transition-all ease-in hover:text-white rounded-lg p-5 cursor-pointer gap-2 justify-start items-center h-16 w-full max-sm:text-sm"
                >
                  <IoMdLogIn className="text-2xl" />
                  <span className=" text-lg font-semibold">Login</span>
                </Link>
              </SignedOut>
            </div>
          </aside>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSheet;
