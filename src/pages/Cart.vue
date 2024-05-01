<template>
  <div class="container">
    <div class="toolbar">
      <h2 class="title">Bella Face</h2>
    </div>
    <h2 class="tittle-item">Carrinho</h2>
    <div style="display: flex; width: 70%; border: solid 0.5px #75858c"></div>
    <div class="menu">
      <div v-for="(ordemProduct, key) in cart" :key="key">
        <div class="product">
          <img
            src="https://images.tcdn.com.br/img/img_prod/1130295/produto_teste_47_1_06236ceac4ed4fafdbf22d7cbf23bf7e.png"
            width="100px"
            height="100px"
          />
          <label class="name-product">{{ ordemProduct.product.name }}</label>
          <label class="value-product"
            >R$ {{ ordemProduct.unitPrice.toFixed(2) }}</label
          >
          <img
            @click="add(ordemProduct)"
            src="@/images/plus.png"
            width="30px"
            height="30px"
          />
          <label class="value-product">{{ ordemProduct.quantity }}</label>
          <img
            @click="decrease(ordemProduct)"
            src="@/images/minus.png"
            width="30px"
            height="30px"
          />
          <img
            @click="remove(ordemProduct)"
            src="@/images/trash.png"
            width="30px"
            height="30px"
          />
        </div>
      </div>
    </div>
    <button class="botao" @click="openModal()">Continuar</button>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h4 style="color: #000">Confira seus itens!</h4>
        <div class="container-cart-modal">
          <div
            class="cart-modal"
            v-for="(ordemProduct, key) in cart"
            :key="key"
          >
            <img
              src="https://images.tcdn.com.br/img/img_prod/1130295/produto_teste_47_1_06236ceac4ed4fafdbf22d7cbf23bf7e.png"
              width="25px"
              height="25px"
            />
            <label class="name-product-modal">{{
              ordemProduct.product.name
            }}</label>
            <label class="value-product-modal"
              >R$ {{ ordemProduct.totalPrice.toFixed(2) }}</label
            >
            <img
              @click="remove(ordemProduct)"
              src="@/images/trash.png"
              width="20px"
              height="20px"
            />
          </div>
        </div>
        <div style="display: flex; place-content: center; margin: 5px">
          <textarea
            v-model="commentary"
            placeholder="Adicione algum comentário"
          ></textarea>
        </div>
        <div>
          <button class="botao" @click="finishPurchase()">
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderProduct from "@/services/orderProduct";
import Order from "@/services/order";
export default {
  name: "Cart",
  data() {
    return {
      showModal: false,
      cart: [],
      commentary: "",
      order: {
        id: "",
        totalOrder: 0,
        comments: "",
      },
    };
  },
  methods: {
    openModal() {
      if (this.cart.length > 0) {
        this.showModal = true;
      } else {
        alert("Carrinho vazio");
      }
    },
    closeModal() {
      this.showModal = false;
    },
    async getCart(orderId) {
      var response = await OrderProduct.getCart(orderId).catch((error) => {
        console.error("Error fetching data:", error);
      });
      this.cart = response.data;
    },
    async getOrder() {
      var customerId = localStorage.getItem("id");
      var response = await Order.createOrder(customerId).catch((error) => {
        console.error("Error fetching data:", error);
      });
      this.order = response.data;
      this.getCart(this.order.id);
    },
    async add(ordemProduct) {
      await OrderProduct.quantity(
        ordemProduct.id.orderId,
        ordemProduct.id.productId,
        ordemProduct.quantity + 1
      ).catch((error) => {
        console.error("Error fetching data:", error);
      });
      this.getCart(this.order.id);
    },
    async decrease(ordemProduct) {
      if (ordemProduct.quantity > 0) {
        await OrderProduct.quantity(
          ordemProduct.id.orderId,
          ordemProduct.id.productId,
          ordemProduct.quantity - 1
        ).catch((error) => {
          console.error("Error fetching data:", error);
        });
        this.getCart(this.order.id);
      }
    },
    async remove(ordemProduct) {
      await OrderProduct.remove(
        ordemProduct.id.orderId,
        ordemProduct.id.productId
      ).catch((error) => {
        console.error("Error fetching data:", error);
      });
      this.getCart(this.order.id);
    },
    valorTotal() {
      return this.cart.reduce((accumulator, order) => {
        return accumulator + order.totalPrice;
      }, 0);
    },
    async finishPurchase() {
      if (this.cart.length > 0) {
        await Order.finishOrder(
          this.cart[0].id.orderId,
          this.commentary,
          this.valorTotal()
        ).catch((error) => {
          console.error("Error fetching data:", error);
        });
        await OrderProduct.finish().catch((error) => {
          console.error("Error fetching data:", error);
        });
        this.$router.push("/products");
      } else {
        alert("Carrinho vazio");
      }
    },
  },
  mounted() {
    this.getOrder();
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
}
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  flex-direction: column;
}

.modal {
  display: flex;
  place-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #fefefe;
  border: 1px solid #888;
  width: 50%;
  height: 100%;
  position: relative;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.container-close {
  display: flex;
  place-content: end;
  width: 95%;
}

.botao {
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
.name-product-modal {
  color: #000;
  font-size: 12px;
}
.value-product-modal {
  color: #000;
  font-size: 14px;
  font: bold;
}
.container-cart-modal {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
  overflow-y: auto;
}
.cart-modal {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.container-cart-modal::-webkit-scrollbar {
  width: 5px;
}

.container-cart-modal::-webkit-scrollbar-track {
  background: transparent;
}

.container-cart-modal::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0);
}

.container-cart-modal::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #75858c;
  border-radius: 8px;
  outline: none;
  resize: vertical;
}

textarea:focus {
  border-color: #4caf50;
}
</style>