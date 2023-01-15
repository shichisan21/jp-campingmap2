import axios from "axios";

export default function FetchList(code) {
  console.log("Fetch code sended--->", code);
  return axios.get("/axios", {
    params: {
      prefCode: code,
    },
  });
}
