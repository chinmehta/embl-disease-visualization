import React from "react";

function TableCellLink({ link, text }) {
  return (
    <>
      <td className="text-embl-primary-blue px-2 border-collapse border border-gray-400 leading-3">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </td>
    </>
  );
}

export default TableCellLink;
