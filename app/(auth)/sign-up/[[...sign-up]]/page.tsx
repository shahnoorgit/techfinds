import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className=" flex my-[10%] justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
