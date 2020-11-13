import react from 'react'

let WeatherData = (props) => {
    return (
        <div className = 'weather-data-wrapper'> 
            <ul>
                <li> City Name: {props.weatherData.name} </li>
                <li> Country Name: {props.weatherData.sys && props.weatherData.sys.country ? props.weatherData.sys.country : ''} </li>
                <li> Sunrise Time: {props.weatherData.sys.sunrise} </li>
                <li> Sunset Time: {props.weatherData.sys.sunset} </li>
                <li> Temperature: {props.weatherData.main.temp} </li>
                <li> Feels Like: {props.weatherData.main.feels_like} </li>
                <li> Humidity: {props.weatherData.main.humidity} </li>
                <li> Pressure: {props.weatherData.main.pressure} </li>
                <li> Wind Speed: {props.weatherData.wind.speed}  </li>
                <li> Wind Direction: {props.weatherData.wind.deg} </li>
                <li> Clouds Description: {props.weatherData.weather[0].description} </li>
                <li> Visibility: {props.weatherData.visibility} </li>
                <li> Precipitation: {props.weatherData.weather[0].main} </li>
            </ul>
        </div> 
    )
}

export default WeatherData 