var initializer = new Object();
class GoogleMap {
    constructor(element, zoom, center) {
        this.map = new google.maps.Map(element, { zoom, center });
    }
    addMarker(position) {
        new google.maps.Marker({ position, map: this.map });
    }
}
const oviedo = { lat: 43.3672702, lng: -5.8502461 };
initializer.do = function () {
    const map = new GoogleMap(document.getElementById('map'), 8, oviedo);
    map.addMarker(oviedo);
};
