import { API_URL } from "./urls.js";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET",
    // add headers if any
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, "Failed to fetch data");
  }
};
