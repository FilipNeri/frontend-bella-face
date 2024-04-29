<template>
  <div class="container animacao-aparecer">
    <div class="container-login">
      <h4>Login:</h4>
      <input type="text" class="input" v-model="login" placeholder="login" />
    </div>
    <div class="container-senha">
      <h4>Senha:</h4>
      <input type="text" class="input" v-model="senha" placeholder="senha" />
    </div>
    <button class="botao" @click="toProducts()">Logar</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: "",
      senha: "",
    };
  },
  methods: {
    toProducts() {
      this.$router.push("/products");
    },
    animation() {
      setTimeout(() => {
        document
          .querySelector(".animacao-aparecer")
          .classList.add("aparecendo");
      }, 100);
    },
  },
  mounted() {
    this.animation();
  },
};
</script>
<style scoped>
h4 {
  color: #8fa1a6;
  font-size: 18px;
  font-weight: bold;
}
.container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f2f2f2;
}

.container-login {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.container-senha {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
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

.input {
  background-color: #8fa1a6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(143, 161, 166, 0.8);
}
.animacao-aparecer {
  transform: translateX(-100%);
  transition: transform 0.5s ease;
}

.animacao-aparecer.aparecendo {
  transform: translateX(0);
}
</style>
