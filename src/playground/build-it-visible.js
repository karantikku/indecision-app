import React from "react";
import ReactDOM from "react-dom";
let toggle = false;
const onToggle = () => {
  toggle = !toggle;
  render();
};
const appRoot = document.getElementById("root");
const render = () => {
  const template = (
    <div>
      <h1> Visibility Toggle </h1>
      <button onClick={onToggle}>
        {toggle ? "Hide Details" : "Show Details"}
      </button>
      {toggle && (
        <p>Hey, these are some details which you're now able to see!</p>
      )}
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
