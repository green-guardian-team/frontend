<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Formulario</h1>
        <p>Para ajudar a aprimorar os nossos dados de pesquisa, por favor responda:</p>
        <br />
        <p>Você ou alguém próximo já esteve com COVID-19?</p>
        <div>
          <input type="radio" value="sim" v-model="covid" />
          <label for="sim">Sim</label>
        </div>
        <div>
          <input type="radio" value="conheco" v-model="covid" />
          <label for="conheco">Não, mas conheço alguém que já teve</label>
        </div>
        <div>
          <input type="radio" value="nao" v-model="covid" />
          <label for="nao">Não e não conheço ninguém que teve COVID-19</label>
        </div>
        <label for="cep">CEP:</label>
        <input type="text" v-model="cep" />
        <button type="submit" value="Enviar" v-on:click="envio()">Enviar</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      my_field: "",
      covid: "",
      cep: ""
    };
  },
  methods: {
    envio: function() {
      this.axios
        .post(
          `https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${this.pais}`,
          {
            covid: this.covid,
            cep: this.cep
          }
        )
        .then(response => {
          this.data = response.data[0];
        });
    }
  }
};
</script>
<style scoped>
</style>
