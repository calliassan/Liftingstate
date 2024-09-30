import { useEffect } from "react";
import React from "react";
import axios from "axios";

export const Users = ({ call1 }) => {
  const userdata = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(res.data);
    call1(res.data);
  };
  useEffect(() => {
    userdata();
  }, []);

  return (
    <div>
      <h2></h2>
    </div>
  );
};
