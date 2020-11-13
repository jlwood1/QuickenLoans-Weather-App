
export const getWeatherInformation = async (searchData) => {

    if(!isNaN(searchData)) {
        var searchUrl = 'https://interviews.apps.qlmortgageservices.com/api/v2/weather?zip=' + searchData 
    } else {
        var searchUrl = 'https://interviews.apps.qlmortgageservices.com/api/v2/weather?city=' + searchData 
    }
    console.log(searchUrl)
    let weatherInfo = await fetch(searchUrl)
    .then((response) => {
        return response.json()
    }).catch((error) => {
        return error  
    })

    return weatherInfo
}   
