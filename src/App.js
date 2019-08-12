import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ArticleContainer from "./components/ArticleContainer";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const [articles, setArticles] = useState(0);

  var getArticleData = () => {
    $.ajax({
      url: "https://react.herokuapp.com/articleData.json",
      url: "http://localhost:3000/articleData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        setArticles(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  };

  useEffect(() => {
    getArticleData();
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
    let navElement = $("nav");
    $(function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function() {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <ArticleContainer {...articles} />
        <Members />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
};

export default App;
