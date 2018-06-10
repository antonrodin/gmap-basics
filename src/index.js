import GMap from './gmap.js';

const elem1 = document.getElementById('map-canvas-1');
const gmap1 = new GMap(elem1, -34.397, 150.644, 8);

const elem2 = document.getElementById('map-canvas-2');
const gmap2 = new GMap(elem2, 40.405, -3.636, 15);
gmap2.init();
gmap2.changeType('terrain');

/**
 * Some Listeners...
 */

//Button for change Zoom in the first map
const button0 = document.getElementById('init-button');
button0.addEventListener('click', e => {
    gmap1.init();
})

//Button for change Zoom in the first map
const button1 = document.getElementById('zoom-button');
button1.addEventListener('click', e => {
    gmap1.changeOptions({ zoom: 15 });
})