import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "./Routes";
import Layout from "../Components/Layout";
import Home from "../Podstrony/Home";
import About from "../Podstrony/About";
import Contact from "../Podstrony/Contact";
import Profile from "../Podstrony/Profile";
import NotFound from "../Podstrony/NotFound";
import Notes from "../Components/Note/notesList";

const componentMap = {
    Home,
    About,
    Contact,
    Notes,
    Profile,
  };
  
  const RoutesConfig = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, component }) => {
            const Component = componentMap[component];
            return <Route key={path} path={path} element={<Component />} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  };
  
  export default RoutesConfig;