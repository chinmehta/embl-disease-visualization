import React, { useRef, useState } from "react";
import ChartComponent from "../ChartComponent/ChartComponent";
import Tab from "../Tab/Tab";
import TableCellAccordionBtn from "../TableCellAccordionBtn/TableCellAccordionBtn";
import TableCellLink from "../TableCellLink/TableCellLink";
import TableCellText from "../TableCellText/TableCellText";
import Tabs from "../Tabs/Tabs";

function TableRow(props) {
  const BASE_API = "https://platform.opentargets.org/target/";
  const accordionRef = useRef(null);
  let [accordionText, setaccordionText] = useState("+");

  const toggleAccordion = () => {
    accordionRef.current.classList.toggle("hidden");
    accordionRef.current.classList.contains("hidden")
      ? setaccordionText("+")
      : setaccordionText("-");
  };

  return (
    <React.Fragment>
      <tr>
        <TableCellAccordionBtn
          text={accordionText}
          clickHandler={toggleAccordion}
        />
        <TableCellLink
          text={props.data.target.approvedSymbol}
          link={BASE_API + props.data.target.approvedName}
        />
        <TableCellText text={props.data.target.approvedName} />
        <TableCellText text={props.data.score.toFixed(3)} />
      </tr>
      <tr className="hidden" ref={accordionRef}>
        <Tabs>
          <Tab label="Bar chart">
            <ChartComponent type="bar" />
          </Tab>
          <Tab label="Radar chart">
            <ChartComponent type="radar" />
          </Tab>
        </Tabs>
      </tr>
    </React.Fragment>
  );
}

export default React.memo(TableRow);
