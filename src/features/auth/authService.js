import axios from "axios";

const URL = "https://e-com-backend-2zbp.onrender.com"

const register = async (formData) => {
  const response = await axios.post(URL + "/api/user/register", formData);
  localStorage.setItem("users", JSON.stringify(response.data));
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(URL + "/api/user/login", formData);
  localStorage.setItem("users", JSON.stringify(response.data));
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;