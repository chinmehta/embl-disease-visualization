import React, { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";
import TableCellHeader from "../TableCellHeader/TableCellHeader";
import getData from "../../services/api.service";

function DataTable() {
  const DATA_HEADER = [
    "",
    "Approved Symbol",
    "Gene Name",
    "Overall Association Score",
  ];

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function fetchTableData() {
      setMyData(await getData());
    }
    fetchTableData();
  }, []);

  return (
    <table className="table-auto border-solid border-gray-400 border-collapse">
      <thead>
        <tr>
          {DATA_HEADER.map((headerElement, index) => (
            <TableCellHeader key={index} text={headerElement} />
          ))}
        </tr>
      </thead>
      <tbody>
        {myData.map((dataRow) => (
          <TableRow key={dataRow.target.id} data={dataRow} />
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
