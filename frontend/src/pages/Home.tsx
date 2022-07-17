import React from "react";
import Slide from "../UI/Slide";
import MainPart from "../UI/MainPart";
import "../style/Slide.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="slide_layout ">
        <Slide />
      </div>
      <div className='home_mainpart'>
         <MainPart />
      </div>
      
    </div>
  );
};

export default Home;
