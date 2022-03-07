const request = require('request');

const geocode = (address, callback) => {//dau tien dùng address(url để gọi request lấy response trả về từ api server)
                                        //trả vô cho callback để làm việc khác như là xuất, pass cho forecast,...
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaHV5dGFuZzk5IiwiYSI6ImNrenNvYTAzcjBma3Qyb3AzZjlhY2o5cnIifQ.MZ6FHemnXf_kScqp-opxlQ&limit=1'

    request({ url: url, json: true},(error,response) => {
        if (error) {
            callback('Unable to connnect to the location service!',undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to decode the location. Try another search.',undefined)
        } else {
            const data = response.body.features[0]
            const {center, place_name} = data
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}
module.exports = geocode