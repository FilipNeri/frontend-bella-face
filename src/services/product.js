import { http } from "./config";

export default {
  getProducts: () => {
    return http.get("product");
  },
};
