import React from "react";
import ReactDOM from "react-dom";

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibilty() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.handleToggleVisibilty}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <p>Hey, these are some details which you're now able to see!</p>
        )}
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("root"));
// let toggle = false;
// const handleToggleVisibilty = () => {
//   toggle = !toggle;
//   render();
// };
// const appRoot = document.getElementById("root");
// const render = () => {
//   const template = (
//     <div>
//       <h1> Visibility Toggle </h1>
//       <button onClick={handleToggleVisibilty}>
//         {toggle ? "Hide Details" : "Show Details"}
//       </button>
//       {toggle && (
//         <p>Hey, these are some details which you're now able to see!</p>
//       )}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// render();
