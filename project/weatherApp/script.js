const inputBox = document.querySelector('inputBox');
const Btn = document.getElementById('searchBtsearchBtn');
const Image = document.querySelector('weatherImage');
const Temp = document.querySelector('tempreture');
const Dsec = document.querySelector('description');
const Humidity = document.querySelector('humidity');
const Wind = document.querySelector('wind');



 async function checkWeather(city) {
    const api_key = "f376717e1a8209fae4ddd2536b5850c2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response => response.json());
    tempreture.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    RTCSessionDescription.innerHTML=`${weather_data.weather[0].description}`;
}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})