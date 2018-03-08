import React from "react";
import { render, findDOMNode } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component() {
  componentDidMount() {
    let node = findDOMNode(this);
  }
  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" test-custom="sss" />
        <h2 test="bbb" data-host="ccc">
          Start editing to see some magic happen {"\u2728"}
        </h2>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
