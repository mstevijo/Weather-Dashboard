var apiKey = "3b9376483d50764c1d4668b0607aee86";
// var cityName = "Portland";

function getWeather(){
    // console.log("hello world")
    var cityName = $("#city-input").val();
    var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="+ apiKey + "&units=imperial"; 
    // api.openweathermap.org/data/2.5/find?q=London&units=imperial;
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid="+ apiKey + "&units=imperial";
    
    $.ajax({
        url: queryURL1,
        method: "GET"
    })
    .then(function(response){
        $.ajax({
            url: queryURL2,
            method: "GET"})
            .then(function(response2){
                console.log(response2); 
                
                // $("#5-day-forcast").text(list);
            })
            lat = response.coord.lat;
            lon = response.coord.lon;
            var queryURLUV =
            "http://api.openweathermap.org/data/2.5/uvi?appid=3b9376483d50764c1d4668b0607aee86&lat=" +
            lat +
            "&lon=" +
            lon +
            "";
          $.ajax({
            url: queryURLUV,
            method: "GET",
          }).then(function (UVresponse) {
            console.log(UVresponse);
            // uv.text(UVresponse.value);
            if (UVresponse.value <= 2) {
              uv.css("background-color", "#299501");
            } else if (UVresponse.value >= 3 && UVresponse.value <= 5) {
              uv.css("background-color", "#F7E401");
            } else if (UVresponse.value >= 6 && UVresponse.value <= 7) {
              uv.css("background-color", "#F95901");
            } else if (UVresponse.value >= 8 && UVresponse.value <= 10) {
              uv.css("background-color", "#D90011");
            } else {
              uv.css("background-color", "#6C49CB");
            }
          });
            
        console.log(queryURL1);
      
        $(".tempurature").text(response.main.temp);
        $(".city-name").text(response.name);
        $(".humidity").text(response.main.humidity);
        $(".wind").text(response.wind.speed);
        $(".uv").text(UVresponse.value);
    })
    
    // $.ajax({
    //     url: queryURL2,
    //     method: "GET"
    // })
    // .then(function(response){
    //     console.log(response);
    //     $("#5-day-forcast").text(response)
    // }
}
$("#search-button").on("click", getWeather);



// I am presented with the city name, the date, an icon representation of weather conditions, 
// the temperature, the humidity, the wind speed, and the UV index
// "https://api.openweathermap.org/data/2.5/forecast?q="


