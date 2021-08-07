$(document).ready(function(){
    $("#btn1").click(function(){
        // city fetch
        
       var city = $("input#city").val();
        if(city == ""){
            city = "Orlando";
        }
        console.log(city);
        var apilink ="https://api.openweathermap.org/data/2.5/weather?q="+city +"&appid=266540bf0888b001b174ff80ab9e5ba3";
    
        // JSON File
        $.getJSON(apilink, function(data){
            console.log(data);
    
            // icon of current weather
            var icon = "https://api.openweathermap.org/img/w/"+ data.weather[0].icon +".png";
            console.log(icon);
    
            // tempreture
            var tempk = data.main.temp;
            var temp = Math.floor(tempk - 273.15) ;
            temp = temp +"<span>&#8451;</span>";
            console.log(temp);
    
            // weather descrition
            var weather = data.weather[0].main;
            
            var desc = data.weather[0].description ;
            console.log(weather);
            console.log(desc);
    
            $(".icon").attr("src",icon);
            $(".weather").text(weather);
            $(".desc").text(desc);
            $(".temp").html(temp);
    
    
    
        });

    });

});