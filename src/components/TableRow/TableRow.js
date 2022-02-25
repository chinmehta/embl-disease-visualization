import React, { useRef, useState } from "react";
import TableCellAccordionBtn from "../TableCellAccordionBtn/TableCellAccordionBtn";
import TableCellLink from "../TableCellLink/TableCellLink";
import TableCellText from "../TableCellText/TableCellText";

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
      <tr className="hidden h-96" ref={accordionRef}>
        <td colSpan="4"></td>
      </tr>
    </React.Fragment>
  );
}

export default TableRow;
