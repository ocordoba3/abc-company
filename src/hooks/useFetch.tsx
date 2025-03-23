import { MethodType } from "../interfaces/fetch";

const useFetch = () => {
  async function fetchInstance(
    endpoint: string,
    method: MethodType = "GET",
    body?: unknown
  ): Promise<unknown> {
    const BASE_URL = "https://api.jsoning.com/mock/vh5hrrlwqk";

    const resp = await fetch(`${BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .catch((error) => console.error(error));

    return resp;
  }

  return {
    fetchInstance,
  };
};

export default useFetch;
