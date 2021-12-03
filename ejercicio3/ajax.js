/**
    ajax.js
    @author angel correo
    @license GPL v3 2021
**/

'use strict'

//con json
function ejercicio3() {
    let opciones = {
        method: 'GET',
        Headers: {'Content-Type': 'application/json'}
    }
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=+campeones', opciones)//hacemos la peticion
    .then(respuesta => respuesta.text())//recibimos un objeto
    .then(texto => document.getElementById('span1').innerHTML = texto)
}