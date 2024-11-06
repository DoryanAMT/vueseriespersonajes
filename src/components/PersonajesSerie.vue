<template>
  <div>
    <h1>Personajes Serie {{ this.$route.params.id }}</h1>
    <router-link :to="'/detailsserie/'+this.$route.params.id"
    class="btn btn-danger w-100">Volver a serie</router-link>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Personajes</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personaje in personajes" :key="personaje">
                <td>{{personaje.nombre}}</td>
                <td><img :src="personaje.imagen" style="width:150px; height:150px;"/></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import SerivceSeries from './../services/ServiceSeries'
const service = new SerivceSeries();

export default {
    name:"PersonajesSerie",
    data(){
        return{
            personajes: []
        }
    },
    mounted(){
        let idSerie = this.$route.params.id;
        service.getPersonajesSerie(idSerie).then(result => {
            this.personajes = result
        })
    }

}
</script>

<style>

</style>