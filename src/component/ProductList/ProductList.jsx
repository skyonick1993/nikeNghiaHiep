import React from "react";
import { useSelector } from "react-redux";
import { ProductItem } from "../ProductItem/ProductItem";

import "./index.css";

export const ProductList = () => {
  const { productList } = useSelector((state) => state.productReducer);
  const dataProductList = productList.splice(0, 5);

  return (
    <ul className="productList">
      {productList?.map((item) => (
        <ProductItem prod={item} key={item._id} />
      ))}
    </ul>
  );
};
