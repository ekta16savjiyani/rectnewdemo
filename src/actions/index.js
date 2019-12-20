import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost/redux-crud-example-master/",
  headers: {
    "Content-Type": "application/json"
  }
})
