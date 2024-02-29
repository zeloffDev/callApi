const syncErpBillController = require("../controllers/syncErpBillController");
const router = require("express").Router();

router.put("/", syncErpBillController.syncErpBill);

module.exports = router;
