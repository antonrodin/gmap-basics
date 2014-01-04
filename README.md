gmap-basics BETA
===========

Objeto Mapa que contiene funciones basicas necesarias para utilizar Google Maps.
Simplifica el uso de la API V3 de Google Maps. Personalmente necesito este tipo de objeto para
Sitios web simples donde implementar una interacción basica con los mapas:

1. Inicialización de un Mapa basico proporcionando, Latitud, Longitud, Zoom y el ID del objeto donde quiero que se muestre.
2. Control de marcadores que sea facilmente extensible y modificable. Es decir una funcion muy basica.
3. Busqueda de direcciones que devuelve ciertas coordenadas, asi como una opción de precisar la posición mediante el marcador. Logicamente
posibilidad de guardar las coordenadas.
4. Control basico de StreetView. Inicialización proporcionando parametros basicos, posibilidad de modificación dinamica de los mismos (mover la camara) y
guardado mediante AJAX de dichos parametros.

Instalación:
============
````html
    <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/map.class.js" type="text/javascript"></script> 
````
En los ejemplos se usa el framework CSS <a href="http://getbootstrap.com">Bootstrap 3</a>. No es imprescindible para el correcto uso.

Uso basico:
===========

Puedes verlo en el ejemplo 1: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-1.html">example-1.html</a>

````javascript
$(document).ready(function() {
    
    // Crear mapa 1
    // El primer parametro es latitud, el segundo longitud y el tercero Zoom. 
    var map = new Map(40.40594, -3.636249, 17);
    map.init('map-canvas');
            
    // Crear mapa 2
    var map2 = new Map(40.405, -3.636, 15);
    map2.init('map-canvas-2');
    map2.changeType('satellite');
            
});
````

Creación de dos mapas diferentes entre si, aunque las coordenadas basicamente son las mismas. En la declaración del primer mapa
esta la parte minima necesaria para mostrar cualquier mapa.

Creación de un marcador:
========================

Puedes verlo en el ejemplo 2: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-2.html">example-2.html</a>

````javascript
$(document).ready(function() {
            var map = new Map(40.40594, -3.636249, 10);
            map.init('map-canvas');
            map.addMarker( {lat: 40.40594, lng: -3.636249, html: "Awesome Marker", dragable: false } );
});
````