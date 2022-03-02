import getData from "./api.service";

it("fetch data", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            disease: {
              associatedTargets: {
                rows: [
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
                        score: 0.9984311421654729,
                      },
                      {
                        id: "genetic_association",
                        score: 0.8005630490617544,
                      },
                      {
                        id: "somatic_mutation",
                        score: 0.9292245812438958,
                      },
                    ],
                  },
                ],
              },
            },
          },
        }),
    })
  );
  const expectedReturn = [
    {
      approvedName: "epidermal growth factor receptor",
      approvedSymbol: "EGFR",
      chartDataArray: [
        0.9943366601030083, 0.19744986909916087, 0.9417342333554943,
        0.9984311421654729, 0.8005630490617544, 0.9292245812438958,
      ],
      id: "ENSG00000146648",
      label: [
        "Known Drug",
        "Rna Expression",
        "Affected Pathway",
        "Literature",
        "Genetic Association",
        "Somatic Mutation",
      ],
      score: 0.8900405222703004,
    },
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

  const data = await getData(
    process.env.REACT_APP_API_URL,
    "POST",
    header,
    JSON.stringify(query)
  );

  expect(data).toEqual(expectedReturn);
  expect(fetch).toHaveBeenCalledTimes(1);
});
