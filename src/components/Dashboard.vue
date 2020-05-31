<template>
  <div>
    <div class="row">
      <div class="icon-cards-row">
        <div class="dashboard-numbers">
          <a href="#" class="card">
            <div class="card-body text-center">
              <i class="iconsminds-clock"></i>
              <p class="card-text mb-0">Confirmados</p>
              <p class="lead text-center">{{data.totalConfirmed}}</p>
            </div>
          </a>
          <a href="#" class="card">
            <div class="card-body text-center">
              <i class="iconsminds-basket-coins"></i>
              <p class="card-text mb-0">Recuperados</p>
              <p class="lead text-center">{{data.totalRecovered}}</p>
            </div>
          </a>

          <a href="#" class="card">
            <div class="card-body text-center">
              <i class="iconsminds-arrow-refresh"></i>
              <p class="card-text mb-0">Casos fatais</p>
              <p class="lead text-center">{{data.totalDeaths}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <hr />
      Listagem do pais {{pais}} por dia:
      <ol class="list">
        <li  class="list-group-item" v-for="(item, key) in dataPorDia" v-bind:key="key">
          <b>last_updated</b> {{item.last_updated}}
          <b>total_confirmed</b> {{item.total_confirmed}}, 
          <b>total_deaths</b> {{item.total_deaths}}, 
          <b>total_recovered</b> {{item.total_recovered}}
          </li>
      </ol>
      <button v-on:click="carregarDados">Carregar dados</button>
      <router-link to="/formulario">Go to Bar</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      dataPorDia: [],
      pais: "BR"
    };
  },
  mounted() {
    this.carregarDados();
    this.carregarDadosPorDia();
  },
  methods: {
    carregarDados: function() {
      this.axios
        .get(
          `https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=${this.pais}`
        )
        .then(response => {
          this.data = response.data[0];
        });
    },
    carregarDadosPorDia: function() {
      this.axios
        .get(
          `https://api.coronatracker.com/v4/analytics/trend/country?countryCode=${this.pais}&startDate=2020-05-18&endDate=2020-06-01`
        )
        .then(response => {
          this.dataPorDia = response.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
