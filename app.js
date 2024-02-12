const apiKey=`30b35ef7100c44d3217f79728cf0fec1`;
const city="pune";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImage=document.querySelector(".weather-icon")



 async function fetchWheatherData(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
     const data= await response.json();
     console.log(data);
     console.log(data.main.temp);
     console.log(data.wind.speed);
     console.log(data.main.humidity);
     
     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
     document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
     document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}

searchBtn.addEventListener("click",()=>{
   fetchWheatherData(searchBox.value)
})


