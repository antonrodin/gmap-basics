import GMap from './gmap.js';

const elem = document.getElementById('map-canvas');
const center1 = { lat: 40.405, lng: -3.636 }
const center2 = { lat: 40.506, lng: -3.637 }
const gmap = new GMap(elem, center1.lat, center1.lng, 8);

// Init map
const button0 = document.getElementById('init-map');
button0.addEventListener('click', e => {
    gmap.init();
    e.preventDefault();
});

// Add simple marker into the map
const button1 = document.getElementById('add-marker');
button1.addEventListener('click', e => {
    gmap.addSimpleMarker(center1, "My Awesome Marker One");
    gmap.addSimpleMarker(center2, "My Awesome Marker Two");
    e.preventDefault();
});

// Add simple marker into the map
const button2 = document.getElementById('remove-markers');
button2.addEventListener('click', e => {
    gmap.removeMarkers();
    e.preventDefault();
});