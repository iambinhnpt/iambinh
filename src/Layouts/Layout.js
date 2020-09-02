import React, { Component } from "react";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Counter from "./Counter";
import Work from "./Work";
import Blog from "./Blog";
import Footer from "./Footer";

export default class Layout extends Component {
  render() {
    return (
      <div id="page-top">
        <Header />
        <Intro />
        <About />
        <Services />
        <Counter />
        <Work />
        <Blog />
        <Footer />
        <div>
          <a href="#" className="back-to-top">
            <i className="fa fa-chevron-up" />
          </a>
          <div id="preloader" />
        </div>
      </div>
    );
  }
}
