var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "data/2.5/weather?appid=b0fa6fa6d866e49c399795226cda2cea&units=metric";

module.exports = {
  getTemp: function(location){
      var encodedLocation = encodeURIComponent(location);
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

      return axios.get(requestUrl).then(function(res){
        if(res.data.cod && res.data.message){
          throw new Error(res.message);
        }else{
          return res.data.main.temp;
        }
      }, function(res){
        throw new Error(res.message);
      });
  }
}
