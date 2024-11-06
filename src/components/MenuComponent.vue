<template>
  <nav class="navbar navbar-expand-lg bg-primary" >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><img src="https://appseries.azurewebsites.net/static/media/logo1.1408c71b2c87ca1fb473.png" style="width: 70px;"></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/" style="color:white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/createpersonaje" style="color:white">Nuevo Personaje</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/modificarpersonaje" style="color:white">Modificar Personaje</router-link>
          </li>
          <li class="nav-item dropdown ">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style="color:white"
            >
              Series
            </a>

            <ul class="dropdown-menu" >
              <li v-for="serie in series" :key="serie" class="menu-item bg-black">
                <router-link class="dropdown-item" :to="'/detailsserie/'+serie.idSerie" style="color:white">{{serie.nombre}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceComponent from './../services/ServiceSeries'
const service = new ServiceComponent();

export default {
  name: "MenuComponent",
  data(){
    return{
      series: []
    }
  },
  mounted(){
    service.getSeries().then(result => {
      this.series = result;
      // console.log(this.series)
    })
    
  }
};
</script>

