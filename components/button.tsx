"use client";
import React from "react";

const ButtonComponent = () => {
  const handleClick = () => {
    alert("hii");
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ButtonComponent;
