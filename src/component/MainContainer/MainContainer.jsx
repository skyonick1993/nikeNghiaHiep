import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductList } from "../ProductList/module/action/productList";
import { ProductList } from "../ProductList/ProductList";

export const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList("male", "shoes"));
  }, [dispatch]);

  return (
    <div>
      <h2>Clean Looks, Sustainable Materials</h2>
      <ProductList />
    </div>
  );
};
