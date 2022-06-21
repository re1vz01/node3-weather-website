const request = require('request')

const forecast = (latitude, longitude, callback) =>{

    const url = `http://api.weatherstack.com/current?access_key=4d906e60f10bff75a2fa94756d0e26ef&query=${latitude},${longitude}`
    //http://api.weatherstack.com/current?access_key=4d906e60f10bff75a2fa94756d0e26ef&query=37.8267,-122.4233&units=m

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            console.log(body)
            callback(body.error.info , undefined)
        }else{
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast





