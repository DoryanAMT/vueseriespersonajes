import Global from './../Global'
import axios from 'axios'

export default class ServicePersonajes{

    getPersonajes(){
        return new Promise(function(resolve){
            let personajes = [];
            let request = "api/personajes";
            let url = Global.urlApiPersonajes + request;

            axios.get(url).then(response => {
                personajes = response.data
                resolve(personajes)
            })
        })
    }
    
    insertPersonajeSerie(personaje){
        return new Promise(function(resolve){
            let request = "api/Personajes"
            let url = Global.urlApiPersonajes + request;

            axios.post(url, personaje).then(response => {
                resolve(response)
            })
        })
    }

    updatePersonajeSerie(idSerie, idPersonaje){
        return new Promise(function(resolve){
            let request = "/api/Personajes/"+idPersonaje+"/"+idSerie;
            let url = Global.urlApiPersonajes + request;

            axios.put(url).then(response => {
                resolve(response.data)
            })
        })

    }
}