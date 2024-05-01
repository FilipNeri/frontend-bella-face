import { http } from "./config";

export default {
  createOrder: (customerId) => {
    return http.post("order",{customerId});
  },
  addCommentary: (orderId,commentary) => {
    return http.post("order/add-commentary",{orderId,commentary});
  },
};
