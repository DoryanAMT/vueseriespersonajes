import Global from './../Global'
import axios from 'axios'

export default class ServiceSeries{
    getSeries (){
        return new Promise(function(resolve){
            let series = [];
            let request = "api/Personajes"
            let url = Global.urlApiPersonajes + request

            axios.get(url).then(response => {
                series = response.data
                resolve(series)
            })
        })
    }
}