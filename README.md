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

Uso basico <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-1.php">example-1.php</a>
===========

````javascript
$(document).ready(function() {
    initialize_gmap();
});
````