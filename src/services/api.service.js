import formatData from "../utility/utility";

async function getData() {
  const BASE_URL = "https://api.platform.opentargets.org/api/v4/graphql";

  const query = {
    operationName: "lungCarcinomaAssociatedTargets",
    variables: {},
    query: `query lungCarcinomaAssociatedTargets {
    disease(efoId: "EFO_0001071") {
      associatedTargets(page: { index: 0, size: 10 }) {
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

  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return formatData(data.data.disease.associatedTargets.rows);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getData;
