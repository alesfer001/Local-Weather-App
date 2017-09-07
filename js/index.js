$(document).ready(function(){
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    //"https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=c5f24736063fac2f3ce3833b59d92ab3"
    $.getJSON("js/example_req.json", function(data){
      console.log(JSON.stringify(data));

      // Choose icon depending on weather condition
      var weatherIcon = "";
      switch(data.weather[0].main){
        case "Thunderstorm":
        weatherIcon = "wi-thunderstorm";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/thunderstorm.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
        case "Drizzle":
        weatherIcon = "wi-sprinkle";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/drizzle.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
        case "Rain":
        weatherIcon = "wi-rain";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/rain.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
        case "Snow":
        weatherIcon = "wi-snow";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/snow.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
        case "Clear":
        weatherIcon = "wi-cloud";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clear.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
        case "Clouds":
        weatherIcon = "wi-cloudy";
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clouds.jpg')");
        $("body").css("background-size", "100%");
        $("h1").css("color", "#3d5afe");
        break;
      }

      var d = new Date();
      // Get Hour Icon
      var hourIcon = "";
      switch(d.getHours()){
        case 0:
        case 12:
        hourIcon = "wi-time-12";
        break;
        case 1:
        case 13:
        hourIcon = "wi-time-1";
        break;
        case 2:
        case 14:
        hourIcon = "wi-time-2";
        break;
        case 3:
        case 15:
        hourIcon = "wi-time-3";
        break;
        case 4:
        case 16:
        hourIcon = "wi-time-4";
        break;
        case 5:
        case 17:
        hourIcon = "wi-time-5";
        break;
        case 6:
        case 18:
        hourIcon = "wi-time-6";
        break;
        case 7:
        case 19:
        hourIcon = "wi-time-7";
        break;
        case 8:
        case 20:
        hourIcon = "wi-time-8";
        break;
        case 9:
        case 21:
        hourIcon = "wi-time-9";
        break;
        case 10:
        case 22:
        hourIcon = "wi-time-10";
        break;
        case 11:
        case 23:
        hourIcon = "wi-time-11";
        break;
      }

      // Get Day
      var day = "";
      switch(d.getDay()){
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        case 3:
        day = "Wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Saturday";
        break;
      }

      // Minutes
      var minutes = "";
      if(d.getMinutes() < 10){
        minutes = "0" + d.getMinutes();
      }
      else{
        minutes = d.getMinutes().toString();
      }

      // Parse data and output html
      var html = "";
      html += "<h2>" + data.name + ", " + data.sys.country + "</h2>";
      html += "<table class='weather-table'> <tr> <td>";
      html += "<i class='wi " + hourIcon + "'></i>";
      html += "<p>" + day + " " + d.getHours() + ":" + minutes;
      html += "</td> <td>";
      html += "<div class='weather-temp'>";
      html += "<p><i class='wi " + weatherIcon + "'></i>"
      html += "<span class='celsius'>" + KeltoCel(data.main.temp) + "</span>";
      html += "<span class='fahrenheit'>" + KeltoFah(data.main.temp) + "</span>";
      html += "<a class='cel' href='javascript:void(0)'><i class='wi wi-celsius'></i></a>";
      html += " | <a class='fah' href='javascript:void(0)'><i class='wi wi-fahrenheit'></i></a></p>"
      html += "<p>" + data.weather[0].description + "</p>";
      html += "</td> </tr> </table>";

      $(".weather").html(html);
      $(".weather-table").css("width", "100%");
      $(".wi-celsius, .wi-fahrenheit").css("font-size", "32px")
      $("td").css("width", "50%");

      $(".fahrenheit").hide();
      $(".cel").click(function(){
        $(".celsius").css("display","inline-block");
        $(".fahrenheit").css("display","none");
      });
      $(".fah").click(function(){
        $(".fahrenheit").css("display","inline-block");
        $(".celsius").css("display","none");
      });

      switch(data.weather[0].main){
        case "Thunderstorm":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
        case "Drizzle":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
        case "Rain":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
        case "Snow":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
        case "Clear":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
        case "Clouds":
        $(".wi").css("color", "#3d5afe");
        $(".wi").css("text-shadow", "2px 2px black");
        break;
      }
    });
  });

  function KeltoCel(Kel){
    return Math.round(Kel - 273.15);
  }

  function KeltoFah(Kel){
    return Math.round((Kel * 9 / 5) - 459.67);
  }
});