import { key } from "../config";

const formatResponse = response => {
  return response.json().then(data => {
    return { data, status: response.status };
  });
};

const sentiment = text => {
  const url = "https://apiv2.indico.io/sentiment";
  const data = { api_key: key, data: text };
  return fetch(url, {
    body: JSON.stringify(data),
    method: "post"
  }).then(formatResponse);
};

export default { sentiment };
