import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "Thing two", "Thing Three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
    return (
      <div>
        Options Component Header
        <Option />
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>Option Component Here</div>;
  }
}
class AddOption extends React.Component {
  render() {
    return <div>AddOption Components Here</div>;
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
