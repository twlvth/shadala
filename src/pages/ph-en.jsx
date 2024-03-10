import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Phen({ loading }) {
  return (
    <div>
      {loading ? (
        <LoadingSpinner color="#36d7b7" />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Banner />
          <Content />
        </div>
      )}
    </div>
  );
}
