import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Projects from "../pages/Projects.js";

const Page = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/projects" exact element={<Projects />} />
    </Routes>
  );
};

export default Page;
