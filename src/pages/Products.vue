<template>
  <div class="container">
    <div class="toolbar">
      <h2 class="title">Bella Face</h2>
    </div>
    <h2 class="tittle-item">Novidades abaixo!!</h2>
    <div style="display: flex; width:70%; border: solid 0.5px #000;"></div>
    <div class="menu">
    <div  v-for="(index, key) in 5" :key="key">
      <div class="product">
        <img src="https://m.media-amazon.com/images/I/71wLcthlJhL._AC_SL1500_.jpg" width="100px" height="100px"/>
        <label class="name-product">Gel de limpeza</label>
        <label class="value-product">R$ 90,00</label>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String,
  },
  methods: {
    toCarrinho() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.toolbar{
  background: #75858c;
  display: flex;
  place-content: center;
  width:100%;
}
.tittle-item{
  color:#75858c ;
}
.title{
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
  place-content: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  background-color: #f8f8f8;
  border: 1px solid #ccc; 
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 20px; 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
  color:#000

}
.name-product{
  color: #000;
  font-size: 12px;
  margin-top: 8px;
}
.value-product{
  font-size: 14px;
  font: bold;
}
.menu{
  display: flex;
  justify-content: space-between;
  align-content: center;
  width:70%;
  margin-top: 16px;
  flex-wrap: wrap;
}


</style>
