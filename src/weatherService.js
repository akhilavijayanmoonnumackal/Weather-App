const API_KEY = "1f32cd52ea271d5934271dd484c5b11f";


// const makeIconURL = (iconId) => `https://o.remove.bg/downloads/156f487f-8f98-4591-bb27-7539e080b9fd/${iconId}.png`;
const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;



const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

    const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const {
        weather, 
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: {speed},
        sys: {country},
        name,
    } = data;

    const { description, icon } = weather[0]
    return {
        description, 
        iconURL: makeIconURL(icon), 
        temp, 
        feels_like, 
        temp_min, 
        temp_max,
        pressure, 
        humidity, 
        speed, 
        country, 
        name,
    };
};

export { getFormattedWeatherData };