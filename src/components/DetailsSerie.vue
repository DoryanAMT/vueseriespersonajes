<template>
  <div>
    <h1>Details Serie</h1>
    <div class="card" style="width: 18rem">
      <img :src="serie.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">
          IMDB: {{ serie.puntuacion }}
        </p>
        <router-link :to="'/personajesserie/'+serie.idSerie" class="btn btn-primary w-100">Personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSerie from "./../services/ServiceSeries";
const service = new ServiceSerie();

export default {
  name: "DetailsSerie",
  data() {
    return {
      serie: [],
    };
  },
  mounted() {
    this.loadSerie();
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (oldVal != nextVal) {
        this.loadSerie();
      }
    },
  },
  methods: {
    loadSerie() {
      let idSerie = this.$route.params.id;
      service.findSerie(idSerie).then((result) => {
        this.serie = result;
      });
    },
  },
};
</script>