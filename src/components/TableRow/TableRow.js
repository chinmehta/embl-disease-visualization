import React, { useState } from "react";
import ChartComponent from "../ChartComponent/ChartComponent";
import Tab from "../Tab/Tab";
import TableCellAccordionBtn from "../TableCellAccordionBtn/TableCellAccordionBtn";
import TableCellLink from "../TableCellLink/TableCellLink";
import TableCellText from "../TableCellText/TableCellText";
import Tabs from "../Tabs/Tabs";

function TableRow({ data = {} }) {
  let [accordionText, setaccordionText] = useState("+");

  const toggleAccordion = () => {
    accordionText === "+" ? setaccordionText("-") : setaccordionText("+");
  };

  return (
    <>
      <tr>
        <TableCellAccordionBtn
          text={accordionText}
          clickHandler={toggleAccordion}
        />
        <TableCellLink
          text={data.approvedSymbol}
          link={process.env.REACT_APP_REDIRECT_URL + data.approvedName}
        />
        <TableCellText text={data.approvedName} />
        <TableCellText text={data.score && data.score.toFixed(3)} />
      </tr>
      <tr className={accordionText === "+" ? "hidden" : ""}>
        <Tabs>
          <Tab label="Bar chart">
            <ChartComponent data={data} type="bar" />
          </Tab>
          <Tab label="Radar chart">
            <ChartComponent data={data} type="radar" />
          </Tab>
        </Tabs>
      </tr>
    </>
  );
}

export default React.memo(TableRow);
