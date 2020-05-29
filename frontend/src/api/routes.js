import axios from "axios";
import queryString from "query-string";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {},
  paramsSerializer: queryString.stringify,
});

function findPiis(formData) {
  return API.post("find-piis", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

function computeScores(payload) {
  return API.post("score", payload);
}

function fetchTags() {
  return API.get("tags");
}

function anonymizeFile(formData) {
  return API.post("anonymize", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    responseType: "blob",
  });
}

export { findPiis, computeScores, fetchTags, anonymizeFile };