import React from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner__parent">
      <div className="banner__child--description">
        <h1>
          One Stop Information with Dexa, <br />
          Stay Updated, Stay Protected
        </h1>
        <p>
          Dexa, an AWS Powered Lex Bot developed to give information about
          Covid-19 activities. It is accurate, precise and user-friendly. Give
          it a try today. Stay Updated! Stay Connected!
        </p>
      </div>
      <div className="banner__child--images">
        <div className="img--big">
          <img src={image1} alt="A Person using Dexa" />
        </div>
        <div className="img--vertical">
          <img
            src={image2}
            alt="A Person using Dexa"
            className="banner__image--top"
          />
          <img
            src={image3}
            alt="A Person using Dexa"
            className="banner__image--bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
