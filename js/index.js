$(document).ready(function(){
  var city_array = new Array();

  $.getJSON("js/cities.json", function(data){
    for(var i=0; i<data.length; i++){
      city_array.push(data[i].city + ", " + data[i].country);
    }
  });

  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=c5f24736063fac2f3ce3833b59d92ab3", function(data){
      htmlInput(data);
    });
  });

  function htmlInput(data) {
    //console.log(JSON.stringify(data));
    // Choose icon and background depending on weather condition
    var d = new Date();
    var h = d.getHours();
    var weatherIcon = "";
    switch(data.weather[0].main){
      case "Thunderstorm":
      weatherIcon = "wi-thunderstorm";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/thunderstorm-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/thunderstorm-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Drizzle":
      weatherIcon = "wi-sprinkle";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/drizzle-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/drizzle-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Rain":
      weatherIcon = "wi-rain";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/rain-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/rain-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Snow":
      weatherIcon = "wi-snow";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/snow-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/snow-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Clear":
      weatherIcon = "wi-cloud";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clear-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clear-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Clouds":
      weatherIcon = "wi-cloudy";
      if(h > 6 && h < 20){
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clouds-day.jpg')");
      }
      else {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/clouds-night.jpg')");
      }
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Smoke":
      weatherIcon = "wi-smoke";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Sand":
      weatherIcon = "wi-sandstorm";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Mist":
      case "Haze":
      case "Fog":
      weatherIcon = "wi-fog";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Squalls":
      case "Dust":
      weatherIcon = "wi-dust";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Volcanic Ash":
      weatherIcon = "wi-volcano";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
      case "Tornado":
      weatherIcon = "wi-tornado";
      $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url('../img/mist.jpg')");
      $("body").css("background-size", "100%");
      $("h1").css("color", "#3d5afe");
      break;
    }

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
    var myarr = data.weather[0].description.split(" ");
    for(var i=0; i<myarr.length; i++){
      myarr[i] = myarr[i][0].toUpperCase() + myarr[i].slice(1);
    }
    var description = myarr.join(" ");
    var html = "";
    html += "<div class='fade-div'>";
    html += "<h2>" + data.name + ", " + data.sys.country + "</h2>";
    html += "<table class='weather-table'> <tr> <td>";
    html += "<i class='wi animated " + hourIcon + "'></i>";
    html += "<p>" + day + " " + d.getHours() + ":" + minutes;
    html += "</td> <td>";
    html += "<div class='weather-temp'>";
    html += "<p><i class='wi animated " + weatherIcon + "'></i>"
    html += "<span class='celsius'>" + KeltoCel(data.main.temp) + "</span>";
    html += "<span class='fahrenheit'>" + KeltoFah(data.main.temp) + "</span>";
    html += "<a class='cel' href='javascript:void(0)'><i class='wi wi-celsius'></i></a>";
    html += " | <a class='fah' href='javascript:void(0)'><i class='wi wi-fahrenheit'></i></a></p>"
    html += "<p>" + description + "</p>";
    html += "</td> </tr> </table>";
    html += "<div class='city-name'><label for='city'>City: </label><br/><input id='city' placeholder='City Name'></div>";
    html += "</div>";

    $(".weather").html(html);
    $(".fade-div").css("display", "none");
    $(".fade-div").fadeIn(3500);
    $(".animated").css("position", "relative");
    $(".animated").animate({
      top: 0
    }, 2000);
    $(".weather-table").css("width", "100%");
    $(".wi-celsius, .wi-fahrenheit").css("font-size", "32px")
    $("td").css("width", "50%");


    $(".fahrenheit").hide();
    $(".cel").click(function(){
      $(".celsius").fadeIn(1000);
      $(".wi-celsius").css("color", "white");
      $(".fahrenheit").css("display","none");
      $(".wi-fahrenheit").css("color", "#3d5afe");
    });
    $(".fah").click(function(){
      $(".fahrenheit").fadeIn(1000);
      $(".wi-fahrenheit").css("color", "white");
      $(".celsius").css("display","none");
      $(".wi-celsius").css("color", "#3d5afe");
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
    $(".wi").css("color", "#3d5afe");
    $(".wi").css("text-shadow", "2px 2px black");

    $("#city").focus(function(){
      $("#city").css("outline", "none");
      $("#city").css("border-bottom", "3px solid #3d5afe");
    });
    $("#city").focusout(function(){
      $("#city").css("border-bottom", "none");
    });
    $(".wi-celsius").css("color", "white");
    $("#city").keypress(function(e){
      if(e.keyCode == 13){
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + $("#city").val() + "&APPID=c5f24736063fac2f3ce3833b59d92ab3", function(data){
          htmlInput(data);
        })
      }
    });

    $("#city").autocomplete({
      delay: 500,
      minLength: 3,
      source: city_array
    });

    if ($(window).width()<768) {
      $(".wi").css("font-size", "32px");
      $(".wi").css("text-shadow", "1px 1px black");
      $(".wi-celsius, .wi-fahrenheit").css("font-size", "18px");
      $("body").css("background-size", "800px 750px");
      $("body").css("background-repeat", "no-repeat");
      $("body").css("background-position", "center center");
      $("body").css("background-attachement", "fixed");
    }
  }

  function KeltoCel(Kel){
    return Math.round(Kel - 273.15);
  }

  function KeltoFah(Kel){
    return Math.round((Kel * 9 / 5) - 459.67);
  }
});
