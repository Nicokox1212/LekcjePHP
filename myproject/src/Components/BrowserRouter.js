import React from "react";
import { BrowserRouter } from "react-router-dom";

const CustomBrowserRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default CustomBrowserRouter;
