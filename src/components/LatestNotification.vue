<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="mb-2">
        <h1>Ultimas Noticias</h1>
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                  <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Noticias</li>
            </ol>
          </nav>
      </div>
      <div class="separator mb-5"></div>
    </div>
  </div> 
  <div class="row">
    <div class="col-12 col-lg-12 mb-5 col-sm-12" v-for="(item, key) in mergedArray" v-bind:key="key">
      <div class="card flex-row listing-card-container">
        <div class="w-100 d-flex align-items-center">
          <div class="card-body">
            <a v-bind:href="item.link" target="_blank">
                <h5 class="mb-3 listing-heading ellipsis"><div></div>{{item.title}}</h5>
            </a>
            <div><p>{{item.text}}</p></div>
            <footer>
              <div class="text-muted text-small mb-0 font-weight-light"><p>{{item.date}}</p></div>
              <div>{{dataLatesNotificationBr}}</div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row text-center">
    <div class="col-12">
      <nav class="mt-4 mb-3">
        <ul class="pagination justify-content-center mb-0">
            <li class="page-item ">
                <a class="page-link first" href="#">
                    <i class="simple-icon-control-start"></i>
                </a>
            </li>
            <li class="page-item ">
                <a class="page-link prev" href="#">
                    <i class="simple-icon-arrow-left"></i>
                </a>
            </li>
            <li class="page-item active">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item ">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item ">
                <a class="page-link next" href="#" aria-label="Next">
                    <i class="simple-icon-arrow-right"></i>
                </a>
            </li>
            <li class="page-item ">
                <a class="page-link last" href="#">
                    <i class="simple-icon-control-end"></i>
                </a>
            </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
</template>
  
<script>
export default {
  data() {
    return {
      dataLatesNotification: [],
      dataLatesNotificationBr: [],
      mergedArray: [],
    };
  },
  mounted() {
    this.reloadLatestNotification();
    this.reloadLatestNotificationBr();
  },
  watch: {
    dataLatesNotification: function() {
      console.log(this.dataLatesNotification);
      this.reloadContat();
    },
    dataLatesNotificationBr: function() {
      console.log(this.dataLatesNotificationBr);
      this.reloadContat();
    }
  },
  methods: {
    reloadLatestNotification: function() {
      this.axios
        .get(          
          `http://api.coronatracker.com/news/trending`
        )
        .then(response => {
          console.log(response.data.items);
          this.dataLatesNotification = response.data.items.map((item) => {
            return {
              title: item.title,
              text: item.description,
              link: item.url,
              date: item.publishedAt
            }
          });
        });
    },
    reloadLatestNotificationBr: function() {
      this.axios
        .get(
          `http://anthlab.com:56733/api/news/`
        )
        .then(response => {
          this.dataLatesNotificationBr = response.data.news;
        });
    },
    reloadContat: function() {
      this.mergedArray = this.dataLatesNotification.concat(this.dataLatesNotificationBr);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
