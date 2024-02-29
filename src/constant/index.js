const matrixBillStatusAdempiereToNte = {
  BPU: {
    labelTHBill: "Chờ Sử Dụng",
    Id: 18,
    value: "WaitingForPacking",
    label: "Chờ đóng gói",
  },
  KCB: {
    labelTHBill: "Đã Được Tạo",
    Id: 2,
    value: "Confirmed",
    label: "Đã tiếp nhận",
  },
  MRC: {
    labelTHBill: "Chuyển Hoàn Thành Công",
    Id: 7,
    value: "Returned",
    label: "Đã chuyển hoàn",
  },
  NRT: {
    labelTHBill: "Đang Chuyển Hoàn",
    Id: 8,
    value: "Returning",
    label: "Đang chuyển hoàn",
  },
  AIS: {
    labelTHBill: "Đã Tạo",
    Id: 1,
    value: "Open",
    label: "Vận đơn mới",
  },
  PRI: {
    labelTHBill: "Đã Tiếp Nhận Yêu Cầu",
    Id: 2,
    value: "Confirmed",
    label: "Đã tiếp nhận",
  },
  CIW: {
    labelTHBill: "Nhập Kho",
    Id: 14,
    value: "InWareHouse",
    label: "Nhập kho",
  },
  JIB: {
    labelTHBill: "Đang Luân Chuyển",
    Id: 10,
    value: "InWareHouse",
    label: "Đang luân chuyển",
  },
  DIT: {
    labelTHBill: "Đang Luân Chuyển",
    Id: 10,
    value: "Shipping",
    label: "Đang luân chuyển",
  },
  EOD: {
    labelTHBill: "Đang Giao Hàng",
    Id: 4,
    value: "Delivering",
    label: "Đang giao hàng",
  },
  FBC: {
    labelTHBill: "Giao Thành Công",
    Id: 5,
    value: "Delivered",
    label: "Giao thành công",
  },
  GBV: {
    labelTHBill: "Đã Hủy",
    Id: 6,
    value: "Delivered",
    label: "Hủy",
  },
  HEB: {
    labelTHBill: "Đang Luân Chuyển",
    Id: 10,
    value: "Shipping",
    label: "Đang Luân Chuyển",
  },
  ICB: {
    labelTHBill: "Đã Chốt",
    Id: 2,
    value: "Confirmed",
    label: "Đã tiếp nhận",
  },
  LPC: {
    labelTHBill: "Đã Lấy Hàng",
    Id: 3,
    value: "Picked",
    label: "Đã lấy hàng",
  },
  OEP: {
    labelTHBill: "Lỗi Khi Nhận Hàng",
    Id: 12,
    value: "ErrorPicked",
    label: "Lỗi lấy hàng",
  },
  QIU: {
    labelTHBill: "Chờ giao lại",
    Id: 16,
    value: "Redelivery",
    label: "Chờ giao lại",
  },
  FUD: {
    labelTHBill: "Delay Giao Hàng",
    Id: 13,
    value: "ErrorDelivery",
    label: "Delay Giao Hàng",
  },
  WFA: {
    labelTHBill: "Chờ Duyệt Hoàn",
    Id: 15,
    value: "PendingRevert",
    label: "Chờ duyệt hoàn",
  },
  RFA: {
    labelTHBill: "Đã Duyệt Hoàn",
    Id: 17,
    value: "ApprovedRevert",
    label: "Đã Duyệt Hoàn",
  },
  UDE: {
    labelTHBill: "Không Giao Được",
    Id: 9,
    value: "NotDelivery",
    label: "Không Giao Được",
  },
};

module.exports = {
  matrixBillStatusAdempiereToNte,
};
