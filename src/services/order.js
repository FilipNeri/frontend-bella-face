import { http } from "./config";

export default {
  createOrder: (customerId) => {
    return http.post("order", { customerId });
  },
  finishOrder: (orderId, commentary, totalOrder) => {
    return http.post("order/finish-order", { orderId, commentary, totalOrder });
  },
};
