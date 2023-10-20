<script>
        const searchInput = document.querySelector('.search input');
        const searchButton = document.querySelector('.search button');

        async function getWeather(city) {
            var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3386765eb5ae82336fca4364d6a823a4&units=metric`);
            if(res.status == 404) {
                document.querySelector('.error').style.display = "block";
            }

            else {
                document.querySelector('.error').style.display = "none";
            }
            var data = await res.json();
            console.log(data);
            document.querySelector('.celsius').innerHTML = Math.round(data.main.temp) + + "°C";
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + "%";
            document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "mph";
        
            if(data.weather[0].main == "Clouds") {
                image.src = "./WeatherImages/clouds.png"
            }
            
            else if(data.weather[0].main == "Clear") {
                image.src = "./WeatherImages/clear.png"
            }

            else if (data.weather[0].main == "Rain") {
                image.src = "./WeatherImages/rain.png"
            }

            else if (data.weather[0].main == "Drizzle") {
                image.src = "./WeatherImages/drizzle.png"
            }

            else if (data.weather[0].main == "Mist") {
                image.src = "./WeatherImages/mist.png"
            }
        }

        searchButton.addEventListener('click', () => {
            getWeather(searchInput.value);
        })
        
    </script>