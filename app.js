window.addEventListener('load', () => {
    let long;
    let lat;
    const weatherbitKey = 'lsödas';
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");


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
                });
        });
    }
});
