<template>
  <div>
    <h1>Home Series</h1>
    <div v-for="serie in series" :key="serie">
      <div class="card" style="width: 18rem">
        <img :src="serie.imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary w-100">Go somewhere</a>
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
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
};
</script>