import React from "react";
import { Announcement } from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Categories } from "../components/Categories";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ChefWord from "../components/chefWord/ChefWord";
import Products from "../components/products/Products";

export const Home = () => {
  const scrolltoNext = () => {
    // this.myelement.scrollIntoView();
    window.scrollTo(0, 2200);
  };
  return (
    <div>
      <Announcement />
      <Navbar />
      {/* <Map /> */}
      <Slider scrolltoNext={scrolltoNext} />
      <Categories />
      <ChefWord />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
