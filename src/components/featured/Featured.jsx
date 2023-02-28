import React from "react";
import "./Featured.scss";
import Man from "../../../public/img/man.png";
import SearachPng from "../../../public/img/search.png";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> service for your business
          </h1>
          <div className="serach">
            <div className="serachimput">
              <img src={SearachPng} alt="" />
              <input type="text" placeholder="Try builiding Mobile App" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Desgin</button>
            <button>Wordpress</button>
            <button>Logo Desgin</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src={Man} alt="hi i am a man" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
