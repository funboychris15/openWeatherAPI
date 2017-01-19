
$(document).ready(function(){
    $("#go").click(function(){
        var searchVal= $("#search").val();
        var part1= "https://api.apixu.com/v1/current.json?";
        var part2= "key=a90bf5c92af543218bd212238170801";
        var part3= "&q=";
        var URL= part1 + part2 + part3 + searchVal;
        console.log(URL);
        $.getJSON(URL,function(response){
            // Temperature code
            var temp = "The Temperature is ";
            var tempVal= response.current.temp_f;
            console.log(tempVal);
            var TempResults= temp + tempVal;
            $("#weather-results").append(TempResults+" degrees Farenheit"+"<br>")
            $(this).css('background-color','red')
            
            // Wind code
            var wind= "The Wind Speed is ";
            var windVal= response.current.wind_mph;
            console.log(windVal);
            var WindResults= wind + windVal;
            $("#weather-results").append(WindResults+ " miles per hour" + "<br>")
            
            //Humidity code
            var Humidity= "The Humidity is ";
            var humidityVal= response.current.humidity;
            console.log(humidityVal);
            var humidityResults= Humidity + humidityVal;
            $("#weather-results").append(humidityResults + "%" + "<br>")
        });
    
    
    
        
    });
})