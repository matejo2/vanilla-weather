window.addEventListener('load', () => {
    let long;
    let lat;
    const weatherbitKey = 'no keys in git pls'

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
                    return response;
                })
                .then(data => {
                    console.log('ERROR:' + data);
                });
        });
    }

});
