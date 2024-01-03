const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=adb5252fa2fd76258e4a289a0cfbd654&units=metric&q="


const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function chackweather(city){
    const response = await fetch(apiUrl + city);
    const data = await response.json();

    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
       

    document.querySelector(".city").innerHTML = data.name    ;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    }
}

searchbtn.addEventListener("click" , ()=>{
    chackweather(searchinput.value);
})

