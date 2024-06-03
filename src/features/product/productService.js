import axios from "axios";
import { URL } from "../../url";

const allproducts = async () => {
  const response = await axios.get(URL + "/api/product");
  return response.data;
};

const singleproduct = async (id) => {
  const response = await axios.get(URL + "/api/products/" + id);
  return response.data;
};

const createproduct = async (formData) => {
  const response = await axios.post(URL + "/api/product", formData);
  localStorage.setItem("users", JSON.stringify(response.data));
  return response.data;
};

export { allproducts, singleproduct , createproduct };
