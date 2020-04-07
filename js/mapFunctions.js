let map;
let startPosition = {lat: 20.675377, lng: -103.340121};

function initMap() {
	var mapProp = {
		center: startPosition,
		zoom: 12
	};
	map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	let marker = new google.maps.Marker({position: startPosition, map: map});
}
