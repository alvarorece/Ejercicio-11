"use strict";
class Geolocalizacion {
    constructor(position) {
        this.position = position;
    }
    get longitud() {
        return this.position.coords.longitude;
    }
    get latitud() {
        return this.position.coords.latitude;
    }
    get precision() {
        return this.position.coords.accuracy;
    }
    get altitud() {
        return this.position.coords.altitude;
    }
    get precisionAltitud() {
        return this.position.coords.altitudeAccuracy;
    }
    get rumbo() {
        return this.position.coords.heading;
    }
    get velocidad() {
        return this.position.coords.speed;
    }
}
class GeolocalizacionController {
    constructor(geolocalizacion) {
        this.geolocalizacion = geolocalizacion;
    }
    ver(elementoPadre) {
        while (elementoPadre.firstChild) {
            elementoPadre.removeChild(elementoPadre.lastChild);
        }
        const pLong = document.createElement('p');
        const pLat = document.createElement('p');
        const pPrec = document.createElement('p');
        const pAlt = document.createElement('p');
        const pPrecAlt = document.createElement('p');
        const pRumbo = document.createElement('p');
        const pVel = document.createElement('p');
        pLong.append(`Longitud: ${this.geolocalizacion.longitud} grados`);
        pLat.append(`Latitud: ${this.geolocalizacion.longitud} grados`);
        pPrec.append(`Precisión de la latitud y longitud: ${this.geolocalizacion.precision}m`);
        pAlt.append(`Altitud: ${this.geolocalizacion.altitud}m`);
        pPrecAlt.append(`Precisión de la altitud: ${this.geolocalizacion.precisionAltitud}m`);
        pRumbo.append(`Rumbo: ${this.geolocalizacion.rumbo} grados`);
        pVel.append(`Velocidad: ${this.velocidad}m/s`);
        elementoPadre.append(pLong, pLat, pPrec, pAlt, pPrecAlt, pRumbo, pVel);
    }
}
let controller;
navigator.geolocation.getCurrentPosition(position => {
    const geo = new Geolocalizacion(position);
    controller = new GeolocalizacionController(geo);
});

