import axios from "axios";

export default function fetchListGoogle() {
  console.log("Fetch from google");
  return axios.get("/axios_google");
}
