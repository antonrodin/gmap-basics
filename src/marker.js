import GMap from './gmap.js';

const elem = document.getElementById('map-canvas');
const center1 = { lat: 40.405, lng: -3.636 }
const center2 = { lat: 40.506, lng: -3.637 }
const center3 = { lat: 40.507, lng: -3.635 }
const center4 = { lat: 40.517, lng: -3.640 }
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

const button3 = document.getElementById('add-custom-marker');
button3.addEventListener('click', e => {
    gmap.addSimpleMarker(center3, "Drag me into the Universe", true);
    e.preventDefault();
});

const button4 = document.getElementById('html-marker');
button4.addEventListener('click', e => {
    gmap.addHtmlMarker(center4, "New HTML Marker", "<p>New <strong>asesome</strong> marker four</p>");
    e.preventDefault();
});