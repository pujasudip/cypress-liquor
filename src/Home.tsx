import React, { useEffect, useState } from "react";
import axios from "axios";

const Home: React.FC = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "json",
        },
      })
      .then((res: any) => {
        console.log("res:", typeof res.data);
        setData(res.data.json());
      });
  });
  return <div>{data}</div>;
};

export default Home;
