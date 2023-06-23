import React from "react";
import Navbar from "../components/Navbar";

import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div ><Carousel /></div>
      <div className="m3"><Card /></div>
      <div><Card /></div>
      <div><Card /></div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
