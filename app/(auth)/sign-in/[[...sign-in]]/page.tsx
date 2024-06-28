"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className=" flex my-[10%] justify-center items-center">
      <SignIn />
    </div>
  );
};

export default page;
