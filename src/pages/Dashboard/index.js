import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Frontend/components/Header";
import Footer from "../Frontend/components/Footer";
import Home from "./Home";
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
