import React from "react";
import { Routes, Route } from "react-router-dom";

//Import components
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { Products } from "./components/Products";
import { Proitems } from "./components/proitems";
import { About } from "./components/about";
import { Notfound } from "./components/Notfound";

export const Routerz = () => {
  return (
    <div className="navb">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="products" element={<Products />} />
        <Route path="products/:id" element={<Proitems />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};
