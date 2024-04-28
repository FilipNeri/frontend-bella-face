<template>
  <div class="container">
    <div class="container-login">
      <h3>Login:</h3>
      <input type="text" class="input" v-model="login" placeholder="login" />
    </div>
    <div class="container-senha">
      <h3>Senha:</h3>
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
  },
};
</script>
<style scoped>
h3 {
  color: #8FA1A6;
  font-size: 24px;
  font-weight: bold;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #F2F2F2;
}

.container-login{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.container-senha{
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}
.botao {
  margin: 8px;
  background-color: #8FA1A6; 
  color: white; 
  padding: 10px 20px;
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 16px; 
}

.botao:hover {
  background-color: #75858C; 
}

.input {
  background-color: #8FA1A6; 
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

</style>
