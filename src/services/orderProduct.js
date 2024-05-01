import { http } from "./config";

export default {
  getCart: () => {
    return http.get("order-product");
  },

  addToCart: (orderId, productId, quantity) => {
    return http.post("order-product", {
      orderId,
      productId,
      quantity,
    });
  },
  remove: (orderId, productId) => {
    return http.delete(`order-product/${orderId}/${productId}`);
  },
  quantity: (orderId, productId, quantity) => {
    return http.put(`order-product`, {
        orderId, productId, quantity
    });
  },
  finish:() => {
    return http.delete(`order-product`);
  },
};
