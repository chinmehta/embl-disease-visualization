import React from "react";

function TableCellLink({ link, text }) {
  return (
    <React.Fragment>
      <td className="text-embl-primary-blue px-2 border-collapse border border-gray-400 leading-3">
        <a href={link} target="_blank">
          {text}
        </a>
      </td>
    </React.Fragment>
  );
}

export default TableCellLink;
