import DataTable from "./components/DataTable/DataTable";

function App() {
  return (
    <div className="w-screen min-h-screen h-full flex items-center flex-col ">
      <h1 className="text-3xl font-bold py-3">
        Genes associated with lung carcinoma
      </h1>
      <DataTable></DataTable>
    </div>
  );
}

export default App;
