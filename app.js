window.addEventListener('load', () => {
    let long;
    let lat;
    const fullDescriptionApi = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}';


    // api from https://www.weatherbit.io/api/weather-current
    // https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=API_KEY
    // &lat=38.123&lon=-78.543


    console.log("sometig");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            //const openWheatherApi = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;


            console.log('API:' + api);

            fetch(api)
                .then(response => {
                    return response;
                })
                .then(data => {
                    console.log(data);
                });
        });
    }

});
