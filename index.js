const axios = require("axios");
const http = require("http");
require("dotenv").config();
const server = http.createServer();
server.listen(3002, () => {
  console.log("SERVER RUNNING");
});
const apiUrl = process.env.API_URL;

const callApi = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log("API Response:", response.data);
  } catch (error) {
    console.error("API Error:", error.message);
  }
};

const intervalId = setInterval(callApi, 10 * 60 * 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Lập lịch đã dừng sau 24 giờ.");
// }, 24 * 60 * 60 * 1000);
