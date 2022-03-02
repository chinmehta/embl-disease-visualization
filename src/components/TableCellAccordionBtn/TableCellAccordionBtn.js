import React from "react";

function TableCellAccordionBtn({ text, clickHandler }) {
  return (
    <>
      <td className="flex items-stretch border border-gray-400 border-collapse p-0">
        <button
          className="flex text-xl px-3 py-3 h-100 w-100 bg-embl-primary-blue text-white w-full h-full justify-center "
          onClick={() => clickHandler()}
        >
          {text}
        </button>
      </td>
    </>
  );
}

export default TableCellAccordionBtn;
