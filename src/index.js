import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of Computer",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.options.value;
  if (option) {
    app.options.push(option);
    e.target.elements.options.value = "";
    render();
  }
};
const removeAll = () => {
  app.options = [];
  render();
};
const onMakeDecison = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const appRoot = document.getElementById("root");
const render = () => {
  const template = (
    <div>
      {app.title && <h1>{app.title}</h1>}
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length ? "Here are your options" : "No Options"}
      <br />
      <button disabled={app.options.length === 0} onClick={onMakeDecison}>
        What Should I Do
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(option => {
          return <li key={option}>Option : {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();
