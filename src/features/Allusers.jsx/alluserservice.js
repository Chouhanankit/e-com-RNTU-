import axios from "axios";

// const URL = "http://localhost:5005";

const Allusers = async () => {
  const response = await axios.get("https://best-deal-backend.onrender.com/api/user");
//   localStorage.setItem("users", JSON.stringify(response.data));
  return response.data;
};

export default Allusers;
