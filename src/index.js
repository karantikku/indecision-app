import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    return <div>Option Component Header</div>;
  }
}
class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }
}
const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <Form />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));
