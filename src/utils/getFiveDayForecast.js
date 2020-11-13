
export const getFiveDayForecast = async (latitude, longitude) => {
    let forecastURL = 'https://interviews.apps.qlmortgageservices.com/api/v1/forecast?lat=' + latitude + '&lon=' + longitude

    let forecastInfo = await fetch(forecastURL, {cache: "no-store"})
    .then((response) => {
        return response.json()
    }).catch((error) => {
        return error 
    })
    return forecastInfo
}

