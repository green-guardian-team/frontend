<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Formulario</h1><br>
        <input  type="text" v-model="my_field"><br>
        <div v-if="my_field == 'A'">
          exibi se for true<br>
          <input  type="text" v-model="my_field"><br>
          <input  type="text" v-model="my_field"><br>
          <input  type="text" v-model="my_field"><br>
        </div>
        <div v-else>
          exibi se for false<br>
          <input  type="text" v-model="my_field"><br>
          <input  type="text" v-model="my_field"><br>
        </div>
        {{my_field}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      my_field: '',
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped>
</style>
