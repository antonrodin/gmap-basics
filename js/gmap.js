/**
* @title Funciones para Google Maps API V3
* @author Anton Zekeriev Rodin
* Licencia MIT, es decir puedes usarlo bajo tu propia responsabilidad.
*/


/*
| -------------------------------------------------------------------
| Funciones para Google Maps API V3
| -------------------------------------------------------------------
| 
| En este archivo encontraras un conjunto de funciones que simplifican
| mi vida cuando trabajo con la Api de Geolocalización de Google Maps
| digamos son funciones basicas que se pueden extenderse y modificarse
| muy facilmente
|
| -------------------------------------------------------------------
| Instrucciones
| -------------------------------------------------------------------
|
| These are the things you can load automatically:
|
| 1. Variables globales de configuración
| 2. Funciones basicas
| 3. Funciones relativas a Marcadores
| 4. Funciones relativas a StreetVew
| 5. Funciones relativas a la localización de las direcciones
|
*/


/*
| -------------------------------------------------------------------
|  Variables globales de configuración.
| -------------------------------------------------------------------
|
*/
var map;

/**
 * Initial configuration
 */
var Config = {
    lat: 40.40594,                  //Madrid lat
    lng: -3.636249,                 //Madrid lng
    map_canvas: "map-canvas",       //Map id tag, for example <div id="map-canvas"></div>
    street_canvas: "street-canvas"  //Street view ID tag, for example <div id="street-canvas"></div>
};

/**
* Map options
*/
var MapOptions = {
        zoom: 6,                                                    //Zoom
        center: new google.maps.LatLng(Config.lat, Config.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
};

/**
* StreetView options
*/
var PanoramaOptions = {
    position: MapOptions.center,
    pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
    }
};
/**
* Actual position object
*/
var ActualPos = {
	lat: 40.405392,
	lng: -3.63729
};


/* Modify settings */
function set_zoom(zoom) {
	Config.zoom = zoom;
}

function set_map_center(lat, lng, zoom) {
	Config.lat = lat;
	Config.lng = lng;
        Config.zoom = zoom;
        MapOptions.zoom = Config.zoom;
        MapOptions.center = new google.maps.LatLng(Config.lat, Config.lng);
}

function set_sw_position(heading, pitch, zoom) {
    PanoramaOptions.pov.heading = heading;
    PanoramaOptions.pov.pitch = pitch;
    PanoramaOptions.pov.zoom = zoom;
}

function set_map_canvas(map_canvas) {
	Config.map_canvas = map_canvas;
}
/* End modify setting */

/**
* My GMap V3 Framework
*/
function initialize_gmap() {
    map = new google.maps.Map(document.getElementById(Config.map_canvas), MapOptions);	
}

function set_marker(data) {
    var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(data.lat, data.lng),
                    map: map,
                    draggable: data.draggable
    });

    if (data.html !== undefined) {

        var infowindow = new google.maps.InfoWindow({
            content: data.html,
            maxWidth: 200
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
}

/**
* Find Address
*/
function find_address(address) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address },  function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                
                if (results && results[0] && results[0].geometry && results[0].geometry.viewport) {
                    initialize_gmap();
                    map.fitBounds(results[0].geometry.viewport);
                    var init = {
			lat: results[0].geometry.location.lat(),
			lng: results[0].geometry.location.lng(),
			html: address,
			title: address,
			draggable: true
                    }
                    ActualPos.lat = init.lat;
                    ActualPos.lng = init.lng;
                    set_marker(init);
                }
            } else {
                return false;
            }
	} else {
            return false;
	}
    });
    
    return true;
}

/**
* Find Address
*/
function find_address_sw(address) {
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address },  function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                
                if (results && results[0] && results[0].geometry && results[0].geometry.viewport) {
                    set_map_center(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 16);
                    initialize_gmap();
                    show_streetview();
                    var init = {
			lat: results[0].geometry.location.lat(),
			lng: results[0].geometry.location.lng(),
			html: address,
			title: address,
			draggable: true
                    }
                    ActualPos.lat = init.lat;
                    ActualPos.lng = init.lng;
                    set_marker(init);
                    var latInput = document.getElementById('lat-input');
                    var lngInput = document.getElementById('lng-input');
                    latInput.value = init.lat;
                    lngInput.value = init.lng;
                }
            } else {
                return false;
            }
	} else {
            return false;
	}
    });
    
    return true;
}

function show_streetview_ren() {
    PanoramaOptions.position = new google.maps.LatLng(Config.lat, Config.lng);
    var panorama = new google.maps.StreetViewPanorama(document.getElementById(Config.street_canvas), PanoramaOptions);
    map.setStreetView(panorama);
}

/**
* Show StreetView Panorama
*/
function show_streetview() {

    PanoramaOptions.position = new google.maps.LatLng(Config.lat, Config.lng);
    var panorama = new google.maps.StreetViewPanorama(document.getElementById(Config.street_canvas), PanoramaOptions);
    map.setStreetView(panorama);

    google.maps.event.addListener(panorama, 'pov_changed', function() {
        var heading = document.getElementById('heading-input');
        var pitch = document.getElementById('pitch-input');
        heading.value = panorama.getPov().heading;
        pitch.value = panorama.getPov().pitch;
    });
    
    google.maps.event.addListener(panorama, 'position_changed', function() {
        var lat = document.getElementById('lat-input');
        var lng = document.getElementById('lng-input');
        lat.value = panorama.getPosition().lat();
        lng.value = panorama.getPosition().lng();
    });

}