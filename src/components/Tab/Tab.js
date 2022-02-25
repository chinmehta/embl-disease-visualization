import React from "react";

function Tab(props) {
  return (
    <React.Fragment>
      <div className="flex">{props.children}</div>
    </React.Fragment>
  );
}

export default Tab;
