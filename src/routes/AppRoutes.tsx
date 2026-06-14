import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Process from "../pages/Process";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/process" element={<Process />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
