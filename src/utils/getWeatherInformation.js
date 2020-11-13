
export const getWeatherInformation = async (searchData) => {

    if(!isNaN(searchData)) {
        var searchUrl = 'https://interviews.apps.qlmortgageservices.com/api/v2/weather?zip=' + searchData 
    } else {
        searchData = searchData.charAt(0).toUpperCase() + searchData.slice(1);
        var searchUrl = 'https://interviews.apps.qlmortgageservices.com/api/v2/weather?city=' + searchData 
    }
    let weatherInfo = await fetch(searchUrl, {cache: "no-store"})
    .then((response) => {
        return response.json()
    }).catch((error) => {
        return error  
    })

    return weatherInfo
}   
