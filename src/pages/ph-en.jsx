import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function phen() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Content />
    </div>
  );
}
