import React from "react";

function TableCellHeader(props) {
  return (
    <React.Fragment>
      <td className="font-bold py-4 px-2 leading-none border border-gray-400">
        {props.text}
      </td>
    </React.Fragment>
  );
}

export default TableCellHeader;
