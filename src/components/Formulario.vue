<template>
  <div>
    <div id="app" class="row">
      <div class="col-12">
        <h1>Formulário</h1>
        <div class="card green">
          <p>Para ajudar a aprimorar os nossos dados de pesquisa, por favor responda:</p>
          <p>Você ou alguém próximo já esteve com COVID-19?</p>
          <div class="card-text input">
            <input type="radio" value="sim" v-model="covid" />
            <label for="sim">Sim</label>
          </div>
          <div class="card-text input">
            <input type="radio" value="conheco" v-model="covid" />
            <label for="conheco">Não, mas conheço alguém que já teve</label>
          </div>
          <div class="card-text input">
            <input type="radio" value="nao" v-model="covid" />
            <label for="nao">Não e não conheço ninguém que teve COVID-19</label>
          </div>
          <div class="card-text input">
            <label for="cep">CEP:</label>
            <input type="text" v-model="cep" />
          </div>
          <button class="envia" type="submit" value="Enviar" v-on:click="envio()">Enviar</button>
        </div>
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
      endereco(this.cep)
      this.axios
        .post(
          ``,
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

body{
  background-image: url('/../../../static/img/logo-bg.png');
  height: 80vh;
  width: 70vw;
}

p{
  margin: 5px auto 10px 15px;
}

p:first-child{
  margin: 15px auto auto 15px;
}

p, label, input{
  text-align: left;
  font-weight: 600;
}

label{
  margin: 5px auto 10px
}

.input{
  margin: auto auto auto 15px;
}

.input:last-child{
  margin: auto auto 10px 15px;
}

.green{
  background-color: #57B367;
  color: #fff;
  width: 40vw;
  justify-content: center;
  margin: 10px auto 0;
}

.envia{
  text-align: left;
  padding-left: 15px;
  background-color: #001A00;
  color: #fff;
  font-weight: 600;
  border: 0;
  border-radius: 0 0 10px 10px;
  height: 38px;
}

@media only screen and (max-width: 600px) {
  
  .green{
    width:80vw
  }
}

</style>
