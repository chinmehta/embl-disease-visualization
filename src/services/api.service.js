import formatData from "../utility/utility";

async function getData(url, method = "GET", headers, body) {
  const requestObj = {
    method,
    headers,
    body,
  };

  return fetch(url, requestObj)
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
