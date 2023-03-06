import axios from "axios";

const backend_endpoint = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { "Content-Type": "multipart/form-data" },
});

const tmdb_endpoint = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export { backend_endpoint, tmdb_endpoint }
