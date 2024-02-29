const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
require("dotenv").config();
const syncErpBillRouter = require("./src/routes/syncErpBillRouter");

const server = http.createServer(app);

server.listen(3002, () => {
  console.log("SERVER RUNNING");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/sync-erp-bill", syncErpBillRouter);
