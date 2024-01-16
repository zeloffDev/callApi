const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
require("dotenv").config();
const server = http.createServer(app);
server.listen(3002, () => {
  console.log("SERVER RUNNING");
});
const apiUrl = process.env.API_URL;
const testApi = process.env.TEST_API_URL;
const time = process.env.TIME;
// const day = process.env.DAY;

app.use("/", (req, res) => {
  res.status(200).json("Test Request");
});

const callApi = async () => {
  try {
    const response = await axios.get(apiUrl);
    const testRequest = await axios.get(testApi);

    console.log("API Response:", response.data, testRequest.data);
  } catch (error) {
    console.error("API Error:", error.message);
  }
};

const intervalId = setInterval(callApi, Number(time) * 60 * 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, Number(day) * 24 * 60 * 60 * 1000);
