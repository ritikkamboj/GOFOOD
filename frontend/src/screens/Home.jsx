import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Card />
      <Footer />
    </div>
  );
}

export default Home;
