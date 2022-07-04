import React from "react";
import { useParams } from "react-router-dom";

export const DetailProduct = () => {
  const { id } = useParams();
  return <h2>ProductId: {id}</h2>;
};
