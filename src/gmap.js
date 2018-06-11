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

        // Array of current markers
        this.markers = [];
     
    }

    init() {
        this.map = new google.maps.Map(this.elem, this.config);
    }

    /**
     * Change Map Type
     * @param {normal, satelite, hibrido, relieve} tipo
     */
    changeType(tipo) {
        this.map.setOptions({ mapTypeId: tipo });
    };

    /**
     * Change Map Options, like zoom or latitude and longitude
     * @param {object} mapOptions like { zoom: 8 } 
     */
    changeOptions(mapOptions) {
        this.map.setOptions(mapOptions);
    }
    
    /**
     * Add simple marker into your map
     * @param {*} center { 0.00 , 0.00 } Latitude and Longitude Object
     * @param {*} title Title of the marker
     * @param {*} draggable true or false...
     */
    addSimpleMarker(center, title, draggable = false) {
        let marker = new google.maps.Marker({
            position: center,
            map: this.map,
            draggable: draggable,
            title: title
        });

        return this.markers.push(marker);
    }

    /**
     * 
     * @param {*} center {Lat, Lng} Object 
     * @param {*} title Title of the Marker
     * @param {*} html Some html fot Info Window
     */
    addHtmlMarker(center, title, html, draggable = false) {
        let i = this.addSimpleMarker(center, title, draggable);
        let info = new google.maps.InfoWindow({content: html});;
        this.markers[i-1].addListener('click', () => info.open(this.map, this.markers[i-1]) );
    }

    /**
     * Remove all markers from map
     */
    removeMarkers() {
        this.markers.forEach(elem => elem.setMap(null));
        this.markers = [];
    }

}