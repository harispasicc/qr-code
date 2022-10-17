import axios from "axios";
import config from "../config/config";

const apiUrl = config.apiPath;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const listQr = async () => {
  try {
    const res = await axios.get(apiUrl + "/api/qrcode");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const insertTitle = title => {
  try {
    return axios.post(apiUrl + "/api/qrcode", title);
  } catch (error) {
    console.log(error);
  }
};

const remove = async id => {
  try {
    const res = await axios.delete(apiUrl + `/api/qrcode/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { insertTitle, listQr, remove };
