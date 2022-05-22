const request = require('request')
const forecast = (latitude,longtitude,callback) =>{
    const weatherUrl= 'https://api.weatherapi.com/v1/current.json?key=51a20bc2793045b6b26142621220803&q=' + latitude + ',' +longtitude
        request({url:weatherUrl,json:true},(error,response)=>{
       // console.log(response.body)
       // low level error
       if(error){
           callback('Error has occureed',undefined)
       }
       else if(response.body.error){
           callback(response.body.error.message,undefined)
       }
       else {
           callback(undefined,'In ' + response.body.location.country + 
           ' temp is ' + response.body.current.temp_c)
       }
    
    })
}

module.exports = forecast