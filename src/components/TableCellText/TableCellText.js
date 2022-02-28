import React from "react";

function TableCellText(props) {
  return (
    <React.Fragment>
      <td className="px-2 border-collapse md:leading-5 lg:leading-3 border border-gray-400">
        {props.text}
      </td>
    </React.Fragment>
  );
}

export default TableCellText;
