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

  const DATA = [
    {
      target: {
        id: "ENSG00000146648",
        approvedSymbol: "EGFR",
        approvedName: "epidermal growth factor receptor",
      },
      score: 0.8899724269024147,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9943427164483385,
        },
        {
          id: "rna_expression",
          score: 0.19744986909916087,
        },
        {
          id: "affected_pathway",
          score: 0.9417342333554943,
        },
        {
          id: "literature",
          score: 0.9985009340689427,
        },
        {
          id: "genetic_association",
          score: 0.7981993807952019,
        },
        {
          id: "somatic_mutation",
          score: 0.9292245812438958,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000171094",
        approvedSymbol: "ALK",
        approvedName: "ALK receptor tyrosine kinase",
      },
      score: 0.8218065187622134,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9692543421558388,
        },
        {
          id: "rna_expression",
          score: 0.03842739351303554,
        },
        {
          id: "affected_pathway",
          score: 0.979400228199195,
        },
        {
          id: "literature",
          score: 0.9948349822938788,
        },
        {
          id: "genetic_association",
          score: 0.18237923928348632,
        },
        {
          id: "somatic_mutation",
          score: 0.877433963261599,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000141736",
        approvedSymbol: "ERBB2",
        approvedName: "erb-b2 receptor tyrosine kinase 2",
      },
      score: 0.8150699892315724,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9733594102776334,
        },
        {
          id: "affected_pathway",
          score: 0.9596164497981319,
        },
        {
          id: "literature",
          score: 0.9559074959382762,
        },
        {
          id: "genetic_association",
          score: 0.547137717850459,
        },
        {
          id: "somatic_mutation",
          score: 0.7811927061414593,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000141510",
        approvedSymbol: "TP53",
        approvedName: "tumor protein p53",
      },
      score: 0.8120551008501015,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.12158615952232422,
        },
        {
          id: "affected_pathway",
          score: 0.9332798154066371,
        },
        {
          id: "literature",
          score: 0.9825528446732389,
        },
        {
          id: "genetic_association",
          score: 0.6961179669025896,
        },
        {
          id: "somatic_mutation",
          score: 0.9223419792624927,
        },
        {
          id: "animal_model",
          score: 0.6050281269619443,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000133703",
        approvedSymbol: "KRAS",
        approvedName: "KRAS proto-oncogene, GTPase",
      },
      score: 0.7938220507421528,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.15198269940290526,
        },
        {
          id: "affected_pathway",
          score: 0.9279734533244876,
        },
        {
          id: "literature",
          score: 0.9888608218783571,
        },
        {
          id: "genetic_association",
          score: 0.5592963338026914,
        },
        {
          id: "somatic_mutation",
          score: 0.9005709835073946,
        },
        {
          id: "animal_model",
          score: 0.6011895205447721,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000105976",
        approvedSymbol: "MET",
        approvedName: "MET proto-oncogene, receptor tyrosine kinase",
      },
      score: 0.7930979680410255,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.953698665271221,
        },
        {
          id: "affected_pathway",
          score: 0.9511991578132623,
        },
        {
          id: "literature",
          score: 0.9744551261903736,
        },
        {
          id: "somatic_mutation",
          score: 0.8540329275106773,
        },
        {
          id: "animal_model",
          score: 0.34731086467551914,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000157764",
        approvedSymbol: "BRAF",
        approvedName: "B-Raf proto-oncogene, serine/threonine kinase",
      },
      score: 0.7928978948994241,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.6288969454742783,
        },
        {
          id: "affected_pathway",
          score: 0.9620275304391674,
        },
        {
          id: "literature",
          score: 0.9425752157977572,
        },
        {
          id: "genetic_association",
          score: 0.857405731924456,
        },
        {
          id: "somatic_mutation",
          score: 0.8739083610982139,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000128052",
        approvedSymbol: "KDR",
        approvedName: "kinase insert domain receptor",
      },
      score: 0.7832857211733083,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9770022515352137,
        },
        {
          id: "rna_expression",
          score: 0.0654388184356031,
        },
        {
          id: "affected_pathway",
          score: 0.8430912869711078,
        },
        {
          id: "literature",
          score: 0.784229977722116,
        },
        {
          id: "somatic_mutation",
          score: 0.7772224615063927,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000121879",
        approvedSymbol: "PIK3CA",
        approvedName:
          "phosphatidylinositol-4,5-bisphosphate 3-kinase catalytic subunit alpha",
      },
      score: 0.7770756002727927,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.1861509592047146,
        },
        {
          id: "affected_pathway",
          score: 0.9344173500585706,
        },
        {
          id: "literature",
          score: 0.9499884445862364,
        },
        {
          id: "genetic_association",
          score: 0.7688104298311036,
        },
        {
          id: "somatic_mutation",
          score: 0.8695015581680182,
        },
      ],
    },
    {
      target: {
        id: "ENSG00000178568",
        approvedSymbol: "ERBB4",
        approvedName: "erb-b2 receptor tyrosine kinase 4",
      },
      score: 0.7741882575312553,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9721880785641666,
        },
        {
          id: "rna_expression",
          score: 0.09143279196078781,
        },
        {
          id: "affected_pathway",
          score: 0.9209458987536404,
        },
        {
          id: "literature",
          score: 0.3084238331411008,
        },
        {
          id: "somatic_mutation",
          score: 0.88467979591882,
        },
      ],
    },
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
