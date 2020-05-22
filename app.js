window.addEventListener('load', () => {
    let long;
    let lat;
    const weatherbitKey = 'hfadfjao';
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature"); //degree-section
    let temperatureSpan = document.querySelector(".temperature span"); //degree-section

    // api from https://www.weatherbit.io/api/weather-current
    // https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY
    // &lat=38.123&lon=-78.543

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${weatherbitKey}`;

            console.log('API:' + api);

            fetch(api)
                .then(response => {
                    console.log('RESPONSE:' + response);
                    return response.json();
                })
                .then(json => {
                    console.log(json.data[0]);
                    const {app_temp, timezone} = json.data[0];
                    const {description} = json.data[0].weather;
                    // set DOM elem from api
                    temperatureDegree.textContent = app_temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                    setIcons(document.querySelector(".icon"));

                    // TF=TC*9/5+32
                    let fahrenheit = (app_temp * 9) / 5 + 32;
                    // change temperature celcius/fhrenheit
                    temperatureSection.addEventListener('click', () => {
                        if (temperatureSpan.textContent === "C") {
                            temperatureSpan.textContent = "F";
                            temperatureDegree.textContent = fahrenheit;
                        } else {
                            temperatureSpan.textContent = "C"
                            temperatureDegree.textContent = app_temp;
                        }
                    })
                });
        });
    }

    function setIcons(iconID) {
        const skycons = new Skycons({"color": "white"});
        skycons.play();
        return skycons.set(iconID, Skycons.PARTLY_CLOUDY_DAY); // it can be diversed later
    }
});
