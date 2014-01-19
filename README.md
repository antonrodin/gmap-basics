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

Buscar una dirección:
=====================

Puedes verlo en el ejemplo 3: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-3.html">example-3.html</a>

````javascript
$(document).ready(function() {
            var map = new Map(40.40594, -3.636249, 17);
            map.init('map-canvas');

            $("#buscar-direccion").click(function() {
                map.findAddress(document.getElementById("direccion").value);
            });
});
````

Para obtener las coordenadas para el envio del formulario, se guardan en los input que se establecen por defecto dentro
de los input con el id="lat-id" y "lng-id respectivamente.

````javascript
    //Valores por defecto:
    this.latId = "lat-id";
    this.lngId = "lng-id";

    //Como se actualizan al geolocalizar:
    document.getElementById(self.latId).value = data.lat;
    document.getElementById(self.lngId).value = data.lng;
````

Asi mismo si el marcador es "arrastrable" se actualizan automaticamente de la siguiente manera:

````javascript
    if (data.draggable == true) {
        google.maps.event.addListener(marker, 'drag', function() {
            document.getElementById(self.latId).value = marker.getPosition().lat();
            document.getElementById(self.lngId).value = marker.getPosition().lng();
        });
    }
````

Mostrar StreetView:
===================

Funcion muy basica para mostrar el Street View en una ventana diferente, asi como obtener las 3 coordenadas
necesarias para almacenarlo, por ejemplo en una base de datos MySQL

Este es el ejemplo basico para sacar el StreetView: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-4.html">example-4.html</a>


````javascript
$(document).ready(function() {
            var map = new Map(40.40594, -3.636249, 17);
            map.init('map-canvas');
            map.initSV('street-canvas');
});
````

En el siguiente ejemplo la funcion cambia, ya que actualiza dinamicamente estos parametros:

````javascript
    //Parametros de StreetView
    this.headingId = "heading-id";
    this.pitchId = "pitch-id";
````

Este es el código fuente basico para utilizarlo. Funciona junto con la busqueda de la dirección de un modo "correcto"
aunque con ciertos bugs que supongo que se podrian corregirse, elaborando mejor el código fuente.

````javascript
    $(document).ready(function() {
            var map = new Map(40.40594, -3.636249, 17);
            map.init('map-canvas');
            map.initSVAdvanced('street-canvas');
            
            //Buscar la dirección
            $("#buscar-direccion").click(function() {
                map.findAddress(document.getElementById("direccion").value);
            });
    });
````

El código fuente completo esta en el ejemplo 5: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-5.html">example-5.html</a>

Puedes manualmente establecer las coordenadas de StreetView. Proporcionando Latitud, Longitud, Heading y Pitch. Aquí un ejemplo de código:

````javascript
    $(document).ready(function() {
            var map = new Map(40.376, -3.53947, 17);
            map.init('map-canvas');
            map.setSvPosition(40.376, -3.53947, -60.4513, -0.992719);
            map.initSV('street-canvas');
    });
````

El código fuente completo esta en el ejemplo 6: <a href="https://github.com/antonrodin/gmap-basics/blob/master/example-6.html">example-6.html</a>


Conclusiones finales:
=====================
Este código para una implementación dentro de una aplicación web necesita una ligera depuración. Realmente no es necesario
el uso de jQuery ni del framework Bootstrap. Aquí se utilizan para simplificar la vida y una presentación mas decente. Si quieres
usar esto usalo bajo tu propia responsabilidad ;)