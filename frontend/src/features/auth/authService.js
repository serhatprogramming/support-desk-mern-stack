import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "/api/users/";

// register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (!response.data.message === "Invalid Credentials") {
    localStorage.setItem("user", JSON.stringify(response.data));
  } else {
    toast.error("invalid credentials");
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
