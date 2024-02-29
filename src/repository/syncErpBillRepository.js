const { connect } = require("../configs/mysql");

const syncErpBillRepository = {
  checkDoCodeFromNteBill: (body) => {
    const { doCode } = body;
    const sql = `SELECT * FROM \`nte_bill\` where do_code = '${doCode}'`;
    return new Promise((resolve, reject) => {
      connect.query(sql, function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateDoCodeFromNteBill: (body) => {
    const { doCode, statusId } = body;
    const sql = `UPDATE \`nte_bill\` SET status_id = '${statusId}' WHERE do_code = '${doCode}'`;
    return new Promise((resolve, reject) => {
      connect.query(sql, function (err, results) {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },
};

module.exports = syncErpBillRepository;
