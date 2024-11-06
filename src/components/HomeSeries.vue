<template>
  <div>
    <h1>Home Series</h1>
    <div v-for="serie in series" :key="serie">
      <div class="card" style="width: 18rem">
        <img :src="serie.imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{serie.nombre}}</h5>
          <p class="card-text">
            IMDB: {{serie.puntuacion}}
          </p>
          <router-link :to="'/personajesserie/'+serie.idSerie" class="btn btn-primary w-100">Personajes</router-link>
        </div>
      </div>  
    </div>
    
  </div>
  
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const service = new ServiceSeries();
export default {
  name: "HomeSeries",
  data() {
    return {
      series: [],
    };
  },
  mounted() {
    service.getSeries().then(result => {
      this.series = result;
      // console.log(this.series)
    });
  },
};
</script>