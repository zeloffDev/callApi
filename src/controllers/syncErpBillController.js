const syncErpBillService = require("../services/syncErpBillService");
const syncErpBillRepository = require("../repository/syncErpBillRepository");
const { covertBillStatus } = require("../utils/syncErpBill");

const syncErpBillController = {
  syncErpBill: async (req, res) => {
    try {
      const body = req.body;
      const responseInfoBill = await syncErpBillService.infoBill(body);
      const newBody = {
        doCode: responseInfoBill?.data?.do_code,
        statusId: covertBillStatus(responseInfoBill?.data?.billstatus),
      };
      const checkDoCode = await syncErpBillRepository.checkDoCodeFromNteBill(
        newBody
      );
      if (Array.isArray(checkDoCode) && checkDoCode.length) {
        const responseUpdateDoCode =
          await syncErpBillRepository.updateDoCodeFromNteBill(newBody);
        if (responseUpdateDoCode.affectedRows > 0) {
          await syncErpBillService.pushBillERP(newBody);
        }
        res.status(200).json("Cập nhật thành công");
      } else {
        res.status(500).json("Không tìm thấy doCode");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("lỗi");
    }
  },
};

module.exports = syncErpBillController;
