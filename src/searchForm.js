import React, {useState, useEffect} from 'react'
import {getWeatherInformation} from './utils/getWeatherInformation'
import {getFiveDayForecast} from './utils/getFiveDayForecast'
import WeatherData from './WeatherData'
import FiveDayForecast from './FiveDayForecast'

let SearchForm = () => {
    const [searchData, updateSearch] = useState(null)
    const [showErr, onError] = useState(false)
    const [weatherData, updateWeatherData] = useState(null)
    const [location, setLocation] = useState(null)
    const [forecastData, setForecastData] = useState(null)
    const [showFiveDayForecast, setShowFiveDayForecast] = useState(false)

    let setWeatherData = (data) => {
        data.then((result) => {
            console.log(result)
            if(!result.statusCode) {
                updateWeatherData(result)
                let location = {}
                console.log(result.coord.lon)
                location.longitude = result.coord.lon 
                location.latitude = result.coord.lat 
                setLocation(location)
            } else {
                onError(true)
            }
        })
    }

    let setFiveDayForecastData = (data) => {
        data.then((result) => {
            setForecastData(result)
        })
    }

    return (
        <div className = 'search-form-wrapper'> 
            <div className = 'search-form'>
                <label className = 'search-label'> Search City or Zip Code </label> 
                <input className = 'search-textbox' type = 'text' id = 'search' onChange = {(event) => {
                    if(showErr && event.target.value)
                        onError(false)
                    updateSearch(event.target.value)
                }}/>  
            
             {
                 showErr ? 
                    <h3 className = 'error-text'> Please enter a valid City or Zip Code. </h3> 
                : 
                    ''
             }
             </div>
            <div className = 'buttons-container'>
                <div className = 'button' onClick = {() => {
                    let isError = searchData ? false : true  
                    if(isError)
                        onError(isError)
                    else {
                        let currentWeatherData = getWeatherInformation(searchData)
                        setWeatherData(currentWeatherData) 
                        if(forecastData)
                            setForecastData(null)
                        
                    }                     
                }}> Search </div>
                {
                    weatherData ? 
                        <WeatherData 
                            weatherData = {weatherData}
                        /> 
                    : ''
                }
                {
                    location ? 
                        <div className = 'button' onClick = {() => {
                            let forecastData = getFiveDayForecast(location.latitude, location.longitude)
                            setFiveDayForecastData(forecastData)
                            setShowFiveDayForecast(true)
                        }}> 
                            View 8 day Forecast
                        </div>
                    : 
                        ''  
                }
                {
                    showFiveDayForecast && forecastData ?
                        <FiveDayForecast
                            forecastData = {forecastData}
                            city = {weatherData.name}
                            country = {weatherData.sys.country}
                        />
                    : ''
                }
            </div>
        </div> 
    )
}

export default SearchForm 