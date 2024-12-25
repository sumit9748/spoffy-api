import axios from "axios";

const BASE_URL = "https://spoffy-api.onrender.com/connect/";
const DEV_URL = "http://localhost:8000/connect/"

const user = JSON.parse(localStorage.getItem("persist:root"))?.spoffyUser;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: DEV_URL,
});

export const userRequest = axios.create({
  baseURL: DEV_URL,
  header: { token: `Bearer ${TOKEN}` },
});
