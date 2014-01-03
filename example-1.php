<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" title="Normal" />
    <script src="js/gmap.js" type="text/javascript"></script> 
    
    <script type="text/javascript">
        $(document).ready(function() {
            initialize_gmap();
        });
    </script>

    <style type="text/css">
        #map-canvas { width: 500px; height: 500px; border: 2px solid black; }
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
                <pre>
                     $(document).ready(function() {
                        initialize_gmap();
                    });
                </pre>
            </div>
        </div>
    </div>
    
</body>
</html>