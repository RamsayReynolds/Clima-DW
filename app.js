var result;
function getWeather() {
  var textElement1 = document.getElementById("lat");
  var textElement2 = document.getElementById("lon");
  var resultElement =  document.getElementById("resultado");

  lat = textElement1.value;
  lon = textElement2.value;
  $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=6a5dd171bd0da4aa70a6a118b486aec5",
    function(json) {
      console.log(json.weather[0].main);
      $('#resultado').text(JSON.stringify(json.weather[0].main));
    }
  );
}