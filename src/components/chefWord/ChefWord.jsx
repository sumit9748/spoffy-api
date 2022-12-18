import React from "react";

import "./chefWord.css";
import { images } from "../../constants";

const ChefWord = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorent">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil,
            porro.
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          tempora quis veritatis est eos et dignissimos error, impedit id atque
          blanditiis voluptas iure consectetur.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Law</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default ChefWord;
