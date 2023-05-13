import fetch from "cross-fetch";

export let BACKEND_URL = "http://localhost:9000";

export interface IRequest {
  endpoint: string;
  method: string;
  payload?: any;
}

export default function request({
  endpoint,
  method,
  payload,
}: IRequest): Promise<any> {
  const url = `${BACKEND_URL}/${endpoint}`;
  const fetchOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return fetch(url, fetchOptions).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
  });
}
