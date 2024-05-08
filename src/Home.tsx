import axios from "axios";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "http://www.cypress-liquor-be.shop/get-users",
    });
    console.log("res:", res);
  };
  useEffect(() => {
    getData();
  });
  return <div>This is a test website.</div>;
};

export default Home;
