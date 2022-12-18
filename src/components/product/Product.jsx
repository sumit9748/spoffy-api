import "./product.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useState } from "react";
import React from "react";

import { Link } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";

export const Product = ({ item }) => {
  return (
    <div className="product">
      <div className="productTop">
        <img src={item.img} alt="" />
      </div>

      <div className="productBottom">
        <Link to={`/resturent/${item._id}`}>
          <h3 className="title">{item.name}</h3>
        </Link>
        <p className="desc">{item.desc}</p>
        <div className="productDesc">
          <div className="star">
            <StarBorderIcon />
            <span className="starvalue">{item.rating}</span>
          </div>
          <div className="dash"></div>
          <FavoriteIcon />
          <div className="dash"></div>

          <select name="type" className="select">
            {item.type.map((item) => (
              <option className="option" value={`${item}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="productTime">50% off and Welcomised</p>
      </div>
    </div>
  );
};
export default Product;
