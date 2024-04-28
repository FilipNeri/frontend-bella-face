<template>
  <div class="hello">
   Produtos
   <button @click="toCarrinho()">Teste</button>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: {
    msg: String
  },
  methods:{
    toCarrinho(){
      this.$router.push('/cart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
