import React from "react";

interface Product {
  name: string;
  price: number;
  images: never[];
  thumbnail: string;
}

const AddToCart: React.FC<{ item: Product }> = ({ item }) => {
  return <div>{item.name}</div>;
};

export default AddToCart;
