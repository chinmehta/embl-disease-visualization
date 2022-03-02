import React from "react";
import TableRow from "../TableRow/TableRow";
import TableCellHeader from "../TableCellHeader/TableCellHeader";

function DataTable({ tableDataHeader, tableData }) {
  return (
    <table className="sm:w-full lg:w-4/5 table-auto border-solid border-gray-400 border-collapse mb-10">
      <thead>
        <tr>
          {tableDataHeader &&
            tableDataHeader.map((headerElement, index) => (
              <TableCellHeader key={index} text={headerElement} />
            ))}
        </tr>
      </thead>
      <tbody className="border border-gray-400 border-collapse">
        {tableData &&
          tableData.map((dataRow) => (
            <TableRow key={dataRow.id} data={dataRow} />
          ))}
      </tbody>
    </table>
  );
}

export default DataTable;
