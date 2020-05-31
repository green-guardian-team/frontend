<template>
  <div id="app">
    <nav class="navbar fixed-top">
      <div class="d-flex align-items-center navbar-left">
        <a href="#" class="menu-button d-none d-md-block">
          <svg class="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
            <rect x="0.48" y="0.5" width="7" height="1" />
            <rect x="0.48" y="7.5" width="7" height="1" />
            <rect x="0.48" y="15.5" width="7" height="1" />
          </svg>
          <svg class="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
            <rect x="1.56" y="0.5" width="16" height="1" />
            <rect x="1.56" y="7.5" width="16" height="1" />
            <rect x="1.56" y="15.5" width="16" height="1" />
          </svg>
        </a>

        <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
            <rect x="0.5" y="0.5" width="25" height="1" />
            <rect x="0.5" y="7.5" width="25" height="1" />
            <rect x="0.5" y="15.5" width="25" height="1" />
          </svg>
        </a>

        <div class="search">
          <input placeholder="Search..." v-model="q" />
          <span class="search-icon" v-on:click="search">
            <i class="simple-icon-magnifier"></i>
          </span>
        </div>
      </div>

      <div class="navbar-right">
        <div class="header-icons d-inline-block align-middle">
          <label class="pais">
            <img v-bind:src="getImage(pais)" />
            <select v-model="pais" class="select-image">
              <option
                v-for="item in paises"
                v-bind:key="item.countryCode"
                v-bind:value="item.countryCode"
                v-bind:style="getImageStyle(item.countryCode)"
              >{{ item.countryName }}</option>
            </select>
          </label>
        </div>

        <div class="d-inline-block">
          <img alt="Profile Picture" src="img/logo.png" class="logotipo" />
        </div>
      </div>
    </nav>
    <div class="menu">
      <div class="main-menu">
        <div class="scroll">
          <ul class="list-unstyled">
            <li v-bind:class="{'active': $route.path == '/'}">
              <router-link to="/">
                <i class="iconsminds-shop-4"></i>
                <span>Dashboards</span>
              </router-link>
            </li>
            <li v-bind:class="{'active': $route.path == '/mapa-regiao'}">
              <router-link to="/mapa-regiao">
                <i class="iconsminds-google"></i> Map
              </router-link>
            </li>
            <li v-bind:class="{'active': $route.path == '/pesquisa'}">
              <router-link to="/pesquisa">
                <i class="iconsminds-air-balloon-1"></i> Pesquisa
              </router-link>
            </li>
            <li v-bind:class="{'active': $route.path == '/formulario'}">
              <router-link to="/formulario">
                <i class="iconsminds-air-balloon-1"></i> Formulário
              </router-link>
            </li>
            <li v-bind:class="{'active': $route.path == '/querm_somos'}">
              <router-link to="/querm_somos">
                <i class="iconsminds-air-balloon-1"></i> Quem somos
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <main>
      <div class="container-fluid">
        <router-view v-bind:pais="pais" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      paises: [],
      pais: "BR",
      q: ""
    };
  },
  computed: {},
  mounted() {
    this.carregaPais();
  },
  methods: {
    search: function() {
        alert("A fazer");
      return false;
    },
    getImageStyle(pais) {
      let url = this.getImage(pais);
      return `background: url("${url}");`;
    },
    getImage(pais) {
      let counter = pais.toLowerCase();
      return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${counter}.svg`;
    },
    carregaPais: function() {
      this.axios
        .get("https://api.coronatracker.com/v2/analytics/country")
        .then(response => {
          this.paises = response.data;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logotipo {
  width: 92px !important;
  height: auto !important;
  margin-top: -62px;
  margin-bottom: -60px;
  border-left: 1px solid #c2c2c2;
  background-color: rgb(226, 226, 226);
  border-radius: 0px 0px 0px 0px;
}
.pais {
  margin-right: 10px;
}
.pais img {
  width: 50px;
  margin-bottom: -8px;
}
.select-image {
  position: absolute;
  margin-left: -52px;
  margin-top: -2px;
  z-index: 1;
  width: 54px;
  height: 44px;
  opacity: 0;
}
.select-image:hover {
  cursor: pointer;
}
.select-image:active {
  opacity: 0.1;
}
@media only screen and (max-width: 600px) {
  .logotipo {
    width: 72px !important;
  }
}
</style>
