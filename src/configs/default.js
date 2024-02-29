const index = {
  syncErpBill: {
    infoBill: {
      api: "https://erpclientws.ntx.vn/v1/thbill/info-bill",
      // api: "http://localhost:50301/v1/thbill/info-bill",
      Authorization: "rNeAw3knaAmb3DaSUNUpPfedkDRc6xB3",
    },
    pushBillERP: {
      api: "https://bws.ntx.vn/v1/pushBillERP",
    },
  },
};
module.exports = index;
