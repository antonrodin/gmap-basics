export default class GMap {

    constructor(elem, lat, lng, zoom) {
        
        this.config = {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: zoom
        }

        this.zoom = zoom;
        this.elem = elem;

        this.map = new google.maps.Map(this.elem, this.config);
    }

}