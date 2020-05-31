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
    <div class="col-12 col-lg-12 mb-5 col-sm-12" v-for="(item, key) in dataLatesNotification" v-bind:key="key">
      <div class="card flex-row listing-card-container">
        <div class="w-40 image-response">
          <a v-bind:href="item.url">
              <img class="card-img-left" v-bind:src="item.urlToImage" alt="Card image cap">
              <span class="badge badge-pill badge-theme-1 position-absolute badge-top-left">NEW</span>
          </a>
        </div>
        <div class="w-60 d-flex align-items-center">
          <div class="card-body">
            <a v-bind:href="item.url">
                <h5 class="mb-3 listing-heading ellipsis"><div style="margin: 0px; padding: 0px; border: 0px;"></div>{{item.title}}</h5>
            </a>
            <p><div style="margin: 0px; padding: 0px; border: 0px;">{{item.description}}</div></p>
            <small>{{item.content}}</small>
            <footer>
              <p><div class="text-muted text-small mb-0 font-weight-light">{{item.publishedAt}}</div></p>
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
    };
  },
  mounted() {
    this.reloadLatestNotification();
  },
  methods: {
    reloadLatestNotification: function() {
      this.axios
        .get(          
          `http://api.coronatracker.com/news/trending`
        )
        .then(response => {
          this.dataLatesNotification = response.data.items;
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
