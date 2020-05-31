<template>
  <div class="container">
    <div class="row">
      <div class="card card-body text-center col-md-4">
        <p id="numeric" class="lead color-red red-bg-number text-center card-text pb-5 pt-5 mb-0 bold card-text-radius-top">{{data.totalConfirmed}}</p>
        <p
          class="card-text color-red red-bg mb-0 pb-3 pt-3 bold card-text-radius-bottom"
        >Confirmados</p>
      </div>
      <div class="card card-body text-center col-md-4 mr-5 ml-5">
        <p id="numeric" class="lead color-green green-bg-number text-center card-text pb-5 pt-5 mb-0 bold card-text-radius-top"
        >{{data.totalRecovered}}</p>
        <p
          class="card-text color-green green-bg mb-0 pb-3 pt-3 bold card-text-radius-bottom"
        >Recuperados</p>
      </div>
      <div class="card card-body text-center">
        <p id="numeric" class="lead color-neutral neutral-bg-number text-center card-text pb-5 pt-5 mb-0 bold card-text-radius-top"
        >{{data.totalDeaths}}</p>
        <p
          class="card-text color-neutral neutral-bg mb-0 pb-3 pt-3 bold card-text-radius-bottom"
        >Casos fatais</p>
      </div>
    </div>
    <div class="row mt-4 graph">
      <div class="card">
        <h2 class="mt-3">Consulte dados da COVID-19 em tempo real!</h2>
        <hr />
        <div class="d-flex justify-content-between">
          <div class="flex-start">
            <!-- <select v-model="pais">
              <option v-for="(item, key) in paises" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select> -->
            <label for="dataAnterior" class="ml-3">Selecione uma data do passado que deseja visualizar! </label>
            <select v-model="diaAnterior">
              <option v-for="(item, key) in diasAnteriores" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select> 
            <select v-model="mesAnterior">
              <option v-for="(item, key) in mesesAnteriores" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select>
            <select v-model="anoAnterior">
              <option v-for="(item, key) in anosAnteriores" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select>
          </div>
          <div class="flex-end">
            <label for="dataAnterior">Selecione até qual data você quer ver sobre a COVID! </label>
            <select v-model="dia">
              <option v-for="(item, key) in dias" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select>
            <select v-model="mes">
              <option v-for="(item, key) in meses" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select>
            <select v-model="ano" class="mr-3">
              <option v-for="(item, key) in anos" v-bind:key="key" v-bind:value="item">{{item}}</option>
            </select>  
          </div>
        </div>
        <div id="container-graph" class="grafico mt-3 mb-3"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      dataPorDia: [],
      pais: "BR",
      paises: ["BR", "US", "CA", "FR"],
      anoAnterior: "2020",
      anosAnteriores: ["2019", "2020", "2021"],
      ano: "2020",
      anos: ["2019", "2020", "2021"],
      mesAnterior: "05",
      mesesAnteriores: ["02", "03", "04", "05", "06", "07"],
      mes:"06",
      meses: ["02", "03", "04", "05", "06", "07"],
      diaAnterior: "22",
      diasAnteriores: ["01","02" ,"03" ,"04" ,"05" ,"06" ,"07" ,"08" ,"09" ,"10" ,"11" ,"12" ,"13" ,"14" ,"15" ,"16" ,"17","18" ,"19" ,"20" ,"21" ,"22" ,"23" ,"24" ,"25" ,"26" ,"27" ,"28" ,"29" ,"30" ,"31"],
      dia:"01",
      dias: ["01","02" ,"03" ,"04" ,"05" ,"06" ,"07" ,"08" ,"09" ,"10" ,"11" ,"12" ,"13" ,"14" ,"15" ,"16" ,"17","18" ,"19" ,"20" ,"21" ,"22" ,"23" ,"24" ,"25" ,"26" ,"27" ,"28" ,"29" ,"30" ,"31"]
    };
  },
  watch: {
    pais: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    anoAnterior: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    mesAnterior: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    diaAnterior: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    ano: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    mes: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    },
    dia: function () {
      this.carregarDados();
      this.carregarDadosPorDia();
    }
  },
  mounted() {
    let d = new Date()
    this.ano = d.getFullYear();
    this.mes = "0" +(d.getMonth() + 1);
    this.dia = d.getDate();
    this.anoAnterior = d.getFullYear();
    this.mesAnterior = "0" +d.getMonth();
    this.diaAnterior = d.getDate() -1;
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
          `https://api.coronatracker.com/v4/analytics/trend/country?countryCode=${this.pais}&startDate=${this.anoAnterior}-${this.mesAnterior}-${this.diaAnterior}&endDate=${this.ano}-${this.mes}-${this.dia}`
        )
        .then(response => {
          this.dataPorDia = response.data;
          if(response.data != "Invalid date" && response.data.length >= 1){
            this.carregaGrafico();
          }else{
            document.getElementById('container-graph').textContent = "Busca inválida"
          }
        }, error => {
            document.getElementById('container-graph').textContent = "Busca inválida"
        });
    },
    carregaGrafico: function() {
      let confirmados = this.dataPorDia.map(function(item) {
        return item.total_confirmed;
      });

      let recuperados = this.dataPorDia.map(function(item) {
        return item.total_recovered;
      });

      let mortos = this.dataPorDia.map(function(item) {
        return item.total_deaths;
      });

      let datas = this.dataPorDia.map(function(item) {
        let tempo = item.last_updated.split("T");
        let dados = tempo[0].split("-");
        let ano = dados[0];
        let mes = dados[1];
        let dia = dados[2];
        return dia + "/" + mes + "/" + ano;
      });

      Highcharts.chart("container-graph", {
        title: {
          text: "Gráfico do número de casos por dia"
        },

        xAxis: {
          type: "spline",
          categories: datas,
          accessibility: {
            rangeDescription: "Range: 1 to 10"
          }
        },

        yAxis: {
          accessibility: {
            rangeDescription: "Range: 0.1 to 1000"
          }
        },

        tooltip: {
          headerFormat: "<b>{series.name}</b><br />",
          pointFormat: "{point.y}"
        },
        series: [
          {
            name: "Confirmados",
            data: confirmados,
            pointStart: 1,
            color: "#E53E3E"
          },
          {
            name: "Recuperados",
            data: recuperados,
            pointStart: 1,
            color: "#38A169"
          },
          {
            name: "Mortos",
            data: mortos,
            pointStart: 1,
            color: "#718096"
          }
        ]
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

.bold {
  font-weight: bold;
}

/* STYLE CARDS */

.card-body,
.card-text {
  padding: 0;
}

.card-body {
  border-radius: 25px;
}

.card-text-radius-top {
  border-radius: 25px 25px 0 0;
}

.card-text-radius-bottom {
  border-radius: 0 0 25px 25px;
}

.card-text {
  font-size: 30px;
}

/* COLORS CARDS */
.red-bg-number {
  background-color: #fff5f5;
}

.red-bg {
  background-color: #fed7d7;
}

.green-bg-number {
  background-color: #f0ffff;
}

.green-bg {
  background-color: #c6f6d5;
}

.neutral-bg-number {
  background-color: #edf2f7;
}

.neutral-bg {
  background-color: #e2e8f0;
}

.color-red {
  color: #e53e3e;
}

.color-green {
  color: #38a169;
}

.color-neutral {
  color: #718096;
}

/* GRAPHIC */
.grafico {
  width: 100%;
  height: 50vh;
}

.graph>div.card, .grafico{
  width: 100%;
}

</style>
