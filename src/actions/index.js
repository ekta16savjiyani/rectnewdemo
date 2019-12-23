import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost/reactnewdemo/",
  headers: {
    "Content-Type": "application/json"
  }
})
