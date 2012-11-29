function getMyLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      // successful callback
      function(position) {
	    var lat = position.coords.latitude
	    var lon = position.coords.longitude
        $.ajax({
          url: "/findme/myLocation",
          type: "POST",
          data: {latitude: lat, longitude: lon},
          success: function() {
			  var myLocation = "latitude: " + lat + " ,  longitude: " + lon;
			  document.getElementById("my_location_display_text").value = myLocation;
              },
          error:   function() {
                alert('Web Server Unavailable.');
				var myLocation = "latitude: " + lat + " ,  longitude: " + lon;
			    document.getElementById("my_location_display_text").value = myLocation;
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
