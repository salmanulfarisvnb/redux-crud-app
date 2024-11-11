import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className=" text-center p-6">
      <Outlet />
    </div>
  );
};

export default RootLayout;
