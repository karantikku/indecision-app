import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of Computer",
  options: ["One", "Two"]
};
const template = (
  <div>
    {app.title && <h1>{app.title}</h1>}
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options ? "Here are your options" : "No Options"}
    <ol>
      <li>{app.title}</li>
      <li>{app.subtitle}</li>
    </ol>
  </div>
);
let count = 0;
const addOne = () => {
  console.log("addOne");
  count++;
  renderCounterApp();
};
const minusOne = () => {
  console.log("minusOne");
  count--;
  renderCounterApp();
};
const reset = () => {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("root");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
