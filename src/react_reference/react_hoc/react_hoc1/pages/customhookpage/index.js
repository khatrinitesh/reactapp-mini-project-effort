import React, { useState, useEffect } from "react";
import useLoader from "../../hooks/useloader";

export default function CustomHooks() {
    //a delay function
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    const fetchAPI = async (ms) => {
      console.log("this might take some time....");
      await delay(ms);
      console.log("Done!");
    };
    const fetchAPITWO = async (ms) => {
      console.log("this might take some time....");
      await delay(ms);
  
      console.log("Done!");
    };
    const [getFetchOne, isLoading] = useLoader(fetchAPI);
    const [getFecthTwo, isLoading2] = useLoader(fetchAPITWO);
  
    useEffect(() => {
      getFetchOne(4000);
      getFecthTwo(2000);
    }, []);
  
    return (
      <div>
        <article className="d-flex flex-column my-2">
          <h3 className="text-center">
            Welcome to <span style={{ color: "#994433" }}>Code with Vish</span>
          </h3>
        </article>
  
        <article className="d-flex flex-column">
          <h4>{isLoading || isLoading2 ? "Loading..." : "Data Loaded"}</h4>
        </article>
      </div>
    );
  }