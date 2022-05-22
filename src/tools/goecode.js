const request = require('request')
const geocode = (country,callback) =>{
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+country+'.json?access_token=pk.eyJ1IjoiZmFyYWgxMjMiLCJhIjoiY2tpb3ZrNnE4MDB0cjJ0cDlzZXZ5eHQ5dSJ9.F6mgRF14yRJ6WN9JqtpWtw'
request({url:geocodeUrl,json:true},(error,response)=>{
    if(error){
        callback('Error has occurred',undefined)
    }
    else if (response.body.message){
       callback('Invalid key',undefined)
    }
    else if(response.body.features.length === 0){
       callback('Please enter valid country',undefined)
    }
    else{
       callback(undefined,{
           latitude: response.body.features[0].center[1],
           longtitude: response.body.features[0].center[0]
    })
    }
})
}
module.exports = geocode
