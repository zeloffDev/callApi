const { matrixBillStatusAdempiereToNte } = require("../constant");

const covertBillStatus = (key) => {
  if (matrixBillStatusAdempiereToNte?.[key]) {
    return matrixBillStatusAdempiereToNte?.[key].Id;
  } else {
    return null;
  }
};

module.exports = {
  covertBillStatus,
};
