import React, { useState, useEffect } from "react";
import axios from "axios";
import Cakes from "./Cakes";

function GetCakes() {
  const [cakes, setCakes] = useState("");

  useEffect(() => {
    getAllCakes();
  }, []);

  const getAllCakes = () => {
    axios
      .get("http://localhost:3000/cakes")
      .then((response) => {
        
        setCakes(response.data);
        
      })
      .catch((err) => {
        return err.response;
      });
  };
  return <Cakes cakes={cakes} />;
}
export default GetCakes;
