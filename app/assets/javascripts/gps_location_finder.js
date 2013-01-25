function getMyLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      // successful callback
      function(position) {
	    var lat = position.coords.latitude.toFixed(3)
	    var lon = position.coords.longitude.toFixed(3)
		var locDisplayText = "Latitude: " + lat + " ,  Longitude: " + lon;
        $.ajax({
          url: "/geo/myLocation",
          type: "POST",
          data: {latitude: lat, longitude: lon},
          success: function() {
			  document.getElementById("my_location_display_text").value = locDisplayText;
              },
          error:   function() {
                alert('Web Server Unavailable.');
			    document.getElementById("my_location_display_text").value = locDisplayText;
              }
        })
      },
      // failure callback 
      function() {
        alert('We couldn\'t find your position.');
      }
    );
  // navigator.geolocation not available for browser
  } else {
    alert('Your browser doesn\'t support geolocation.');
  }
}
