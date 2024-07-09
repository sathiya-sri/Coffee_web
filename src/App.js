import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Gallery from "./components/Gallery";
import Feature from "./pages/Feature";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="features">
         <Feature/>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
