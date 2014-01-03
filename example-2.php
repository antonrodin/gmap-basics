<html lang="es">
<head>
    <meta charset="UTF-8" />
    <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" title="Normal" />
    <script src="js/map.class.js" type="text/javascript"></script> 
    
    <script type="text/javascript">
        $(document).ready(function() {
            var map = new Map(40.40594, -3.636249, 17);
            map.init('map-canvas');
            map.changeType('satellite');
            
            var map2 = new Map(40.405, -3.636, 15);
            map2.init('map-canvas-2');
            map2.changeType('default');      
            map2.addMarker( {lat: 40.40594, lng: -3.636249, html: "Awesome Marker", dragable: false } );
            map2.addMarker( {lat: 40.405, lng: -3.636, html: "Awesome Marker", dragable: false } );
            
        });
    </script>

    <style type="text/css">
        #map-canvas { width: 500px; height: 500px; border: 2px solid black; }
        #map-canvas-2 { width: 500px; height: 500px; border: 2px solid black; }
    </style>
    
</head>
<body>
    
    <div class="container">
        <h1>Ejemplo basico de mapa</h1>
        <div class="row">
            <div class="col-lg-6">
                <div id="map-canvas"></div>
            </div>
            <div class="col-lg-6">
                <div id="map-canvas-2"></div>
            </div>
        </div>
    </div>
    
</body>
</html>