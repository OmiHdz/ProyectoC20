let myMap;
let startPosition = {lat: 20.675377, lng: -103.340121};

function initMap() {
	var mapProp = {
		center: startPosition,
		zoom: 12
	};
	myMap = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	placeMarker(startPosition, myMap);

	// chack if map was initialized
	if (myMap) {
		// add functions that places a marker on clicked point in map
		myMap.addListener('click', (e) => {
			placeMarker(e.latLng, myMap);
		});
	}
}

// returns the new marker but it must be handled wherever this function is called
function placeMarker(latLng, map) {
	return new google.maps.Marker({position: latLng, map: map});
}

