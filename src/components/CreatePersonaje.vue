<template>
  <div>
    <h1>Create Personaje</h1>
    <form v-on:submit.prevent="insertPersoanjeSerie()">
        <label>Nombre: </label>
        <input type="text" class="form-control" v-model="personaje.nombre">
        <label>Imagen: </label>
        <input type="text" class="form-control" v-model="personaje.imagen">
        <label >Serie</label>
        <select class="form-control" v-model="personaje.idSerie">
            <option v-for="serie in series" :key="serie" :value="serie.idSerie">{{serie.nombre}}</option>
        </select>
        <button class="btn btn-success w-100">Crear personaje</button>

    </form>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'
const service = new ServiceSeries();

export default {
    name: "CreatePersonaje",
    data(){
        return{
            series: [],
            personaje:{
                idPersonaje: 0,
                nombre: "",
                imagen: "",
                idSerie: 0
            }
        }
    },
    methods:{
        insertPersoanjeSerie(){
            service.insertPersonajeSerie(this.personaje).then(result => {
                console.log(result);
                this.$router.push("/personajesserie/"+this.personaje.idSerie);
            })

        }
    },
    mounted(){
        service.getSeries().then(result => {
            this.series = result
        })
    }
    
}
</script>

<style>

</style>