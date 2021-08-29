// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

var map = L.map('map', {
    center: [30, 0],
    zoom: 3
});

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

// Initialize Carto
var client = new carto.Client({
    apiKey: 'default_public',
    username: 'dpranata10'
});

// Initialze data source
var source = new carto.source.SQL("SELECT * FROM tornado");
var source2 = new carto.source.SQL("SELECT * FROM counties_ny")
var source3 = new carto.source.SQL("SELECT * FROM stormevents_locations_2014")


// Create style for the data
var style = new carto.style.CartoCSS(`
    #layer {
      line-color: skyblue;
  line-width: 2;
    }
  `);

var style2 = new carto.style.CartoCSS(`
    #layer {
      polygon-fill: yellow;
  polygon-opacity: .5;
    }
  `);

var style3 = new carto.style.CartoCSS(`
    #layer {
  marker-fill: red;
    }
  `);

// Add style to the data
var layer = new carto.layer.Layer(source, style);
var layer2 = new carto.layer.Layer(source2, style2);
var layer3 = new carto.layer.Layer(source3, style3);

// Add the data to the map as a layer
client.addLayer(layer);
client.addLayer(layer2);
client.addLayer(layer3);
client.getLeafletLayer().addTo(map);// This isn't necessary but it keeps the editor from thinking L and carto are typos// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

var map = L.map('map', {
    center: [30, 0],
    zoom: 3
});

// Add base layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

// Initialize Carto
var client = new carto.Client({
    apiKey: 'default_public',
    username: 'dpranata10'
});

// Initialze data source
var source = new carto.source.SQL("SELECT * FROM tornado");
var source2 = new carto.source.SQL("SELECT * FROM counties_ny")
var source3 = new carto.source.SQL("SELECT * FROM stormevents_locations_2014")


// Create style for the data
var style = new carto.style.CartoCSS(`
  #layer {
    line-color: skyblue;
line-width: 2;
  }
`);

var style2 = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: yellow;
polygon-opacity: .5;
  }
`);

var style3 = new carto.style.CartoCSS(`
  #layer {
marker-fill: red;
  }
`);

// Add style to the data
var layer = new carto.layer.Layer(source, style);
var layer2 = new carto.layer.Layer(source2, style2);
var layer3 = new carto.layer.Layer(source3, style3);

// Add the data to the map as a layer
client.addLayer(layer);
client.addLayer(layer2);
client.addLayer(layer3);
client.getLeafletLayer().addTo(map);// This isn't necessary but it keeps the editor from thinking L and carto are typos