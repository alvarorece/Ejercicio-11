var initializer = new Object();
class GoogleMap {
    constructor(element, zoom, center) {
        this.map = new google.maps.Map(element, { zoom, center });
    }
    addMarker(position) {
        new google.maps.Marker({ position, map: this.map });
    }
}

initializer.do = function () {
    navigator.geolocation.getCurrentPosition(position => {
        const pG = {lat: position.coords.latitude, lng: position.coords.longitude};
        const map = new GoogleMap(document.getElementById('map'), 8, pG);
        map.addMarker(pG);
    });
};
