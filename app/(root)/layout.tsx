import Menu from "@/components/Menu";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Menu />
      {children}
    </main>
  );
};

export default layout;
