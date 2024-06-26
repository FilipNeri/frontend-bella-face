import { http } from "./config";

export default {
  getCart: (orderId) => {
    return http.get(`order-product/${orderId}`);
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
