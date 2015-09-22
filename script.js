//create a leaflet map
var map = L.map('map-container');
//set the initial view to 44.971724, -93.243239 and zoom level 16
map.setView ([44.971724, -93.243239], 16);
//add a basemap using the url http://{s}.tile.osm.org/{z}/{x}/{y}.png
L.tileLayer ('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
//request GeoJSON from the url https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson using JQuery
//add a GeoJSON based layer to the map using the requested GeoJSON
$.getJSON( 'https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson', function(data){
	var geojson = new L.geoJson(data).addTo(map);
});

//Use JQuery to select the div with class set to red box
//Add a click handler that does something in response to a user clicking on the div
$(".red.box").click(function(event){
	alert ("This is a red box. It's purpose is to be red."); 
	}
)