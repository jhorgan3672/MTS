const mymap = L.map('mapid', {zoomControl:true, maxZoom:16, minZoom:3}).setView([46.7324, -117.0002], 15);
	
	const basemap = new L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.dark'
	}).addTo(mymap);

    

    
var greenRouteStyle1 = {
    color: 'Chartreuse',
    weight: 2  
}

var greenRouteStyle2 = {
    color: 'Green',
    weight: 7
}

var blueRouteStyle1 = {
    color: 'Aqua',
    weight: 2  
}

var blueRouteStyle2 = {
    color: 'Blue',
    weight: 7
}

var shareRouteStyle = {
    color: 'Purple',
    weight: 12
}

const greenStopsStyle = {
		radius: 7,
        opacity: 1,
        color: 'White',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'Green'
       };

 const blueStopsStyle = {	
        radius: 7,
        opacity: 1,
        color: 'White',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'Blue'
        };

 const sharedStopsStyle = {	
        radius: 7,
        opacity: 1,
        color: 'White',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0,
        fill: true,
        fillOpacity: 1,
        fillColor: 'grey'
        };


//function mapGreen(feature1, feature2) {
//L.geoJSON(feature1, {style: greenRouteStyle1}).addTo(mymap);
//L.geoJSON(feature2,{style: greenRouteStyle2}).addTo(mymap);
//}        
        


const gl2 = L.geoJSON(greenRoute2, {style: greenRouteStyle2}).addTo(mymap);
const gl1 = L.geoJSON(greenRoute1,{style: greenRouteStyle1}).addTo(mymap);
const bl2 = L.geoJSON(blueRoute2, {style: blueRouteStyle2}).addTo(mymap);
const bl1 = L.geoJSON(blueRoute1,{style: blueRouteStyle1}).addTo(mymap);
//L.geoJSON(sharedRoute, {style: shareRouteStyle}).addTo(mymap);
const green = L.geoJSON(greenStops, {pointToLayer: function (point, latlng){ return L.circleMarker(latlng, greenStopsStyle).bindPopup("Stop: " + point.properties.Stop)}}).addTo(mymap);
const blue = L.geoJSON(blueStops, {pointToLayer: function (point, latlng){ return L.circleMarker(latlng, blueStopsStyle).bindPopup("Stop: " + point.properties.Stop)}}).addTo(mymap);
const orange = L.geoJSON(allStops, {pointToLayer: function (point, latlng){ return L.circleMarker(latlng, sharedStopsStyle).bindPopup("Stop: " + point.properties.Stop)}}).addTo(mymap);




const routesLayer = {
		
    
    "Green Line 1": gl1,
    "Green Line 2": gl2,
    "Blue Line 1": bl1,
    "Blue Line 2": bl2 
};

const stopsLayer = {
		
    "Green Stops": green,
    "Blue Stops": blue,
    "All Stops": orange
    
};





L.control.layers(stopsLayer, null,{collapsed:false}).addTo(mymap);
L.control.layers(routesLayer,null,{collapsed:false}).addTo(mymap);

