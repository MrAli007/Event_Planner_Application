import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Contact";
import About from "./About";
import Events from "./Events/Events";
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}
