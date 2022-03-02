import React from "react";

function TableCellHeader({ text }) {
  return (
    <>
      <th className="font-bold py-4 px-2 leading-none border border-gray-400">
        {text}
      </th>
    </>
  );
}

export default TableCellHeader;
