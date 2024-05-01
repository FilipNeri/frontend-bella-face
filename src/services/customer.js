import { http } from "./config";

export default {
  login: (login,password) => {
    return http.post("customer",{login,password});
  },
};
