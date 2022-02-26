export default function formatData(rows) {
  const formattedData = [];

  rows.forEach((element) => {
    const label = [];
    const chartDataArray = [];
    element.datatypeScores.map((dtScore) => {
      //make title case
      label.push(dtScore.id.split("_").join(" "));
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
  return formattedData;
}
