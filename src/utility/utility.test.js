import formatData from "./utility";

it("called with no data as args", () => {
  const output = formatData();
  expect(output).toEqual([]);
});

it("called with data as args", () => {
  const input = [
    {
      target: {
        id: "ENSG00000146648",
        approvedSymbol: "EGFR",
        approvedName: "epidermal growth factor receptor",
      },
      score: 0.8900405222703004,
      datatypeScores: [
        {
          id: "known_drug",
          score: 0.9943366601030083,
        },
      ],
    },
  ];
  const expectedOutout = [
    {
      id: "ENSG00000146648",
      approvedSymbol: "EGFR",
      approvedName: "epidermal growth factor receptor",
      score: 0.8900405222703004,
      label: ["Known Drug"],
      chartDataArray: [0.9943366601030083],
    },
  ];
  const output = formatData(input);
  expect(output).toEqual(expectedOutout);
});
