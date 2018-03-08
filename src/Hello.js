import React from "react";

export default props => {
  return (
    <h1>
      Hello {props.name}! {props["test-custom"]}
    </h1>
  );
};
