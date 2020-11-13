import React from 'react'

let GetFiveDayForecast = (props) => {
    let dayCount = 1 
    return (
        <div className = 'forecast-wrapper'>   
            <span className = 'forecast-header'> Showing Five Day Forecast For:  {props.forecastData.timezone} </span>
            <div>
                {
                    props.forecastData.daily.map((val) => (
                        <div key = {val.dt}> 
                            <h3> Day: {dayCount++} </h3>
                            <ul>
                                <li> Temperature: 
                                    <ul>
                                        <li> Day: {val.temp.day} </li>
                                        <li> Evening: {val.temp.eve}</li>
                                        <li> Minimum: {val.temp.min}</li>
                                        <li> Maximum: {val.temp.max}</li>
                                    </ul>
                                </li>
                                <li> Feels Like: 
                                    <ul>
                                        <li> Morning: {val.temp.morn}</li>
                                        <li> Day: {val.temp.day}</li>
                                        <li> Night: {val.temp.night}</li>
                                        <li> Evening: {val.temp.eve}</li>
                                    </ul>
                                </li>
                                <li> 
                                    Wind Speed: {val.wind_speed}
                                </li>
                                <li>
                                    Wind Direction: {val.wind_deg}
                                </li>
                                <li>
                                    Precipitation: {val.rain ? val.rain : 0}
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default GetFiveDayForecast 