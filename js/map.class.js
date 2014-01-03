/**
 * Objeto Mapa
 * @param {type} lat
 * @param {type} lng
 * @param {type} zoom
 * @returns {Map}
 */
function Map (lat, lng, zoom) {
    
    /**
     * Opciones del mapa
     * @type type
     */
    this.MapOptions = {
        zoom: zoom,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    /**
     * Inicializar el mapa
     * @param {type} id
     * @returns {undefined}
     */
    this.init = function(id) {
        this.map = new google.maps.Map(document.getElementById(id), this.MapOptions);
    };
    
    /**
     * Cambiar el tipo de mapa
     * @param {normal, satelite, hibrido, relieve} tipo
     */
    this.changeType = function(tipo) {
        if (tipo === "default") this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
        if (tipo === "satellite") this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
        if (tipo === "hybrid") this.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
        if (tipo === "terrain") this.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    };
    
    /**
     * Añadir marcador al Mapa
     * @param {type} data
     */
    this.addMarker = function(data) {
        var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data.lat, data.lng),
                    map: this.map,
                    draggable: data.draggable
        });

        if (data.html !== undefined) {

            var infowindow = new google.maps.InfoWindow({
                content: data.html,
                maxWidth: 200
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(this.map, marker);
            });
        }
    };
    
}