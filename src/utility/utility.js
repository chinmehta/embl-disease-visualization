export default function formatData(rows = []) {
  let formattedData = [];

  rows.forEach((element) => {
    const label = [];
    const chartDataArray = [];
    element.datatypeScores.forEach((dtScore) => {
      label.push(titleCase(dtScore.id));
      chartDataArray.push(dtScore.score);
    });
    const obj = {
      id: element.target.id,
      approvedSymbol: element.target.approvedSymbol,
      approvedName: element.target.approvedName,
      score: element.score,
      label,
      chartDataArray,
    };
    formattedData.push(obj);
  });

  formattedData = sortData(formattedData, "score", "desc");

  return getTopRecords(formattedData, 10);
}

function sortData(array, key, order = "asc") {
  if (order === "asc") return array.sort((a, b) => a[key] - b[key]);
  else return array.sort((a, b) => b[key] - a[key]);
}

function getTopRecords(array, numberOfRecords = array.length) {
  return array.splice(0, numberOfRecords);
}

function titleCase(str) {
  return str
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
