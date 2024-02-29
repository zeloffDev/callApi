const axios = require("axios");
const md5 = require("md5");
const { syncErpBill } = require("../configs/default");

const syncErpBillService = {
  infoBill: async (body) => {
    try {
      const { doCode } = body;
      const response = await axios.get(
        `${syncErpBill.infoBill.api}/${doCode}`,
        {
          headers: {
            Authorization: syncErpBill.infoBill.Authorization,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error.message);
    }
  },
  pushBillERP: async (body) => {
    try {
      const { doCode } = body;
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = String(today.getFullYear());
      const formattedDate = day + month + year;
      const authorization = md5(`NTX${formattedDate}`);
      const response = await axios.put(
        `${syncErpBill.pushBillERP.api}/${doCode}`,
        null,
        {
          headers: {
            Authorization: authorization.toLowerCase(),
          },
        }
      );
      return response;
    } catch (error) {
      console.error("API Error:", error.message);
    }
  },
};

module.exports = syncErpBillService;
