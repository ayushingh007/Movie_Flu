import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import Titlecards from "../../components/Titlecards/Titlecards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img className="banner-img" src={hero_banner} alt="" />
        <div className="hero-caption">
          <img className="caption-img" src={hero_title} alt="" />
            <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
            </p>
            <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
            </div>
          <Titlecards/>

        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"Blockbuster movie"} category={"top_rated"}/>
      <Titlecards title={"only on MovieFlu"} category={"popular"}/>
      <Titlecards title={"Upcoming movie"} category={"upcoming"}/>
      <Titlecards title={"Topics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
