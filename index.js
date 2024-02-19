const axios = require("axios");
const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();
const server = http.createServer(app);
server.listen(3002, () => {
  console.log("SERVER RUNNING");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/GetKmInDay", async (req, res) => {
  try {
    const response = await callApi(req.body);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json("Error");
  }
});

const callApi = async (body) => {
  try {
    const response = await axios.post(
      "https://data.dvbk.vn/api/QLVT/GetKmInDay",
      body,
      {
        headers: {
          Authorization: "Basic dHRzb25saW5lOnFsdnR0b2l1dQ==",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("API Error:", error.message);
  }
};
