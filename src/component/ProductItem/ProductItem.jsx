import React from "react";
import { Link } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

import "./index.css";

export const ProductItem = (props) => {
  const { _id, img, name, message, price } = props.prod;

  return (
    <li>
      <Link to={"product/" + _id} className="productItem">
        <figure>
          <img src="" alt={name} />
        </figure>
        <div className="productItem__content">
          <div className="productItem__title">
            <p>{name}</p>
            <span>{numberWithCommas(price)} đ</span>
          </div>
          <div className="productItem__message">{message}</div>
        </div>
      </Link>
    </li>
  );
};
