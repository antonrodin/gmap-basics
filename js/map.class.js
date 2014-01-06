/**
 * Objeto Mapa
 * @param {type} lat
 * @param {type} lng
 * @param {type} zoom
 * @returns {Map}
 */
function Map (lat, lng, zoom) {
    
    //Variable mapa que se usara para almacenar el mapa
    this.map = null;
    
    //Variables basicas para Google Maps
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;
    
    //Input ID Latitud and Longitud
    this.latId = "lat-id";
    this.lngId = "lng-id";
    
    //Parametros de StreetView
    this.headingId = "heading-id";
    this.pitchId = "pitch-id";
    this.zoomId = "zoom-id";
    
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
     * Opciones Street View
     */
    this.PanoramaOptions = {
        position: this.MapOptions.center,
        pov: { heading: 34, pitch: 10, zoom: 1 }
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
        
        var self = this;
        
        var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data.lat, data.lng),
                    map: self.map,
                    draggable: data.draggable
        });

        if (data.html !== undefined) {

            var infowindow = new google.maps.InfoWindow({
                content: data.html,
                maxWidth: 200
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(self.map, marker);
            });
        }
        
        //If Marker Dragable Add listener
        if (data.draggable == true) {
              google.maps.event.addListener(marker, 'drag', function() {
                     document.getElementById(self.latId).value = marker.getPosition().lat();
                     document.getElementById(self.lngId).value = marker.getPosition().lng();
              });
        }
        
    };
    
    /**
     * Buscar dirección, establecer mapa alrededor de la dirección y colocar un marcador.
     * @address String dirección, por ejemplo "New York"
     */
    this.findAddress = function(address) {
        var self = this;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address },  function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    if (results && results[0] && results[0].geometry && results[0].geometry.viewport) {
                        
                        //Mostrar el mejor resultado obtenido:
                        self.map.fitBounds(results[0].geometry.viewport);
                        data = {
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng(),
                            html: address,
                            title: address,
                            draggable: true
                        }    
                        self.addMarker(data);
                        
                        //Insert latitud andlongitud into form
                        document.getElementById(self.latId).value = data.lat;
                        document.getElementById(self.lngId).value = data.lng;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
    }
    
    /**
     * Mostrar StreetView en el ID selecionado
     */
    this.initSV = function(id) {
        var panorama = new google.maps.StreetViewPanorama(document.getElementById(id), this.PanoramaOptions);
        this.map.setStreetView(panorama);
    }
    
    /**
     * StreetView avanzada con "listeners" que actualizan las coordenadas
     * de latitud, longitud, pitch and heading dinamicamente.
     */
    this.initSVAdvanced = function(id) {  
        var self= this;    
        var panorama = new google.maps.StreetViewPanorama(document.getElementById(id), this.PanoramaOptions);
        this.map.setStreetView(panorama);
        
        google.maps.event.addListener(panorama, 'pov_changed', function() {
            document.getElementById(self.headingId).value = panorama.getPov().heading;
            document.getElementById(self.pitchId).value = panorama.getPov().pitch;
        });
    
        google.maps.event.addListener(panorama, 'position_changed', function() {
            document.getElementById(self.latId).value = panorama.getPosition().lat();;
            document.getElementById(self.lngId).value = panorama.getPosition().lng();
        });
        
    }
    
}