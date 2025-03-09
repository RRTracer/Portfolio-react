import axios from "axios";

const urlApi = "http://127.0.0.1:8000/api/cve/";
const CveTop5 = async () => {
  try {
    const response = await axios.get(`${urlApi}top5/`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const GetAllCve = async () => {
  try {
    const response = await axios.get(`${urlApi}all/`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export { CveTop5, GetAllCve };
