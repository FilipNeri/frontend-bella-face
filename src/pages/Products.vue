<template>
  <div class="container">
    <div class="toolbar">
      <h2 class="title">Bella Face</h2>
    </div>
    <h2 class="tittle-item">Novidades abaixo!!</h2>
    <div style="display: flex; width: 70%; border: solid 0.5px #000"></div>
    <div class="menu">
      <div v-for="(product, key) in products" :key="key">
        <div class="product" @click="addToCart(product)">
          <img
            src="https://m.media-amazon.com/images/I/71wLcthlJhL._AC_SL1500_.jpg"
            width="100px"
            height="100px"
          />
          <label class="name-product">{{ product.name }}</label>
          <label class="value-product">R$ {{ product.price.toFixed(2) }}</label>
        </div>
      </div>
    </div>
    <button @click="toCart()" class="botao">Cart {{ cart.length }}</button>
  </div>
</template>

<script>
import Product from "@/services/product";
import OrderProduct from "@/services/orderProduct";
import Order from "@/services/order";
export default {
  name: "Products",
  data() {
    return {
      products: [],
      cart: [],
      order: {
        id: "",
        totalOrder: 0,
        comments: "",
      },
    };
  },
  methods: {
    toCart() {
      this.$router.push("/cart");
    },
    async getProducts() {
      var response = await Product.getProducts();
      this.products = response.data;
    },
    async getCart() {
      var response = await OrderProduct.getCart().catch((error) => {
        console.error("Error fetching data:", error);
      });
      this.cart = response.data;
    },
    async addToCart(product) {
      if (this.order.id == "") {
        var customerId = localStorage.getItem("id");
        var response = await Order.createOrder(customerId).catch((error) => {
          console.error("Error fetching data:", error);
        });
        this.order = response.data;
      }
      OrderProduct.addToCart(this.order.id, product.id, "1")
        .then((response) => {
          if (response.status == 200) {
            alert("Produto adicionado ao carrinho");
            this.getCart();
          }
        })
        .catch(() => {
          alert("Produto já adicionado");
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style scoped>
.toolbar {
  background: #75858c;
  display: flex;
  place-content: center;
  width: 100%;
}
.tittle-item {
  color: #75858c;
}
.title {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f2f2f2;
  position: relative;
}
.botao {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
  background-color: #8fa1a6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.botao:hover {
  background-color: #75858c;
}
.product {
  display: flex;
  place-content: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  color: #000;
}
.name-product {
  color: #000;
  font-size: 12px;
  margin-top: 8px;
}
.value-product {
  font-size: 14px;
  font: bold;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 70%;
  margin-top: 16px;
  flex-wrap: wrap;
}
</style>
