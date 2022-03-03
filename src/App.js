import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import getData from "./services/api.service";

function App() {
  const DATA_HEADER = [
    "",
    "Approved Symbol",
    "Gene Name",
    "Overall Association Score",
  ];

  const query = {
    operationName: "lungCarcinomaAssociatedTargets",
    variables: {},
    query: `query lungCarcinomaAssociatedTargets {
      disease(efoId: "EFO_0001071") {
        associatedTargets(page: { index: 0, size: 25 }) {
          rows {
            target {
              id
              approvedSymbol
              approvedName
            }
            score
            datatypeScores {
              id
              score
            }
          }
        }
      }
    }`,
  };

  const header = { "Content-Type": "application/json" };

  const [tableData, settableData] = useState(null);

  useEffect(() => {
    async function fetchTableData() {
      settableData(
        await getData(
          process.env.REACT_APP_API_URL,
          "POST",
          header,
          JSON.stringify(query)
        )
      );
    }
    fetchTableData();
  });

  return (
    <div className="w-screen max-w-full min-h-screen h-full flex items-center flex-col ">
      <h1 className="text-3xl font-bold py-3">
        Genes associated with lung carcinoma
      </h1>
      {tableData && (
        <DataTable
          tableDataHeader={DATA_HEADER}
          tableData={tableData}
        ></DataTable>
      )}
    </div>
  );
}

export default App;
