import React from "react";
import CustomBrowserRouter from ".//Components/BrowserRouter";
import RoutesConfig from ".//Components/Route";
import "./App.css";

function App() {
  return (
    <CustomBrowserRouter>
      <RoutesConfig />
    </CustomBrowserRouter>
  );
}

export default App;
