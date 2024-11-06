<template>
  <div>
    <h1>Modificar Personaje</h1>
    <hr/><br/>
    <label >Serie: </label>
    <select class="form-control" v-model="selectSerie">
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
            {{serie.nombre}}
        </option>
    </select>
    <label >Personaje: </label>
    <select class="form-control" v-model="selectPersonaje">
        <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">
            {{personaje.nombre}}
        </option>
    </select>
    <button @click="updatePersonajeSerie()">Modificar Personaje</button>
  </div>
</template>

<script>
import ServiceSeries from './../services/ServiceSeries'
const serviceSerie = new ServiceSeries();
import ServicePersonajes from './../services/ServicePersonajes'
const servicePersonajes = new ServicePersonajes();

export default {
    name: "ModificarPersonaje",
    data(){
        return{
            series: [],
            personajes: [],
        }
    },
    mounted(){
        this.loadPersonajes();
        this.loadSeries();
    },
    methods:{
        updatePersonajeSerie(){
            let idSerie = this.selectSerie
            let idPersonaje = this.selectPersonaje

            servicePersonajes.updatePersonajeSerie(idSerie,idPersonaje).then(result => {
                console.log(result);
                this.$router.push("/personajesserie/"+idSerie);
            })
        },

        loadSeries(){
            serviceSerie.getSeries().then(result => {
                this.series = result
            })
        },

        loadPersonajes(){
            servicePersonajes.getPersonajes().then(result => {
                console.log(result)
                this.personajes = result;
            })
        }
    }

}
</script>

<style>

</style>